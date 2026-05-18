import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    day: "Mon",
    tasks: 5,
  },
  {
    day: "Tue",
    tasks: 8,
  },
  {
    day: "Wed",
    tasks: 4,
  },
  {
    day: "Thu",
    tasks: 6,
  },
  {
    day: "Fri",
    tasks: 9,
  },
];

const ProductivityChart = () => {
  return (
    <div className="bg-white shadow-md rounded p-6">

      <h2 className="text-xl font-bold mb-4">
        Weekly Productivity
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="tasks" />

        </BarChart>
      </ResponsiveContainer>

    </div>
  );
};

export default ProductivityChart;
