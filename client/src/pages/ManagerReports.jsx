import React from "react";

import Navbar from "../components/Navbar";

const employees = [
  {
    name: "Rahul",
    completed: 40,
    hours: 120,
  },
  {
    name: "Amit",
    completed: 32,
    hours: 98,
  },
  {
    name: "Priya",
    completed: 50,
    hours: 140,
  },
];

const ManagerReports = () => {

  return (
    <div>

      <Navbar />

      <div className="p-6">

        <h1 className="text-3xl font-bold mb-6">
          Employee Reports
        </h1>

        <div className="bg-white shadow-md rounded p-4">

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="p-3 text-left">
                  Employee
                </th>

                <th className="p-3 text-left">
                  Tasks Completed
                </th>

                <th className="p-3 text-left">
                  Hours Worked
                </th>

              </tr>

            </thead>

            <tbody>

              {employees.map((employee, index) => (

                <tr
                  key={index}
                  className="border-b"
                >

                  <td className="p-3">
                    {employee.name}
                  </td>

                  <td className="p-3">
                    {employee.completed}
                  </td>

                  <td className="p-3">
                    {employee.hours}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default ManagerReports;
