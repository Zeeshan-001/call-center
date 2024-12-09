import React from "react";
import { FaCaretDown } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";

function DamagesInfo({ damages }) {
  return (
    <section className="vertraege">
      <h3>
        Übersicht Schäden
        <span>
          <FaCaretDown />
        </span>
      </h3>

      <table>
        <thead>
          {damages && damages.length > 0 ? (
            damages.map((damage, index) => (
              <tr key={index}>
                <th className="flex">
                  <FaCaretRight />
                  <span>{damage.typ}</span>
                </th>
                <th>{damage.datum}</th>
              </tr>
            ))
          ) : (
            <tr>
              <td>Keine invoices gefunden</td>
            </tr>
          )}
        </thead>
      </table>
    </section>
  );
}

export default DamagesInfo;
