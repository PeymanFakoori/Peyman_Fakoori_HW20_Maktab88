"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var employeeSchema = new mongoose_1.Schema({
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
}, { timestamps: true });
var employeeModel = (0, mongoose_1.model)("employee", employeeSchema);
exports.default = employeeModel;
