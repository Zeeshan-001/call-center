import React, { useEffect, useState } from "react";
import ClientAktivities from "./ClientAktivities";
import { extractCustomerInfo } from "../../data";
import { FaRegSadTear } from "react-icons/fa";
import { UserProgressContext } from "./../../store/UserProgressProvider";

function Client({ onSearch, onModalShow }) {
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);

  const { progress, showCart } = React.useContext(UserProgressContext);

  useEffect(() => {
    const fetchedCustomers = extractCustomerInfo();
    setCustomers(fetchedCustomers);
    setFilteredCustomers(fetchedCustomers);
  }, []);

  useEffect(() => {
    if (onSearch) {
      const filtered = customers.filter(
        (customer) =>
          customer.vorname.toLowerCase().startsWith(onSearch.toLowerCase()) ||
          customer.nachname.toLowerCase().startsWith(onSearch.toLowerCase())
      );
      setFilteredCustomers(filtered);
    } else {
      setFilteredCustomers(customers);
    }
  }, [onSearch, customers]);

  return (
    <section className="clientsContainer">
      <table>
        <thead>
          <tr>
            <th>Anrede</th>
            <th>Vorname</th>
            <th>Nachname</th>
            <th>Geburtsdatum</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        {/* Filter Customer and Show Reasult if Found otherweise Give Messege not Found */}
        <tbody>
          {filteredCustomers && filteredCustomers.length > 0 ? (
            filteredCustomers.map((customer, index) => (
              <tr key={index}>
                <td>{customer.anrede}</td>
                {/* Link für customer Info */}
                <td onClick={() => onModalShow("info", customer.id)}>
                  <span className="clientinfoLink" onClick={showCart}>
                    {customer.vorname}
                  </span>
                </td>
                <td>{customer.nachname}</td>
                <td>{customer.geburtsdatum}</td>
                {/* Customer Agreements */}
                <td onClick={() => onModalShow("vorträge", customer.id)}>
                  <button onClick={showCart}>Vorträge</button>
                </td>
                {/* Customer Damages */}
                <td onClick={() => onModalShow("damages", customer.id)}>
                  <button onClick={showCart}>Schäden</button>
                </td>
                {/* Customer Invoices */}
                <td onClick={() => onModalShow("inkasso", customer.id)}>
                  <button onClick={showCart}>Abrechnungs</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="flex">
                <FaRegSadTear />
                Keine Ergebnisse gefunden
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div>
        <ClientAktivities />
      </div>
    </section>
  );
}

export default Client;
