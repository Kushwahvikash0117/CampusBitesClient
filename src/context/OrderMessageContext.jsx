import { createContext, useState } from "react";

export const OrderMessageContext = createContext();

export const OrderMessageProvider = ({ children }) => {
  const [orderMessage, setOrderMessage] = useState("");

  const showMessage = (msg) => {
    setOrderMessage(msg);
    setTimeout(() => setOrderMessage(""), 3000);
  };

  return (
    <OrderMessageContext.Provider value={{ orderMessage, showMessage }}>
      {children}
    </OrderMessageContext.Provider>
  );
};