import { models } from "../db";
import { relationUserById } from "../libs/RelationUserById";

export const verifyPermission =
  (permissionName, dev) => async (req, res, next) => {
    try {
      const { Permission } = models;

      const user = await relationUserById(req.userId);

      const permissionsFound = await Permission.findAll({
        where: { name: user.Permissions },
      });

      if (!permissionsFound)
        return res.status(403).json({ message: "Se requiere un permiso!" });

      for (let i = 0; i < permissionsFound.length; i++) {
        if (
          permissionsFound[i].name === permissionName ||
          permissionsFound[i].name === dev
        ) {
          next();
          return;
        }
      }
    } catch (error) {
      return res.status(500).send({ message: error });
    }
  };
