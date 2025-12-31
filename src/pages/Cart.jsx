import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    food_list,
    removeFromCart,
    getTotalCartAmount,
    foodIdToCanteen,
  } = useContext(StoreContext);

  const cartList = food_list.filter((item) => cartItems[item._id]);

  // 🧠 CANTEEN-WISE BILL
  const canteenTotals = {};
  cartList.forEach((item) => {
    const canteen = foodIdToCanteen[item._id] || "Unknown";
    if (!canteenTotals[canteen]) canteenTotals[canteen] = 0;
    canteenTotals[canteen] += item.price * cartItems[item._id];
  });

  const deliveryFee = cartList.length === 0 ? 0 : 40;

  return (
    <div className="section mt-24 mb-20">
      <h2 className="text-3xl font-semibold mb-8">Your Cart</h2>

      {cartList.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-xl border">
          <p className="text-gray-600 mb-4">Your cart is empty 🍽️</p>
          <Link
            to="/"
            className="px-6 py-2 rounded-full bg-(--tomato) text-white font-semibold"
          >
            Browse Menu
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* ITEMS */}
          <div className="lg:col-span-2 space-y-6">
            {cartList.map((item) => (
              <div
                key={item._id}
                className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                <div className="flex flex-col grow">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-sm text-gray-500 line-clamp-1">
                    {item.description}
                  </p>

                  <div className="mt-auto flex justify-between items-center">
                    <p className="font-bold text-(--tomato)">
                      ₹{item.price * 70} × {cartItems[item._id]}
                    </p>

                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="text-sm text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* SUMMARY */}
          <div className="bg-gray-50 p-6 rounded-xl border h-fit">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

            {/* CANTEEN RECEIPT */}
            <div className="space-y-2 text-sm">
              {Object.entries(canteenTotals).map(([canteen, amount]) => (
                <div key={canteen} className="flex justify-between">
                  <span>{canteen}</span>
                  <span>₹{amount * 70}</span>
                </div>
              ))}
            </div>

            <hr className="my-3" />

            <div className="flex justify-between text-sm">
              <span>Delivery Fee</span>
              <span>₹{deliveryFee}</span>
            </div>

            <div className="flex justify-between font-semibold text-base mt-2">
              <span>Total</span>
              <span>
                ₹{getTotalCartAmount() * 70 + deliveryFee}
              </span>
            </div>

            <Link
              to="/order"
              className="block mt-6 text-center py-3 rounded-lg bg-(--tomato) text-white font-semibold shadow-md"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;