import React from "react";

const TaskStatsCard = ({ title, value }) => {
  return (
    <div className="bg-white shadow-md rounded p-6">

      <h2 className="text-lg font-semibold text-gray-600">
        {title}
      </h2>

      <p className="text-3xl font-bold mt-4">
        {value}
      </p>

    </div>
  );
};

export default TaskStatsCard;
