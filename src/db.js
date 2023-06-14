import dotenv from "dotenv";
import { Sequelize } from "sequelize";
import { PackageModel } from "./models/Package";
import { PermissionModel } from "./models/Permissions";
import { UserModel } from "./models/User";
dotenv.config();

const sequelize = new Sequelize(
  `postgres://postgres:2018River@localhost/authtest`,
  {
    logging: false,
    native: false,
  }
);

PermissionModel(sequelize);
UserModel(sequelize);
PackageModel(sequelize);

const { Package, User, Permission } = sequelize.models;

User.hasMany(Package);
Package.belongsTo(User);

User.belongsToMany(Permission, { through: "UserPermission" });
Permission.belongsToMany(User, { through: "UserPermission" });

export const models = { ...sequelize.models };
export const conn = sequelize;
