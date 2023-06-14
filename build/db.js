"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.models = exports.conn = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
var _sequelize = require("sequelize");
var _Package = require("./models/Package");
var _Permissions = require("./models/Permissions");
var _User = require("./models/User");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
_dotenv["default"].config();
var sequelize = new _sequelize.Sequelize("postgres://postgres:2018River@localhost/authtest", {
  logging: false,
  "native": false
});
(0, _Permissions.PermissionModel)(sequelize);
(0, _User.UserModel)(sequelize);
(0, _Package.PackageModel)(sequelize);
var _sequelize$models = sequelize.models,
  Package = _sequelize$models.Package,
  User = _sequelize$models.User,
  Permission = _sequelize$models.Permission;
User.hasMany(Package);
Package.belongsTo(User);
User.belongsToMany(Permission, {
  through: "UserPermission"
});
Permission.belongsToMany(User, {
  through: "UserPermission"
});
var models = _objectSpread({}, sequelize.models);
exports.models = models;
var conn = sequelize;
exports.conn = conn;