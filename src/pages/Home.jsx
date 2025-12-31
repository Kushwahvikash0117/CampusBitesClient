import React, { useState, useContext } from "react";
import Header from "../components/Header";
import ExploreMenu from "../components/ExploreMenu";
import FoodDisplay from "../components/FoodDisplay";
import AppDownload from "../components/AppDownload";
import { OrderMessageContext } from "../context/OrderMessageContext";

const Home = ({search}) => {
  const [category, setCategory] = useState("All");
  const [canteen, setCanteen] = useState("Snackers");
  const { orderMessage } = useContext(OrderMessageContext);

  return (
    <div className="w-full min-h-screen flex flex-col">
      {orderMessage && (
        <div
          className="fixed top-24 left-1/2 -translate-x-1/2 z-100
                  bg-green-500 text-white px-6 py-3 rounded-full
                  shadow-xl animate-bounce"
        >
          {orderMessage}
        </div>
      )}

      {/* HERO */}
      <Header />

      {/* CANTEENS + CATEGORIES */}
      <section className="max-w-6xl mx-auto w-full px-4 mt-12">
        <ExploreMenu
          category={category}
          setCategory={setCategory}
          canteen={canteen}
          setCanteen={setCanteen}
        />
      </section>

      {/* FOOD GRID */}
      <section className="max-w-6xl mx-auto w-full px-4 mt-10">
        <FoodDisplay category={category} canteen={canteen} search={search} />
      </section>

      {/* DOWNLOAD APP */}
      <section className="max-w-6xl mx-auto w-full px-4 mt-20 mb-16">
        <AppDownload />
      </section>
    </div>
  );
};

export default Home;