import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPopup = ({ setShowLogin, setIsLoggedIn }) => {
  const [role, setRole] = useState(null); // "student" | "owner"
  const [mode, setMode] = useState("login");
  const navigate = useNavigate();

  const handleOwnerRedirect = () => {
    setShowLogin(false);
    navigate("/owner/login");
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={() => setShowLogin(false)}
      />

      {/* Popup */}
      <div className="fixed inset-0 flex items-center justify-center px-4 z-50">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 relative animate-fadeIn">
          {/* Close */}
          <button
            onClick={() => setShowLogin(false)}
            className="absolute right-4 top-4 text-xl font-bold"
          >
            ×
          </button>

          {/* ROLE SELECT */}
          {!role && (
            <>
              <h2 className="text-2xl font-semibold text-center mb-6">
                Continue as
              </h2>

              <div className="grid grid-cols-2 gap-6">
                <button
                  onClick={() => setRole("student")}
                  className="p-6 rounded-xl bg-gray-100 hover:bg-gray-200 font-semibold"
                >
                  Student
                </button>

                <button
                  onClick={handleOwnerRedirect}
                  className="p-6 rounded-xl bg-gray-100 hover:bg-gray-200 font-semibold"
                >
                  Owner
                </button>
              </div>
            </>
          )}

          {/* STUDENT LOGIN / SIGNUP */}
          {role === "student" && (
            <>
              <h2 className="text-2xl font-semibold text-center mb-6">
                {mode === "login" ? "Login" : "Sign Up"}
              </h2>

              <div className="space-y-4">
                {mode === "signup" && (
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border rounded-lg"
                  />
                )}

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border rounded-lg"
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 border rounded-lg"
                />

                <button
                  onClick={() => {
                    setIsLoggedIn(true); 
                    setShowLogin(false); 
                    navigate("/app"); 
                  }}
                  className="w-full bg-(--tomato) text-white py-3 rounded-lg font-semibold"
                >
                  {mode === "login" ? "Login" : "Create Account"}
                </button>
              </div>

              <p className="mt-4 text-center text-sm">
                {mode === "login" ? "New here?" : "Already a user?"}{" "}
                <span
                  onClick={() => setMode(mode === "login" ? "signup" : "login")}
                  className="text-(--tomato) font-semibold cursor-pointer"
                >
                  {mode === "login" ? "Sign up" : "Login"}
                </span>
              </p>

              <p
                onClick={() => setRole(null)}
                className="mt-4 text-center text-sm cursor-pointer text-gray-500"
              >
                ← Back
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginPopup;