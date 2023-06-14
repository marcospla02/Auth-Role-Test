"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _package = _interopRequireDefault(require("./Package/package.routes"));
var _permission = _interopRequireDefault(require("./Permission/permission.routes"));
var _user = _interopRequireDefault(require("./User/user.routes"));
var _auth = _interopRequireDefault(require("./Auth/auth.routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = (0, _express.Router)();
// middleware (redirijo las rutas)
router.use("/package", _package["default"]);
router.use("/user", _user["default"]);
router.use("/permission", _permission["default"]);
router.use("/auth", _auth["default"]);
var _default = router;
exports["default"] = _default;