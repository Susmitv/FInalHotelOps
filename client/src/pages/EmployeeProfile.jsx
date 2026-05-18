import React from "react";

import Navbar from "../components/Navbar";

import TaskStatsCard from "../components/TaskStatsCard";

import ProductivityChart from "../components/ProductivityChart";

const EmployeeProfile = () => {

  return (
    <div>

      <Navbar />

      <div className="p-6">

        <h1 className="text-3xl font-bold mb-6">
          Employee Profile
        </h1>

        <div className="grid grid-cols-3 gap-4 mb-8">

          <TaskStatsCard
            title="Tasks Completed"
            value="45"
          />

          <TaskStatsCard
            title="Hours Worked"
            value="120"
          />

          <TaskStatsCard
            title="Pending Tasks"
            value="3"
          />

        </div>

        <ProductivityChart />

      </div>

    </div>
  );
};

export default EmployeeProfile;
