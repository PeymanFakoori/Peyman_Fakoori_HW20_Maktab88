import { Request, RequestHandler, Response, NextFunction } from "express";
import employeeModel from "../models/employee";

const newEmployee = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  try {
    const {
      firstName,
      lastName,
      gender,
      dateOfBirth,
      nationalCode,
      company,
      role,
    } = req.body;
    employeeModel.create({
      firstName,
      lastName,
      gender,
      dateOfBirth,
      nationalCode,
      company,
      role,
    });
    const users = await employeeModel.find();
    res.send("ok");
  } catch (error) {
    res.send(error);
  }
};

const getAllEmployee = async (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const getAll = await employeeModel.find();
  res.send(getAll);
};

const getById = async (req: Request, res: Response, _next: NextFunction) => {
  const foundUser = req.params.nationalCode;
  const getAll = await employeeModel.findOne({ foundUser });
  res.send(getAll);
};

const updateEmployee = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  try {
    const fields = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      gender: req.body.gender,
      dateOfBirth: req.body.dateOfBirth,
      nationalCode: req.body.nationalCode,
      company: req.body.company,
      role: req.body.role,
    };

    const updating = await employeeModel.findOneAndUpdate(
      { nationalCode: req.params.nationalCode },
      fields,
      {
        new: true,
      }
    );
    res.send(updating);
  } catch (error) {
    console.log(error);
  }
};

const remove = async (req: Request, res: Response, _next: NextFunction) => {
  try {
    const selected = await employeeModel.findOneAndDelete({
      nationalCode: req.params.nationalCode,
    });
    res.send("removed");
  } catch (error) {
    console.log(error);
  }
};

export { newEmployee, getAllEmployee, getById, updateEmployee, remove };
