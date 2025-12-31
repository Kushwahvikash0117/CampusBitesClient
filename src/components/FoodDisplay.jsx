import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ category, canteen, search = "" }) => {
  const { food_list } = useContext(StoreContext);

  const canteenMenus = {
    Snackers: [0, 3, 7, 10, 13, 16, 19, 22],
    "Campus Cafe": [1, 4, 9, 12, 15, 18, 21, 24],
    "Night Canteen": [2, 5, 11, 15, 17, 20, 23, 26],
    Yadav: [6, 8, 12, 14, 19, 22, 25, 27],
  };

  const menu =
    canteenMenus[canteen]?.map((i) => food_list[i]).filter(Boolean) || [];

  const safeSearch =
    typeof search === "string" ? search.trim().toLowerCase() : "";

  const displayedFood = menu.filter((item) => {
    if (!item || !item.name) return false;

    const matchesSearch =
      safeSearch === "" || item.name.toLowerCase().includes(safeSearch);

    const matchesCategory =
      safeSearch !== "" || category === "All" || item.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="section mt-10 mb-20">
      <h2 className="text-3xl font-semibold mb-8">Top dishes near you</h2>

      {displayedFood.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          No matching food items 🍽️
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {displayedFood.map((item) => (
            <FoodItem
              key={item._id}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodDisplay;