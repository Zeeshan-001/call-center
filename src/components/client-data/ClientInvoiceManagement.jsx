import React, { useContext } from "react";
import { RiCloseFill } from "react-icons/ri";
import { UserProgressContext } from "../../store/UserProgressProvider";

function ClientInvoiceManagement({ invoices }) {
  const { hideCart } = useContext(UserProgressContext);

  return (
    <section className="inkasso">
      <h3>
        Abrechnungsübersicht
        <span onClick={hideCart}>
          <RiCloseFill />
        </span>
      </h3>

      <form action="#" className="searchItem">
        <input type="text" placeholder="Eingeben" />
      </form>

      <table>
        <thead>
          <tr>
            <th>Versicherung</th>
            <th>Datum</th>
            <th>Betrag</th>
          </tr>
        </thead>
        <tbody>
          {invoices && invoices.length > 0 ? (
            invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td>{invoice.typ}</td>
                <td>{invoice.datum}</td>
                <td>{invoice.betrag}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                Keine Rechnungen gefunden
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}

export default ClientInvoiceManagement;
