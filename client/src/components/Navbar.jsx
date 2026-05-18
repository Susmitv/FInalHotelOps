import React from "react";

const Navbar = () => {
  return (
    <div className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">HotelOps</h1>

      <div className="flex gap-4">
        <button>Tasks</button>
        <button>Employees</button>
        <button>Profile</button>
      </div>
    </div>
  );
};

export default Navbar;