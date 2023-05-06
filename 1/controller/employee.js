"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.updateEmployee = exports.getById = exports.getAllEmployee = exports.newEmployee = void 0;
var employee_1 = require("../models/employee");
var newEmployee = function (req, res, _next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, firstName, lastName, gender, dateOfBirth, nationalCode, company, role, users, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, firstName = _a.firstName, lastName = _a.lastName, gender = _a.gender, dateOfBirth = _a.dateOfBirth, nationalCode = _a.nationalCode, company = _a.company, role = _a.role;
                employee_1.default.create({
                    firstName: firstName,
                    lastName: lastName,
                    gender: gender,
                    dateOfBirth: dateOfBirth,
                    nationalCode: nationalCode,
                    company: company,
                    role: role,
                });
                return [4 /*yield*/, employee_1.default.find()];
            case 1:
                users = _b.sent();
                res.send("ok");
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                res.send(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.newEmployee = newEmployee;
var getAllEmployee = function (_req, res, _next) { return __awaiter(void 0, void 0, void 0, function () {
    var getAll;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, employee_1.default.find()];
            case 1:
                getAll = _a.sent();
                res.send(getAll);
                return [2 /*return*/];
        }
    });
}); };
exports.getAllEmployee = getAllEmployee;
var getById = function (req, res, _next) { return __awaiter(void 0, void 0, void 0, function () {
    var foundUser, getAll;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                foundUser = req.params.nationalCode;
                return [4 /*yield*/, employee_1.default.findOne({ foundUser: foundUser })];
            case 1:
                getAll = _a.sent();
                res.send(getAll);
                return [2 /*return*/];
        }
    });
}); };
exports.getById = getById;
var updateEmployee = function (req, res, _next) { return __awaiter(void 0, void 0, void 0, function () {
    var fields, updating, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                fields = {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    gender: req.body.gender,
                    dateOfBirth: req.body.dateOfBirth,
                    nationalCode: req.body.nationalCode,
                    company: req.body.company,
                    role: req.body.role,
                };
                return [4 /*yield*/, employee_1.default.findOneAndUpdate({ nationalCode: req.params.nationalCode }, fields, {
                        new: true,
                    })];
            case 1:
                updating = _a.sent();
                res.send(updating);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.log(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateEmployee = updateEmployee;
var remove = function (req, res, _next) { return __awaiter(void 0, void 0, void 0, function () {
    var selected, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, employee_1.default.findOneAndDelete({
                        nationalCode: req.params.nationalCode,
                    })];
            case 1:
                selected = _a.sent();
                res.send("removed");
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                console.log(error_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.remove = remove;
