import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import GraphPlot from "./GraphPlot";
function CountByGenderDept() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const department = searchParams.get("department");
  const gender = searchParams.get("gender");

  const [formData, setFormData] = useState({ department: "", gender: "" });
  const [deptDetails, setDeptDetails] = useState([]);

  const formOnSubmit = (event) => {
    event.preventDefault();
    navigate(`?department=${formData.department}&gender=${formData.gender}`);
  };

  const onChangeInput = (event) => {
    console.log(event.target.value);
    console.log(formData, "formData");
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(
          `/api/employees/count-by-gender-and-deptName?department=${department}&gender=${gender}`
        );
        console.log(result.data, "result");
        setDeptDetails(result.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [department, gender]);

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
        The number of employees of a given gender for a given department
      </h4>
      <form onSubmit={formOnSubmit}>
        <select
          name="department"
          onChange={onChangeInput}
          className="form-control m-3 w-50"
        >
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
        <select
          name="gender"
          onChange={onChangeInput}
          className="form-control m-3 w-50"
        >
          <option value="">SELECT GENDER</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>
        <button type="submit" className="btn btn-success  m-3">
          SUBMIT
        </button>
      </form>
      <div className="graph-plot">
        {deptDetails.length === 0 ? (
          <p>Select The department and gender to display graph</p>
        ) : (
          <GraphPlot deptDetails={deptDetails} />
        )}
      </div>
    </>
  );
}
export default CountByGenderDept;
