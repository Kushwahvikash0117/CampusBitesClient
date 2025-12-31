import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { OrderMessageContext } from "../context/OrderMessageContext";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { cartItems, food_list, getTotalCartAmount, foodIdToCanteen } =
    useContext(StoreContext);

  const { showMessage } = useContext(OrderMessageContext);
  const { clearCart } = useContext(StoreContext);

  const navigate = useNavigate();

  // Build canteen-wise totals (same logic as Cart)
  const canteenTotals = {};
  food_list.forEach((item) => {
    const qty = cartItems[item._id];
    if (qty) {
      const canteen = foodIdToCanteen[item._id] || "Unknown";
      if (!canteenTotals[canteen]) {
        canteenTotals[canteen] = 0;
      }
      canteenTotals[canteen] += item.price * qty;
    }
  });

  const hasItems = Object.keys(cartItems).length > 0;
  const deliveryFee = hasItems ? 40 : 0;
  const subtotal = getTotalCartAmount() * 70;
  const finalAmount = subtotal + deliveryFee;

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (!hasItems) {
      showMessage("🛒 Your cart is empty");
      return;
    }

    // Future: send order payload to backend here
    showMessage("🎉 Order placed successfully!");
    navigate("/");
    clearCart();
  };

  return (
    <div className="section mt-24 mb-20">
      <h2 className="text-3xl font-semibold mb-10">Place Your Order</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT — DELIVERY FORM */}
        <form onSubmit={handlePlaceOrder} className="space-y-4">
          <h3 className="text-xl font-semibold mb-4">Delivery Information</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input required placeholder="First Name" className="input" />
            <input required placeholder="Last Name" className="input" />
          </div>

          <input required placeholder="Email Address" className="input" />
          <input required placeholder="Phone Number" className="input" />
          <input required placeholder="Hostel / Address" className="input" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input required placeholder="City" className="input" />
            <input required placeholder="State" className="input" />
          </div>

          <input required placeholder="Pincode" className="input" />

          <button
            type="submit"
            className="w-full mt-6 py-3 rounded-lg bg-(--tomato) text-white font-semibold shadow-md hover:bg-red-600 transition"
          >
            Place Order
          </button>
        </form>

        {/* RIGHT — ORDER SUMMARY */}
        <div className="bg-gray-50 p-6 rounded-xl border h-fit">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

          {/* CANTEEN-WISE RECEIPT */}
          <div className="space-y-2 text-sm mb-4">
            {Object.entries(canteenTotals).length === 0 ? (
              <p className="text-gray-500">No items in cart</p>
            ) : (
              Object.entries(canteenTotals).map(([canteen, amount]) => (
                <div key={canteen} className="flex justify-between">
                  <span>{canteen}</span>
                  <span>₹{amount * 70}</span>
                </div>
              ))
            )}
          </div>

          <hr className="my-3" />

          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span>Delivery Fee</span>
            <span>₹{deliveryFee}</span>
          </div>

          <div className="flex justify-between font-semibold text-base mt-2">
            <span>Total Payable</span>
            <span>₹{finalAmount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;