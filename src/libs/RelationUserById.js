import { models } from "../db";

export const relationUserById = async (id) => {
  try {
    const { User, Permission } = models;

    // Tengo que buscar el ususario con el modelo Permission
    const userWhitOutPermission = await User.findOne({
      where: { id: id },
      include: {
        model: Permission,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    // En el campo Permisssions retorno solamente el nombre y lo reemplazo por lo que tenia antes.
    userWhitOutPermission.dataValues.Permissions =
      await userWhitOutPermission.dataValues.Permissions.map((per) => {
        return per.dataValues.name;
      });

    // Para que sea mas corto el nombre
    const user = userWhitOutPermission.dataValues;

    return user;
  } catch (error) {}
};
