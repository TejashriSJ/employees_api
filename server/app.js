import express from "express";
import createError from "http-errors";
import dotenv from "dotenv";

import employees from "./routes/employees.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (req, res, next) => {
  res.send({
    Message: "Home Page",
    Available_routes: [
      "/api/employees/count-by-deptName?department=",
      "/api/employees/count-by-gender-and-deptName?department=&gender=",
      "/api/employees/total-salary-of-department?department=",
      "/api/employees/current-details",
      "/api/employees/hired-in-last-n-months?months=",
    ],
  });
});

app.use("/api/employees", employees);

// handle 404 errors
app.use((req, res, next) => {
  next(createError(404));
});

//custom error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json(err.messageObj || { status: "ERROR" });
});

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
