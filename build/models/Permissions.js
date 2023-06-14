"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PermissionModel = void 0;
var _sequelize = require("sequelize");
var PermissionModel = function PermissionModel(sequelize) {
  sequelize.define("Permission", {
    id: {
      type: _sequelize.DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: {
      type: _sequelize.DataTypes.STRING,
      allowNull: true
    }
  });
};
exports.PermissionModel = PermissionModel;