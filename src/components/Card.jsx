// src/components/Card.jsx
import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';

const Card = ({ foodName, item, ImgSrc }) => {
  const { addToCart } = useContext(StoreContext);

  const handleAddToCart = () => {
    addToCart(item._id);
  };

  return (
    <div className="flex flex-col bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full border border-gray-100">
      
      {/* Image Section - Fixed Height, Object Cover */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
        <img 
          src={ImgSrc} 
          alt={foodName} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Body Section - Flex Column to push button to bottom */}
      <div className="p-4 flex flex-col flex-grow gap-3">
        <div className="flex justify-between items-start">
            <h5 className="text-lg md:text-xl font-bold text-gray-800 line-clamp-1">{foodName}</h5>
            <span className="text-tomato font-bold text-lg">₹{item.price * 70}</span>
        </div>
        
        <p className="text-gray-500 text-sm line-clamp-2 flex-grow">
            {item.description || "Delicious food providing essential nutrients for your health."}
        </p>

        {/* Button Section */}
        <button 
          onClick={handleAddToCart}
          className="w-full mt-auto py-2.5 bg-tomato text-white font-semibold rounded-lg hover:bg-red-600 active:scale-95 transition-all duration-200 shadow-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;