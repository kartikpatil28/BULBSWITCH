import React, { useState } from "react";

const Bulb = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleBulb = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center">
      <h1 className="font-extrabold text-4xl mb-8 text-purple-700">
        BULB SWITCH
      </h1>
      <div className="flex items-center">
        <button
          className="p-3 text-sm font-bold text-white bg-blue-500 rounded-lg shadow-lg mr-4 hover:bg-blue-600 transition duration-300"
          onClick={toggleBulb}
        >
          ON/OFF
        </button>
        <div
          
          className={`w-[150px] h-[150px] rounded-full ${isOn ? 'bg-yellow-400 shadow-[0_0_40px_yellow] transition-all duration-300' : 'bg-white'}`}
        ></div>
      </div>
    </div>
  );
};

export default Bulb;