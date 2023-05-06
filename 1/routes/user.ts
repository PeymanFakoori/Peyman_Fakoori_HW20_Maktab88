import express, { Router } from "express";
import { requestHandler } from "../middlewares/request.handler";

import {
  newEmployee,
  getAllEmployee,
  getById,
  updateEmployee,
  remove,
} from "../controller/employee";

const employeeRout: Router = express.Router();

employeeRout.post("/creat", requestHandler(newEmployee));
employeeRout.get("/getAll", requestHandler(getAllEmployee));
employeeRout.get("/:nationalCode", requestHandler(getById));
employeeRout.put("/:nationalCode", requestHandler(updateEmployee));
employeeRout.delete("/:nationalCode", requestHandler(remove));

export default employeeRout;
