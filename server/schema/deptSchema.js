import { query } from "express-validator";

const deptSchema = [query("department").isAlpha("en-IN", { ignore: " " })];

export default deptSchema;
