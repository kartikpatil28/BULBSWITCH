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
        <div className="relative">
          <div
            className={`relative h-[3px] w-48 ${isOn ? "bg-blue-500" : "bg-blue-500"}`}
          >
            {!isOn && (
              <>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-500">
                  ✖️
                </div>
              </>
            )}
            {isOn && (
              <div className="absolute h-[3px] w-48 flex">
                <div className="animate-pulse bg-yellow-300 h-full w-[10%]"></div>
                <div className="bg-blue-500 h-full w-[90%]"></div>
              </div>
            )}
          </div>
        </div>
        <div
          className={`w-[150px] h-[150px] rounded-full ${
            isOn
              ? "bg-yellow-400 shadow-[0_0_40px_yellow] transition-all duration-300"
              : "bg-black"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Bulb;
