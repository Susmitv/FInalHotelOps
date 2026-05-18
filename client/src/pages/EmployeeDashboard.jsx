import React from "react";
import Navbar from "../components/Navbar";

const EmployeeDashboard = () => {
  return (
    <div>
      <Navbar />

      <div className="p-6">
        <h1 className="text-3xl font-bold">
          Employee Dashboard
        </h1>

        <div className="mt-6 bg-white shadow p-4 rounded">
          <h2 className="text-xl font-semibold">
            Assigned Tasks
          </h2>

          <p className="mt-4">
            No tasks assigned yet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;