import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";
import GraphPlot from "./GraphPlot";

function CurrentDetails() {
  const navigate = useNavigate();
  const [currDetails, setCurrDetails] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get("/api/employees/current-details");
        setCurrDetails(result.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  console.log(currDetails, "current details");

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
      <h4>
        Listing employee and current department they are working and their
        respective managers
      </h4>

      <div className="graph-plot">
        {currDetails.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <GraphPlot currDetails={currDetails} />
        )}
      </div>
    </>
  );
}

export default CurrentDetails;
