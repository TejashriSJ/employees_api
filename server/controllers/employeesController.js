import formatError from "../utils/formatError.js";
import executeQuery from "../utils/executeQuery.js";

// total no of employees in a given department
export const employeesOfDept = async (req, res, next) => {
  try {
    const deptName = req.query.department;
    const employees_of_dept = `CALL employees_for_deptName(?)`;
    const result = await executeQuery(employees_of_dept, deptName);

    if (result[0].length === 0) {
      next(formatError(400, "department not found"));
    } else {
      res.json(result[0]);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

//total number of employees of given gender and department
export const employeesOfGenderAndDept = async (req, res, next) => {
  try {
    const gender = req.query.gender;
    const deptName = req.query.department;

    let parameters = [deptName, gender];
    let employeesOfGivenGenderAndDept = `CALL employees_for_gender_deptName(?,?)`;

    const result = await executeQuery(
      employeesOfGivenGenderAndDept,
      parameters
    );
    if (result[0].length === 0) {
      next(formatError(400, "department not found"));
    } else {
      res.json(result[0]);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

//total salary for a given department
export const totalSalaryOfdept = async (req, res, next) => {
  try {
    const department = req.query.department;
    let getTotalSalary = `CALL total_salary(?)`;

    const result = await executeQuery(getTotalSalary, department);

    if (result[0].length === 0) {
      next(formatError(400, "department not found"));
    } else {
      res.json(result[0]);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

//Listing employee and current department they are working and their respective manager
export const currentEmployeeDetails = async (req, res, next) => {
  try {
    let currEmployeesDetails = `CALL list_employee_dept_manager`;
    const result = await executeQuery(currEmployeesDetails);

    if (result[0].length === 0) {
      res.json({ Message: "No employees" });
    } else {
      res.json(result[0]);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

//number of emplyees hired in the last N months
export const employeesHiredInNmonths = async (req, res, next) => {
  try {
    const months = req.query.months;
    const employeesHired = `CALL employees_hired(?)`;

    const result = await executeQuery(employeesHired, months);

    res.json(result[0]);
  } catch (err) {
    console.error(err);
    next(err);
  }
};
