import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from "express";

import userRouter from "../app/routes/v1/user.route";
import { requestLoggerMiddleware } from "./middlewares/logger.middleware";
import jobCategoryRouter from "./routes/v1/job-category.router";
import jobRouter from "./routes/v1/job.router";
import Exception from "./utils/exception";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(requestLoggerMiddleware);

app.use("/api/v1/job-category/", jobCategoryRouter);
app.use("/api/v1/jobs/", jobRouter);
app.use("/api/v1/user/", userRouter);
app.get("/api", (req, res) => {
  res.send({ message: "Welcome to API ✌️!" });
});

app.use(Exception.exceptionHandeler);

export default app;
