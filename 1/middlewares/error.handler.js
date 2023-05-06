"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.notFoundErrorHandler = void 0;
var dto_1 = require("../dto");
var notFoundErrorHandler = function (_req, _res, next) {
    next(new dto_1.AppError("Not Found", 404));
};
exports.notFoundErrorHandler = notFoundErrorHandler;
var errorHandler = function (err, _req, res, _next) {
    if (err instanceof dto_1.AppError) {
        res.status(err.code).send(err.message);
    }
    else {
        res.status(500).send("Internal server error");
    }
};
exports.errorHandler = errorHandler;
