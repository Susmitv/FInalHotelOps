import React from "react";

const Register = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Register
        </h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full border p-2 mb-4"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4"
        />

        <select className="w-full border p-2 mb-4">
          <option>Manager</option>
          <option>Employee</option>
        </select>

        <button className="w-full bg-green-600 text-white p-2 rounded">
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
