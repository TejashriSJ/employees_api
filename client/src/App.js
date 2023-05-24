import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage";
import CountByDeptname from "./components/Employees/CountByDeptname";
import CurrentDetails from "./components/Employees/CurrentDetails";
import TotalSalaryOfDept from "./components/Employees/TotalSalaryOfDept";
import HiredInLastNmonths from "./components/Employees/HiredInLastNmonths";
import CountByGenderDept from "./components/Employees/CountByGenderDept";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/api/employees/count-by-deptName"
          element={<CountByDeptname />}
        />
        <Route
          path="api/employees/count-by-gender-and-deptName"
          element={<CountByGenderDept />}
        />
        <Route
          path="api/employees/current-details"
          element={<CurrentDetails />}
        />
        <Route
          path="api/employees/total-salary-of-department"
          element={<TotalSalaryOfDept />}
        />
        <Route
          path="api/employees/hired-in-last-n-months"
          element={<HiredInLastNmonths />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
