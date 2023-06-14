"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.PackageModel = void 0;
var _sequelize = require("sequelize");
var PackageModel = function PackageModel(sequelize) {
  sequelize.define("Package", {
    id: {
      type: _sequelize.DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    product_price: {
      type: _sequelize.DataTypes.FLOAT,
    },
    shipping_price: {
      type: _sequelize.DataTypes.FLOAT,
    },
    content: {
      type: _sequelize.DataTypes.STRING,
    },
    sku: {
      type: _sequelize.DataTypes.STRING,
    },
    delivery_date: {
      type: _sequelize.DataTypes.DATE,
    },
    phone: {
      type: _sequelize.DataTypes.FLOAT,
      allowNull: false,
    },
    name: {
      type: _sequelize.DataTypes.STRING,
      allowNull: false,
    },
    address_origin: {
      type: _sequelize.DataTypes.STRING,
    },
    address_destination: {
      type: _sequelize.DataTypes.STRING,
    },
    dimensions: {
      type: _sequelize.DataTypes.JSONB,
    },
    eemail: {
      type: _sequelize.DataTypes.STRING,
    },
  });
};
exports.PackageModel = PackageModel;
