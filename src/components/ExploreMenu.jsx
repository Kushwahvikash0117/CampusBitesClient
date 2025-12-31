import React from "react";
import { menu_list } from "../assets/assets";

const ExploreMenu = ({ category, setCategory, canteen, setCanteen }) => {
  const canteenList = ["Snackers", "Campus Cafe", "Night Canteen", "Yadav"];

  return (
    <div id="explore-menu" className="space-y-6">
      {/* Title */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Explore Menu
        </h1>
        <p className="text-gray-500 mt-1 max-w-150">
          Choose meals from a curated list of Campus dishes.
        </p>
      </div>

      {/* --- CANTEEN FILTERS --- */}
      <div className="flex flex-wrap gap-3 mt-6">
        {canteenList.map((c) => (
          <button
            key={c}
            onClick={() => setCanteen(c)}
            className={`
        px-5 py-2 rounded-full text-sm font-medium transition-all
        ${
          canteen === c
            ? "bg-(--tomato) text-white shadow-md scale-105"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }
      `}
          >
            {c}
          </button>
        ))}
      </div>

      {/* --- CATEGORY STRIP --- */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide py-4">
        {menu_list.map((item, i) => (
          <div
            key={i}
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
            className="flex flex-col items-center cursor-pointer shrink-0"
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className={`
          w-20 h-20 rounded-full object-cover border-4 transition
          ${
            category === item.menu_name
              ? "border-(--tomato)"
              : "border-transparent"
          }
        `}
            />
            <p
              className={`mt-3 text-sm md:text-base
          ${
            category === item.menu_name
              ? "text-(--tomato) font-semibold"
              : "text-gray-600"
          }
        `}
            >
              {item.menu_name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;