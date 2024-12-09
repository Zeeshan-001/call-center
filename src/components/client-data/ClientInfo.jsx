import React, { useEffect, useState } from "react";
import { RiCloseFill } from "react-icons/ri";

const ClientInfo = ({ customer }) => {
  console.log(customer);
  return (
    <section className="kunden-info">
      <h3>
        Kundeninformationen
        <span>
          <RiCloseFill />
        </span>
      </h3>

      {customer ? (
        <table>
          <tbody>
            <tr>
              <td>Anrede:</td>
              <td>{customer.anrede}</td>
            </tr>
            <tr>
              <td>Vorname:</td>
              <td>{customer.vorname}</td>
            </tr>
            <tr>
              <td>Nachname:</td>
              <td>{customer.nachname}</td>
            </tr>
            <tr>
              <td>Geburtsdatum:</td>
              <td>{customer.geburtsdatum}</td>
            </tr>
            <tr>
              <td>Geschlecht:</td>
              <td>{customer.geschlecht}</td>
            </tr>
            <tr>
              <td>Adresse:</td>
              <td>{customer.adresse}</td>
            </tr>
            <tr>
              <td>Rechnungsanschrift:</td>
              <td>{customer.rechnungsanschrift}</td>
            </tr>
            <tr>
              <td>Telefon:</td>
              <td>{customer.telefon}</td>
            </tr>
            <tr>
              <td>Mobil:</td>
              <td>{customer.mobil}</td>
            </tr>
            <tr>
              <td>E-mail:</td>
              <td>{customer.email}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default ClientInfo;
