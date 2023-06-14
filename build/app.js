"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _index = _interopRequireDefault(require("./routes/index.routes"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
require("./db");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var server = (0, _express["default"])();
server.use(_express["default"].json());
server.use((0, _morgan["default"])("dev"));
(0, _cors["default"])();

// Middleware para routas
server.use("/api", _index["default"]);

// Capatador de errores.
server.use(function (err, req, res, next) {
  var status = err.status || 500;
  var message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});
var _default = server;
exports["default"] = _default;