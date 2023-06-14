import { DataTypes } from "sequelize";

export const PackageModel = (sequelize) => {
  sequelize.define("Package", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    product_price: {
      type: DataTypes.FLOAT,
    },
    shipping_price: {
      type: DataTypes.FLOAT,
    },
    content: {
      type: DataTypes.STRING,
    },
    sku: {
      type: DataTypes.STRING,
    },
    delivery_date: {
      type: DataTypes.DATE,
    },
    phone: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address_origin: {
      type: DataTypes.STRING,
    },
    address_destination: {
      type: DataTypes.STRING,
    },
    dimensions: {
      type: DataTypes.JSONB,
    },
    eemail: {
      type: DataTypes.STRING,
    },
  });
};
