import { DataTypes } from "sequelize";

export const PermissionModel = (sequelize) => {
  sequelize.define("Permission", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};
