import React, { useContext } from "react";
import { OwnerAuthContext } from "../context/OwnerAuthContext";
import { OrdersContext } from "../context/OrdersContext";
import OrderCard from "../components/OrderCard";
import StatsCard from "../components/StatsCard";
import { Navigate } from "react-router-dom";

const OwnerDashboard = () => {
  const { owner, logoutOwner } = useContext(OwnerAuthContext);
  const { orders, updateOrderStatus } = useContext(OrdersContext);

  if (!owner) return <Navigate to="/owner/login" replace />;

  const myOrders = orders.filter(
    (o) => o.canteen === owner.canteen
  );

  const totalRevenue = myOrders.reduce(
    (sum, o) => sum + o.total,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* TOP BAR */}
      <header className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">
          {owner.canteen} — Owner Dashboard
        </h1>
        <button
          onClick={logoutOwner}
          className="text-sm text-gray-500 hover:underline"
        >
          Logout
        </button>
      </header>

      {/* CONTENT */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* STATS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-10">
          <StatsCard title="Orders Today" value={myOrders.length} />
          <StatsCard title="Revenue Today" value={`₹${totalRevenue}`} />
          <StatsCard title="Canteen" value={owner.canteen} />
        </div>

        {/* ORDERS */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">
            Incoming Orders
          </h2>

          {myOrders.length === 0 ? (
            <p className="text-gray-500">
              No orders yet 🍽️
            </p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {myOrders.map((order) => (
                <OrderCard
                  key={order.id}
                  order={order}
                  onStatusChange={updateOrderStatus}
                />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default OwnerDashboard;