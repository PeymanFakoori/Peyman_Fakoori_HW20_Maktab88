import { Schema, model } from "mongoose";

interface employee {
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: Date;
  nationalCode: number;
  company: string;
  role: string;
}

const employeeSchema = new Schema<employee>(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
      minlength: 3,
      maxlength: 30,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
      minlength: 3,
      maxlength: 30,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      default: "not-set",
      trim: true,
    },
    dateOfBirth: {
      type: Date,
      trim: true,
      required: true,
    },
    nationalCode: {
      type: Number,
      required: true,
      unique: true,
      min: 1000000000,
      max: 9999999999,
    },
    company: {
      type: String,
      ref: "company",
      trim: true,
      required: true,
      minlength: 2,
      maxlength: 40,
    },
    role: {
      type: String,
      trim: true,
      enum: ["employee", "manager"],
      default: "empliyee",
    },
  },
  { timestamps: true }
);

const employeeModel = model<employee>("employee", employeeSchema);

export default employeeModel;
