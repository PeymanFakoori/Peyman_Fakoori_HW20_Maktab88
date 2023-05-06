"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_1 = require("./user");
var router = express_1.default.Router();
router.use("/users", user_1.default);
exports.default = router;
