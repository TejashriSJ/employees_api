import { query } from "express-validator";

const deptAndGenderSchema = [
  query("department").isAlpha("en-IN", { ignore: " " }),
  query("gender").isIn(["M", "F"]),
];

export default deptAndGenderSchema;
