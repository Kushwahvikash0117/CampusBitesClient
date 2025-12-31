import React from 'react';
import { assets } from '../assets/assets';

const AppDownload = () => {
  return (
    <div className="text-center my-20 px-4">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
        For a better experience, try the CampusBites App
      </h2>

      <div className="flex justify-center gap-6 mt-10">
        <img src={assets.play_store} className="w-36 md:w-48 hover:scale-105 transition" />
        <img src={assets.app_store} className="w-36 md:w-48 hover:scale-105 transition" />
      </div>
    </div>
  );
};

export default AppDownload;