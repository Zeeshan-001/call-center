import React, { useContext } from "react";
import { RiCloseFill } from "react-icons/ri";
import { UserProgressContext } from "../../store/UserProgressProvider";

function ClientVerträge({ vorträge }) {
  const { hideCart } = useContext(UserProgressContext);

  return (
    <section className="vertraege">
      <h3>
        Übersicht Verträge
        <span onClick={hideCart}>
          <RiCloseFill />
        </span>
      </h3>
      <table>
        <thead>
          <tr>
            <th>Versicherung</th>
            <th>Vertragsnummer</th>
            <th>Beginn</th>
          </tr>
        </thead>
        <tbody>
          {vorträge && vorträge.length > 0 ? (
            vorträge.map((vor, index) => (
              <tr key={index}>
                <td>{vor.typ}</td>
                <td>{vor.nummer}</td>
                <td>{vor.startdatum}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>Keine Vorträge gefunden</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}

export default ClientVerträge;
