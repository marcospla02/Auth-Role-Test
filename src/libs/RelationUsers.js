import { models } from "../db";

export const RealtionUsers = async () => {
  try {
    const { User, Permission } = models;

    let allUser = await User.findAll({
      attributes: ["id", "name", "lastname", "email", "phone"],
      include: {
        model: Permission,
        attributes: ["name"],
        through: {
          attributes: [], //es una comprobacion. Mediante los atributos
        },
      },
    });

    allUser = allUser.map((user) => {
      return {
        ...user.dataValues,
        Permissions: user.Permissions.map((per) => {
          return per.name;
        }),
      };
    });

    return allUser;
  } catch (error) {
    return error.message;
  }
};
