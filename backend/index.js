import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./lib/db.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import { v2 as cloudinary } from "cloudinary";
import userRouter from "./routes/user.routes.js";

const app = express();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const port = process.env.PORT || 8000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

connectDB();

app.use("/api/v1/user", userRouter);

app.get("/health", (req, res) => {
  return res.json({
    status: true,
    message: "ok!",
  });
});

app.use(errorMiddleware);
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
