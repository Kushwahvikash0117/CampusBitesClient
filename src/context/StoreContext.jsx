import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext();

// CANTEEN → FOOD INDEX MAP (single source of truth)
const canteenMenus = {
  Snackers: [0, 3, 7, 10, 13, 16, 19, 22],
  "Campus Cafe": [1, 4, 9, 12, 15, 18, 21, 24],
  "Night Canteen": [2, 5, 11, 15, 17, 20, 23, 26],
  Yadav: [6, 8, 12, 14, 19, 22, 25, 27],
};

// BUILD FOOD ID → CANTEEN MAP
const foodIdToCanteen = {};
Object.entries(canteenMenus).forEach(([canteen, indexes]) => {
  indexes.forEach((i) => {
    if (food_list[i]) {
      foodIdToCanteen[food_list[i]._id] = canteen;
    }
  });
});

export const StoreProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (id) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      if (!updated[id]) return prev;
      updated[id] -= 1;
      if (updated[id] <= 0) delete updated[id];
      return updated;
    });
  };

  // ✅ PRICE-BASED TOTAL (NOT QUANTITY)
  const getTotalCartAmount = () => {
    let total = 0;
    for (const id in cartItems) {
      const item = food_list.find((f) => f._id === id);
      if (item) {
        total += item.price * cartItems[id];
      }
    }
    return total;
  };

  const clearCart = () => setCartItems({});

  return (
    <StoreContext.Provider
      value={{
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        foodIdToCanteen, // 👈 expose mapping
        clearCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};