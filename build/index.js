"use strict";

var _app = _interopRequireDefault(require("./src/app"));
var _db = require("./src/db");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_db.conn.sync().then(function () {
  _app["default"].listen(3001, function () {
    console.log("%s listening at 3001");
  });
});