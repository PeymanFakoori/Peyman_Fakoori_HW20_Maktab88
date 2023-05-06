import express, { Express } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import mongoose from "mongoose";

import router from "./routes/index";
import {
  errorHandler,
  notFoundErrorHandler,
} from "./middlewares/error.handler";

mongoose.connect("mongodb://127.0.0.1:27017/HW20").then(() => {
  console.log("DB is connected...");
});

const app: Express = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

app.use("/", router);
app.use(notFoundErrorHandler);
app.use(errorHandler);

export default app;
