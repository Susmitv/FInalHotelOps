import React from "react";
import Navbar from "../components/Navbar";

const ManagerDashboard = () => {
  return (
    <div>
      <Navbar />

      <div className="p-6">
        <h1 className="text-3xl font-bold">
          Manager Dashboard
        </h1>

        <div className="grid grid-cols-3 gap-4 mt-6">

          <div className="bg-blue-200 p-6 rounded">
            Total Tasks
          </div>

          <div className="bg-green-200 p-6 rounded">
            Active Employees
          </div>

          <div className="bg-red-200 p-6 rounded">
            Idle Employees
          </div>

        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;