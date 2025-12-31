import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, description, price, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const [wait] = useState(() => Math.floor(Math.random() * 20) + 10); // 10–30 min

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
      {/* IMAGE */}
      <div className="relative w-full h-40 sm:h-45 md:h-50 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />

        {/* ADD / COUNTER */}
        {!cartItems[id] ? (
          <button
            onClick={() => addToCart(id)}
            className="absolute bottom-3 right-3 bg-(--tomato) text-white w-9 h-9 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition"
          >
            +
          </button>
        ) : (
          <div className="absolute bottom-3 right-3 bg-white rounded-full shadow-md px-3 py-1 flex items-center gap-2">
            <button
              onClick={() => removeFromCart(id)}
              className="text-(--tomato) text-xl font-bold"
            >
              –
            </button>
            <span className="text-(--tomato) font-semibold">
              {cartItems[id]}
            </span>
            <button
              onClick={() => addToCart(id)}
              className="text-(--tomato) text-lg font-bold"
            >
              +
            </button>
          </div>
        )}
      </div>

      {/* DETAILS */}
      <div className="p-4 flex flex-col gap-2 grow">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
            {name}
          </h3>
          <img src={assets.rating_starts} className="w-16.25" />
        </div>

        <p className="text-sm text-gray-500 line-clamp-2">{description}</p>

        <div className="mt-auto flex justify-between items-center">
          <p className="text-xl font-bold text-(--tomato)">₹{price * 70}</p>

          <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-md">
            ⏱ {wait} min
          </span>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;