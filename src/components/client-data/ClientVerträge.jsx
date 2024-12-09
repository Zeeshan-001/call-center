import React from "react";
import { FaCaretDown } from "react-icons/fa6";

function ClientVerträge({ vorträge }) {
  return (
    <section className="vertraege">
      <h3>
        Übersicht Verträge
        <span>
          <FaCaretDown />
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
          <tr>
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
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default ClientVerträge;
