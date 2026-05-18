import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ManagerDashboard from "./pages/ManagerDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import EmployeeProfile from "./pages/EmployeeProfile";
import ManagerReports from "./pages/ManagerReports";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/manager"
          element={<ManagerDashboard />}
        />

        <Route
          path="/employee"
          element={<EmployeeDashboard />}
        />

        <Route
          path="/profile"
          element={<EmployeeProfile />}
        />

        <Route
          path="/reports"
          element={<ManagerReports />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
