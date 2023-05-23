import { query } from "express-validator";

const monthSchema = [query("months").isInt()];

export default monthSchema;
