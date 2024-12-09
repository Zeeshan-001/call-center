import Modal from "./UI/Modal";
import { UserProgressContext } from "../store/UserProgressProvider";
import { useContext } from "react";
import ClientInfo from "./client-data/ClientInfo";

function Cart({ customer }) {
  const useProgessCtx = useContext(UserProgressContext);

  return (
    <Modal className="cart" open={useProgessCtx.progress === "cart"}>
      <ClientInfo customer={customer} />
    </Modal>
  );
}

export default Cart;
