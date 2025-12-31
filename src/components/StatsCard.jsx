import React from "react";

const StatsCard = ({ title, value }) => (
  <div className="bg-white p-4 rounded-xl shadow border">
    <p className="text-sm text-gray-500">{title}</p>
    <p className="text-2xl font-semibold mt-1">{value}</p>
  </div>
);

export default StatsCard;