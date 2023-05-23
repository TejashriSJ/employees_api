import { validationResult } from "express-validator";

import formatError from "../utils/formatError.js";

const validateDept = (req, res, next) => {
  if (validationResult(req).errors.length === 0) {
    next();
  } else {
    let errorMessage = formatError(400, "Invalid Query Parameters");
    errorMessage.messageObj.format =
      "?department=department-name-using-alphabets";

    next(errorMessage);
  }
};

export default validateDept;
