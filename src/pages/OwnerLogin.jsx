import React, { useState, useContext } from "react";
import { OwnerAuthContext } from "../context/OwnerAuthContext";
import { useNavigate } from "react-router-dom";

const OwnerLogin = () => {
  const [canteen, setCanteen] = useState("Snackers");
  const [password, setPassword] = useState("");
  const { loginOwner } = useContext(OwnerAuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // dummy auth (replace with backend later)
    if (password !== "admin") {
      alert("Invalid password");
      return;
    }

    loginOwner(canteen);
    navigate("/owner/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Canteen Owner Login
        </h2>

        <label className="block mb-2 font-medium">Canteen</label>
        <select
          value={canteen}
          onChange={(e) => setCanteen(e.target.value)}
          className="w-full mb-4 p-2 border rounded-lg"
        >
          <option>Snackers</option>
          <option>Campus Cafe</option>
          <option>Night Canteen</option>
          <option>Yadav</option>
        </select>

        <label className="block mb-2 font-medium">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-2 border rounded-lg"
        />

        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-(--tomato) text-white font-semibold"
        >
          Login
        </button>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="text-sm text-gray-500 mb-4 hover:underline"
        >
          ← Back
        </button>
      </form>
    </div>
  );
};

export default OwnerLogin;