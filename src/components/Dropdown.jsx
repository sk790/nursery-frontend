import React from "react";

function Dropdown() {
  return (
    <div className="max-w-[1280px] mx-auto p-4">
      <div className="flex border-b">
        <ul className="flex gap-5 p-2">
          <li className="hover:underline group">
            <span className="cursor-pointer relative hover:underline">
              Home
            </span>
            <div className="hidden group-hover:flex flex-col absolute shadow-md rounded-lg transition-all duration-1000 pt-4">
              <ul className="w-[500px]">
                <li className="hover:bg-gray-100 px-2 py-1 group">
                  <span className="cursor-pointer relative hover:underline">Phone</span>
                  <div className="hidden group-hover:flex flex-col absolute shadow-md rounded-lg transition-all duration-1000 pt-4">
                    <ul>
                      <li className="hover:bg-gray-100 px-2 py-1">Phone</li>
                      <li className="hover:bg-gray-100 px-2 py-1">Phone</li>
                      <li className="hover:bg-gray-100 px-2 py-1">Phone</li>
                      <li className="hover:bg-gray-100 px-2 py-1">Phone</li>
                      <li className="hover:bg-gray-100 px-2 py-1">Phone</li>
                      <li className="hover:bg-gray-100 px-2 py-1">Phone</li>
                      <li className="hover:bg-gray-100 px-2 py-1">Phone</li>
                      <li className="hover:bg-gray-100 px-2 py-1">Phone</li>
                    </ul>
                  </div>
                </li>
                <li className="hover:bg-gray-100 px-2 py-1">Phone</li>
                <li className="hover:bg-gray-100 px-2 py-1">Email</li>
                <li className="hover:bg-gray-100 px-2 py-1">Email</li>
                <li className="hover:bg-gray-100 px-2 py-1">Email</li>
                <li className="hover:bg-gray-100 px-2 py-1">Email</li>
                <li className="hover:bg-gray-100 px-2 py-1">Email</li>
                <li className="hover:bg-gray-100 px-2 py-1">Email</li>
                <li className="hover:bg-gray-100 px-2 py-1">Email</li>
                <li className="hover:bg-gray-100 px-2 py-1">Email</li>
              </ul>
            </div>
          </li>
          <li className="group">
            {/* Parent Menu Item */}
            <span className="cursor-pointer relative hover:underline">
              Contact
            </span>
            {/* Dropdown Menu */}
            <div className="hidden group-hover:flex flex-col absolute shadow-md rounded-lg transition-all duration-1000 pt-4">
              <ul className="w-[500px]">
                <li className="hover:bg-gray-100 px-2 py-1">Address</li>
                <li className="hover:bg-gray-100 px-2 py-1">Phone</li>
                <li className="hover:bg-gray-100 px-2 py-1">Email</li>
                <li className="hover:bg-gray-100 px-2 py-1">Email</li>
                <li className="hover:bg-gray-100 px-2 py-1">Email</li>
                <li className="hover:bg-gray-100 px-2 py-1">Email</li>
                <li className="hover:bg-gray-100 px-2 py-1">Email</li>
                <li className="hover:bg-gray-100 px-2 py-1">Email</li>
                <li className="hover:bg-gray-100 px-2 py-1">Email</li>
                <li className="hover:bg-gray-100 px-2 py-1">Email</li>
              </ul>
            </div>
          </li>
          <li className="hover:underline">About</li>
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
