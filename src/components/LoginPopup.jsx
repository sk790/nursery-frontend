import React, { useState } from "react";

const LoginPopup = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose(false);
  };

  return isVisible ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-green-600 text-white rounded-lg p-6 relative">
        {/* Header */}
        <div className="flex">
          <div className="flex flex-col">
            <div className="text-center mt-10">
              <h1 className="text-3xl font-bold">Kwik⚡Pass</h1>
              <p className="text-lg mt-2 mb-10">
                Largest online nursery in India
              </p>
            </div>

            {/* Features */}
            <div className="flex justify-between mt-6 text-center text-sm mr-2">
              <div className="bg-green-700 p-3 rounded-lg mx-1 w-44 h-52 flex justify-center items-center flex-col">
                <div>🌟</div>
                <span className="mt-2 text-2xl">
                  2000+ High Quality Products
                </span>
              </div>
              <div className="bg-green-700 p-3 rounded-lg mx-1 w-44 h-52 flex justify-center items-center flex-col">
                <div>🌟</div>
                <span className="mt-2 text-2xl">
                  Local Delivery in 2-4 Days
                </span>
              </div>
              <div className="bg-green-700 p-3 rounded-lg mx-1 w-44 h-52 flex justify-center items-center flex-col">
                <div>🌟</div>
                <span className="mt-2 text-2xl">Lowest Price Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="mt-6 bg-white text-black rounded-lg p-6 w-96">
            <h2 className="text-lg font-semibold text-center text-black">
              Login
            </h2>
            <label className="block text-sm mt-4 text-gray-500">Enter Mobile Number</label>
            <input
              type="text"
              placeholder="Enter Mobile Number"
              className="w-full mt-2 p-2 rounded-lg text-black border border-gray-300 outline-none"
            />
            <p className="text-center mt-4 text-sm font-medium text-black">OR</p>
            <button className="w-full bg-white text-green-600 py-2 rounded-lg mt-4 border border-green-500">
              📱 WhatsApp Login
            </button>
            <p className="text-xs mt-4 text-center text-gray-500 font-bold">
              By logging in, you're agreeing to our{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                Terms of Service
              </a>
              .
            </p>
            <a
              href="#"
              className="block text-xs text-center text-white underline mt-2"
            >
              Trouble logging in?
            </a>
          </div>
        </div>

        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white text-lg"
          onClick={handleClose}
        >
          ✖
        </button>
      </div>
    </div>
  ) : null;
};

export default LoginPopup;
