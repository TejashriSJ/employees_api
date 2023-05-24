import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import axios from "axios";
import GraphPlot from "./GraphPlot";

function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const department = searchParams.get("department");

  const [deptDetails, setDeptDetails] = useState([]);

  const onChangeDepartment = (event) => {
    navigate(`?department=${event.target.value}`);
  };

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(
          `/api/employees/count-by-deptName?department=${department}`
        );
        setDeptDetails(result.data);
        console.log(result.data, "data");
      } catch (err) {
        console.error(err);
      }
    })();
  }, [department]);

  return (
    <>
      <button
        className="btn btn-warning m-2"
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
      <h4 className="m-4">
        Total number of employees for the given Department
      </h4>
      <select onChange={onChangeDepartment} className="form-control w-50 m-5">
        <option value="">SELECT DEPARTMENT</option>
        <option value="Customer Service">Customer Service</option>
        <option value="Development">Development</option>
        <option value="Finance">Finance</option>
        <option value="Human Resources">Human Resources</option>
        <option value="Marketing">Marketing</option>
        <option value="Production">Production</option>
        <option value="Quality Management">Quality Management</option>
        <option value="Research">Research</option>
        <option value="Sales">Sales</option>
      </select>
      <div className="graph-plot">
        {deptDetails.length === 0 ? (
          <p>Select The department to display graph</p>
        ) : (
          <GraphPlot deptDetails={deptDetails} />
        )}
      </div>
    </>
  );
}

export default HomePage;
