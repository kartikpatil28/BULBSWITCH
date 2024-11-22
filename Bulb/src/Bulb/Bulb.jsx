import React, { useState } from "react";

const Bulb = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleBulb = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center p-4">
      <h1 className="font-extrabold text-4xl mb-8 text-purple-700 text-center">
        BULB SWITCH
      </h1>
      <div className="flex flex-col md:flex-row items-center">
        <button
          className="p-3 text-sm font-bold text-white bg-blue-500 rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4 hover:bg-blue-600 transition duration-300"
          onClick={toggleBulb}
        >
          {isOn ? "OFF" : "ON"}
        </button>
        <div className="relative h-[3px] w-40 md:w-48 mb-4 md:mb-0">
          <div className={`relative h-full w-full ${isOn ? "bg-blue-500" : "bg-blue-500"}`}>
            {isOn && (
              <div className="absolute h-full w-full flex overflow-hidden">
                <div className="animate-current-flow bg-yellow-300 h-full w-[5%] rounded-full"></div>
                <div className="bg-blue-500 h-full w-[95%]"></div>
              </div>
            )}
          </div>
        </div>
        <div
          className={`w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full flex items-center justify-center text-2xl font-bold ${
            isOn
              ? "bg-yellow-400 shadow-[0_0_400px_yellow] transition-all duration-300"
              : "bg-black text-white"
          }`}
        >
          {isOn ? "OFF" : "ON"}
        </div>
      </div>
    </div>
  );
};

export default Bulb;
