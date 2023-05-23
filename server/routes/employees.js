import express, { query } from "express";

import deptSchema from "../schema/deptSchema.js";
import deptAndGenderSchema from "../schema/deptAndGenderSchema.js";
import monthSchema from "../schema/monthSchema.js";

import validateDept from "../middlewears/validateDept.js";
import validateDeptAndGender from "../middlewears/validateDeptAndGender.js";
import validateMonths from "../middlewears/validateMonths.js";

import {
  employeesOfDept,
  employeesOfGenderAndDept,
  totalSalaryOfdept,
  currentEmployeeDetails,
  employeesHiredInNmonths,
} from "../controllers/employeesController.js";

const router = express.Router();

// total no of employees in a given department
router.get("/count-by-deptName", deptSchema, validateDept, employeesOfDept);

//total number of employees of given gender and department
router.get(
  "/count-by-gender-and-deptName",
  deptAndGenderSchema,
  validateDeptAndGender,
  employeesOfGenderAndDept
);

//total salary for a given department
router.get(
  "/total-salary-of-department",
  deptSchema,
  validateDept,
  totalSalaryOfdept
);

//Listing employee and current department they are working and their respective manager
router.get("/current-details", currentEmployeeDetails);

//number of emplyees hired in the last N months
router.get(
  "/hired-in-last-n-months",
  monthSchema,
  validateMonths,
  employeesHiredInNmonths
);

export default router;
