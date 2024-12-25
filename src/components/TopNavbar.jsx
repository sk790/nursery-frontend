import React from "react";

function TopNavbar() {
  return (
    <div className="hidden md:block max-w-full items-center border-b border-gray-500">
      <div className="flex justify-between items-center p-3">
        <div className="flex gap-5 items-center text-gray-500 cursor-pointer">
          <p className="font-bold bg-red-500 px-2 py-1 rounded text-white">Rewards</p>
          <p>Help</p>
          <p>Track order</p>
          <p>Orders</p>
          <p>Offers</p>
          <p>Corporate</p>
        </div>
        <div className="flex gap-3">
          <p>icons</p>
          <p>icons</p>
          <p>icons</p>
          <p>icons</p>
          <p>icons</p>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
