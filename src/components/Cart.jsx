import { useContext } from "react";
import Modal from "./UI/Modal";
import ClientInfo from "./client-data/ClientInfo";
import DamagesInfo from "./client-data/DamagesInfo";
import ClientVerträge from "./client-data/ClientVerträge";
import { UserProgressContext } from "../store/UserProgressProvider";
import ClientInvoiceManagement from "./client-data/ClientInvoiceManagement";

function Cart({ onModal, kunde }) {
  const useProgessCtx = useContext(UserProgressContext);
  return (
    <Modal className="cart" open={useProgessCtx.progress === "cart"}>
      {onModal === "info" && <ClientInfo customer={kunde} />}
      {onModal === "vorträge" && <ClientVerträge vorträge={kunde.vertrage} />}
      {onModal === "inkasso" && (
        <ClientInvoiceManagement invoices={kunde.inkasso} />
      )}
      {onModal === "damages" && <DamagesInfo damages={kunde.schäden} />}
    </Modal>
  );
}

export default Cart;
