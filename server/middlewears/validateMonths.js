import { validationResult } from "express-validator";

import formatError from "../utils/formatError.js";

const validateMonths = (req, res, next) => {
  if (validationResult(req).errors.length === 0) {
    next();
  } else {
    let errorMessage = formatError(400, "Invalid Query Parameters");
    errorMessage.messageObj.format = "?months=months-in-integer";

    next(errorMessage);
  }
};

export default validateMonths;
