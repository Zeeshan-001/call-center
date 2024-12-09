import React, { useEffect, useState } from "react";
import { getAllCustomers } from "./data";
import Client from "./components/client-data/Client";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Cart from "./components/Cart";
import UserProgess, {
  UserProgressContext,
  UserProgressProvider,
} from "./store/UserProgressProvider";

function App() {
  const [client, setClient] = useState();
  const [clientsData, setClientsData] = useState([]);
  const [clientId, setClinetID] = useState("");
  const [modal, setmodal] = useState("");
  const [kunden, setKunden] = useState({});

  useEffect(() => {
    setClientsData(getAllCustomers);
  }, []);

  const handleClientSearch = (client) => {
    setClient(client);
  };

  const handleModelData = (modal, id) => {
    if (modal && id) {
      setmodal(modal);
      setKunden(clientsData.find((client) => client.id === id));
    } else {
      console.alert("Kunde nicht gefunden!");
    }
  };

  return (
    <UserProgressProvider>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Header onClientSearch={handleClientSearch} />
          <Client onSearch={client} onModalShow={handleModelData} />
        </div>

        {modal && <Cart kunde={kunden} onModal={modal} />}
      </div>
    </UserProgressProvider>
  );
}

export default App;
