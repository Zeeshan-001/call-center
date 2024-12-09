import { createContext, useState } from "react";
import PropTypes from "prop-types";

const UserProgressContext = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
});

function UserProgressProvider({ children }) {
  const [progress, setProgress] = useState("");

  const showCart = () => {
    setProgress("cart");
  };

  const hideCart = () => {
    setProgress("");
  };

  const userProgressValue = {
    progress,
    showCart,
    hideCart,
  };

  return (
    <UserProgressContext.Provider value={userProgressValue}>
      {children}
    </UserProgressContext.Provider>
  );
}

UserProgressProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { UserProgressContext, UserProgressProvider };
