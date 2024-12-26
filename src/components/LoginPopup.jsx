import React, { useState } from "react";

const LoginPopup = ({onClose}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose(false);
  };

  return isVisible ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-green-600 text-white rounded-lg w-full max-w-md p-6 relative">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold">Kwik⚡Pass</h1>
          <p className="text-sm mt-2">Largest online nursery in India</p>
        </div>

        {/* Features */}
        <div className="flex justify-between mt-6 text-center text-sm">
          <div className="bg-green-700 p-3 rounded-lg flex-1 mx-1">
            🌟 2000+ High Quality Products
          </div>
          <div className="bg-green-700 p-3 rounded-lg flex-1 mx-1">
            🌟 Local Delivery in 2-4 Days
          </div>
          <div className="bg-green-700 p-3 rounded-lg flex-1 mx-1">
            🌟 Lowest Price Guaranteed
          </div>
        </div>

        {/* Form */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-center">Login / Signup</h2>
          <label className="block text-sm mt-4">Enter Mobile Number</label>
          <input
            type="text"
            placeholder="Enter Mobile Number"
            className="w-full mt-2 p-2 rounded-lg text-black"
          />
          <p className="text-center mt-4 text-sm font-medium">OR</p>
          <button className="w-full bg-white text-green-600 py-2 rounded-lg mt-4">
            📱 WhatsApp Login
          </button>
          <p className="text-xs mt-4 text-center">
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
