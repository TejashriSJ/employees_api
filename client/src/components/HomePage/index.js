import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <h3 className="mb-5">Home Page</h3>
      <div>
        <div>
          <p>Total number of employees for the given Department: </p>
          <button
            className="btn btn-primary m-2"
            onClick={() => {
              navigate("/api/employees/count-by-deptName");
            }}
          >
            View Graph
          </button>
        </div>
        <div>
          <p>
            The number of employees of a given gender for a given department:{" "}
          </p>
          <button
            className="btn btn-primary m-2"
            onClick={() => {
              navigate("/api/employees/count-by-gender-and-deptName");
            }}
          >
            View Graph
          </button>
        </div>
        <div>
          <p>Total salary for a given department: </p>
          <button
            className="btn btn-primary m-2"
            onClick={() => {
              navigate("/api/employees/total-salary-of-department");
            }}
          >
            View Graph
          </button>
        </div>
        <div>
          <p>
            Listing employee and current department they are working and their
            respective manager:{" "}
          </p>
          <button
            className="btn btn-primary m-2"
            onClick={() => {
              navigate("/api/employees/current-details");
            }}
          >
            View Graph
          </button>
        </div>
        <div>
          <p> The number of emplyees hired in the last N months: </p>
          <button
            className="btn btn-primary m-2"
            onClick={() => {
              navigate("/api/employees/hired-in-last-n-months");
            }}
          >
            View Graph
          </button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
