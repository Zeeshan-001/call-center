import { useEffect, useState } from "react";
import "./App.css";
import { getAllCustomers } from "./data";
import Client from "./components/client-data/Client";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import ClientInfo from "./components/client-data/ClientInfo";
import ClientAktivities from "./components/client-data/ClientAktivities";
import ClientInvoiceManagement from "./components/client-data/ClientInvoiceManagement";
import ClientVerträge from "./components/client-data/ClientVerträge";
import DamagesInfo from "./components/client-data/DamagesInfo";
import Cart from "./components/Cart";
import UserProgess, {
  UserProgressProvider,
} from "./store/UserProgressProvider";

function App() {
  const [client, setClient] = useState();
  const [clientsData, setClientsData] = useState([]);
  const [clientInfoModal, setClientInfoModal] = useState(false);

  useEffect(() => {
    setClientsData(getAllCustomers);
  }, []);

  const handleClick = (seledType) => {
    setClientInfoModal(!clientInfoModal);
  };

  const handleClientSearch = (client) => {
    setClient(client);
  };

  return (
    <UserProgressProvider>
      <div className="app">
        {/* <ClientInfo customer={clientsData[0]} />
      <ClientInvoiceManagement invoices={clientsData[0].inkasso} />
      <ClientVerträge vorträge={clientsData[0].vertrage} />
      <DamagesInfo damages={clientsData[0].schäden} /> */}
        <Sidebar />
        <div className="content">
          <Header onClientSearch={handleClientSearch} />
          <Client onSearch={client} onClientClick={handleClick} />
        </div>

        <Cart customer={clientsData[0]} />
      </div>
    </UserProgressProvider>
  );
}

export default App;
