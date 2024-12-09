import React, { useContext } from "react";
import { RiCloseFill } from "react-icons/ri";
import { FaCaretRight } from "react-icons/fa6";
import { UserProgressContext } from "../../store/UserProgressProvider";

function DamagesInfo({ damages }) {
  const { hideCart } = useContext(UserProgressContext);
  return (
    <section className="vertraege">
      <h3>
        Übersicht Schäden
        <span onClick={hideCart}>
          <RiCloseFill />
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
