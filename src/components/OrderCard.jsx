import React from "react";

const statusFlow = ["Pending", "Preparing", "Ready"];

const OrderCard = ({ order, onStatusChange }) => {
  const nextStatus =
    statusFlow[statusFlow.indexOf(order.status) + 1];

  return (
    <div className="bg-white rounded-xl p-4 shadow border">
      <div className="flex justify-between mb-2">
        <h3 className="font-semibold">{order.id}</h3>
        <span className="text-sm text-gray-500">
          {order.status}
        </span>
      </div>

      <ul className="text-sm mb-3">
        {order.items.map((item, i) => (
          <li key={i}>
            {item.name} × {item.qty}
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center">
        <p className="font-semibold">₹{order.total}</p>

        {nextStatus && (
          <button
            onClick={() => onStatusChange(order.id, nextStatus)}
            className="px-3 py-1 rounded-lg bg-(--tomato) text-white text-sm"
          >
            Mark {nextStatus}
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderCard;