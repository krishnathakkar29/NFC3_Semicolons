import jwt from "jsonwebtoken";
import { TryCatch } from "./error.middleware.js";
import { ErrorHandler } from "../lib/utility.js";

const isAuthenticated = TryCatch(async (req, res, next) => {
  const token = req.cookies["token"];

  if (!token)
    return next(new ErrorHandler("Please login to access this route", 401));

  const decodedData = jwt.verify(token, process.env.JWT_SECRET);

  req.user = decodedData._id;

  next();
});

export { isAuthenticated };
