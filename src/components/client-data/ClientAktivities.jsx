import React from "react";
import { RxCalendar } from "react-icons/rx";

const ClientAktivities = () => {
  return (
    <main className="activities-container">
      <h3>
        <span>Kontaktverlauf</span>
        <span title="Kalender">
          <RxCalendar />
        </span>
      </h3>

      <form action="#" className="searchItem">
        <input type="text" placeholder="Aktivität Suchen" />
      </form>

      <div className="inner">
        <ul data-module="activities">
          <li>
            <div className="activity flex">
              <span>Anlage Person:</span>
              <a href="#">Max Mustermann</a>
            </div>

            <ul>
              <li>
                <span data-icon="calc_month" aria-label="Date Icon"></span>
                <time dateTime="2024-01-12">12.01.2024</time>
              </li>

              <li className="components">
                <span>TouchActive</span>
              </li>
            </ul>
          </li>

          {/* 2 */}

          <li>
            <div className="activity flex">
              <span>Anlage Vertrag:</span>
              <a href="#">SMART4001-4382391</a>
            </div>
            <ul>
              <li>
                <span data-icon="calc_month" aria-label="Date Icon"></span>
                <time dateTime="2024-01-12">12.01.2024</time>
              </li>
              <li className="components">
                <span>TouchActive</span>
              </li>
            </ul>
          </li>

          <li className="danger">
            <div className="activity flex">
              <span>Mahnung:</span>
              <a href="#">SMART4001-4382391</a>
            </div>
            <ul>
              <li>
                <span data-icon="calc_month" aria-label="Date Icon"></span>
                <time dateTime="2024-01-12">12.01.2024</time>
              </li>
              <li className="components">
                <span>TouchActive</span>
              </li>
            </ul>
          </li>

          <li className="success">
            <div className="activity flex">
              <span>Kontenausgleich:</span>
              <a href="#">SMART4001-4382391</a>
            </div>
            <ul>
              <li>
                <span data-icon="calc_month" aria-label="Date Icon"></span>
                <time dateTime="2024-01-12">12.01.2024</time>
              </li>
              <li className="components">
                <span>TouchActive</span>
              </li>
            </ul>
          </li>

          <li className="warning">
            <div className="activity flex">
              <span>Schadensmeldung:</span>
              <a href="#">SMART4001-4382391</a>
            </div>
            <ul>
              <li>
                <span data-icon="calc_month" aria-label="Date Icon"></span>
                <time dateTime="2024-03-22">22.03.2024</time>
              </li>
              <li className="components">
                <span>Kundenportal</span>
              </li>
            </ul>
          </li>

          <li>
            <div className="activity flex">
              <span>Anlage Person:</span>
              <a href="#">Max Mustermann</a>
            </div>
            <ul>
              <li>
                <span data-icon="calc_month" aria-label="Date Icon"></span>
                <time dateTime="2024-01-12">12.01.2024</time>
              </li>
              <li className="components">
                <span>TouchActive</span>
              </li>
            </ul>
          </li>

          <li>
            <div className="activity flex">
              <span>Anlage Person:</span>
              <a href="#">Max Mustermann</a>
            </div>

            <ul>
              <li>
                <span data-icon="calc_month" aria-label="Date Icon"></span>
                <time dateTime="2024-01-12">12.01.2024</time>
              </li>

              <li className="components">
                <span>TouchActive</span>
              </li>
            </ul>
          </li>

          <li className="warning">
            <div className="activity flex">
              <span>Schadensmeldung:</span>
              <a href="#">SMART4001-4382391</a>
            </div>
            <ul>
              <li>
                <span data-icon="calc_month" aria-label="Date Icon"></span>
                <time dateTime="2024-03-22">22.03.2024</time>
              </li>
              <li className="components">
                <span>Kundenportal</span>
              </li>
            </ul>
          </li>

          <li className="danger">
            <div className="activity flex">
              <span>Mahnung:</span>
              <a href="#">SMART4001-4382391</a>
            </div>
            <ul>
              <li>
                <span data-icon="calc_month" aria-label="Date Icon"></span>
                <time dateTime="2024-01-12">12.01.2024</time>
              </li>
              <li className="components">
                <span>TouchActive</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default ClientAktivities;
