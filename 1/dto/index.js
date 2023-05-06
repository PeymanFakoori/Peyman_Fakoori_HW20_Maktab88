"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
var AppError = /** @class */ (function () {
    function AppError(message, code) {
        this.message = message;
        this.code = code;
    }
    return AppError;
}());
exports.AppError = AppError;
