import { createContext, useState } from "react";

export const OwnerAuthContext = createContext();

export const OwnerAuthProvider = ({ children }) => {
  const [owner, setOwner] = useState(null);
  // owner = { canteen: "Snackers" }

  const loginOwner = (canteen) => {
    setOwner({ canteen });
  };

  const logoutOwner = () => {
    setOwner(null);
  };

  return (
    <OwnerAuthContext.Provider
      value={{ owner, loginOwner, logoutOwner }}
    >
      {children}
    </OwnerAuthContext.Provider>
  );
};