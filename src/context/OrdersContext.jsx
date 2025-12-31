import { createContext, useState } from "react";

export const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([
    {
      id: "ORD101",
      canteen: "Snackers",
      items: [{ name: "Burger", qty: 2, price: 140 }],
      status: "Pending",
      total: 280,
    },
    {
      id: "ORD102",
      canteen: "Campus Cafe",
      items: [{ name: "Ice Cream", qty: 1, price: 140 }],
      status: "Preparing",
      total: 140,
    },
    {
      id: "ORD103",
      canteen: "Snackers",
      items: [{ name: "Momos", qty: 3, price: 70 }],
      status: "Ready",
      total: 210,
    },
  ]);

  const updateOrderStatus = (id, newStatus) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === id ? { ...o, status: newStatus } : o
      )
    );
  };

  return (
    <OrdersContext.Provider value={{ orders, updateOrderStatus }}>
      {children}
    </OrdersContext.Provider>
  );
};