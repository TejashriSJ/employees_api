import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import axios from "axios";
import GraphPlot from "./GraphPlot";

function HiredInLastNmonths() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const [hiredData, setHiredData] = useState([]);
  const [monthInput, setMonthInput] = useState(0);
  const months = searchParams.get("months");

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(
          `/api/employees/hired-in-last-n-months?months=${months}`
        );
        setHiredData(result.data);
        console.log(result.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [months]);

  const formOnSubmit = (event) => {
    event.preventDefault();
    navigate(`?months=${monthInput}`);
  };

  const onChangeInput = (event) => {
    setMonthInput(event.target.value);
  };

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
      <h4 className="m-4">The number of emplyees hired in the last N months</h4>
      <form onSubmit={formOnSubmit}>
        <input
          type="number"
          className="form-control w-50 m-3"
          placeholder="Enter the no of months"
          required
          min={0}
          max={500}
          onChange={onChangeInput}
        />
        <button type="submit" className="btn btn-success m-3">
          SUBMIT
        </button>
      </form>
      <GraphPlot hiredData={hiredData} months={months} />
    </>
  );
}
export default HiredInLastNmonths;
