"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cookie_parser_1 = require("cookie-parser");
var morgan_1 = require("morgan");
var mongoose_1 = require("mongoose");
var index_1 = require("./routes/index");
var error_handler_1 = require("./middlewares/error.handler");
mongoose_1.default.connect("mongodb://127.0.0.1:27017/HW20").then(function () {
    console.log("DB is connected...");
});
var app = (0, express_1.default)();
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
// app.use(express.static(path.join(__dirname, "public")));
app.use("/", index_1.default);
app.use(error_handler_1.notFoundErrorHandler);
app.use(error_handler_1.errorHandler);
exports.default = app;
