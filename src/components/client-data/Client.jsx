import React, { useContext, useEffect, useState } from "react";
import ClientInfo from "./ClientInfo";
import ClientVerträge from "./ClientVerträge";
import ClientInvoiceManagement from "./ClientInvoiceManagement";
import DamagesInfo from "./DamagesInfo";
import ClientAktivities from "./ClientAktivities";
import { extractCustomerInfo } from "../../data";
import { FaRegSadTear } from "react-icons/fa";
import { UserProgressContext } from "./../../store/UserProgressProvider";

function Client({ onSearch, onClientClick }) {
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);

  const { progress, showCart, hideCart } =
    React.useContext(UserProgressContext);

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

  // function handleShowCart() {
  //   UserProgessCtx.showCart();
  // }

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
                <td>{customer.vorname}</td>
                <td>{customer.nachname}</td>
                <td>{customer.geburtsdatum}</td>
                <td>
                  <button onClick={showCart}>Vorträge</button>
                </td>
                <td>
                  <button>Schäden</button>
                </td>
                <td>
                  <button>Abrechnungsübersicht</button>
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
