import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { StoreProvider } from "./context/StoreContext.jsx";
import { OrderMessageProvider } from "./context/OrderMessageContext";
import { OwnerAuthProvider } from "./context/OwnerAuthContext";
import { OrdersProvider } from "./context/OrdersContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <OrderMessageProvider>
      <StoreProvider>
        <OwnerAuthProvider>
          <OrdersProvider>
            <App />
          </OrdersProvider>
        </OwnerAuthProvider>
      </StoreProvider>
    </OrderMessageProvider>
  </BrowserRouter>
);