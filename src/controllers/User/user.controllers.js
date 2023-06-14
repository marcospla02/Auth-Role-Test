import { models } from "../../db";
import { relationUserById } from "../../libs/RelationUserById";
import { RealtionUsers } from "../../libs/RelationUsers";
import { UserModel } from "../../models/User";

export const getUsers = async (req, res) => {
  try {
    const value = await RealtionUsers();

    res.send(value);
  } catch (error) {
    res.send({ msg: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const { User, Permission } = models;

    const { name, lastname, email, password, phone, permission } = req.body;

    if (!name || !lastname || !email || !phone || !password) {
      return res.send({ msg: "Fields are missing" });
    }

    const sameEmail = await User.findOne({ where: { email: email } });

    if (sameEmail) {
      return res.send({ msg: "Correo registrado" });
    }

    const newUser = await User.create({
      name,
      lastname,
      email,
      password: await UserModel.prototype.encryptPassword(password),
      phone,
    });

    const permissionsFound = await Permission.findAll({
      where: { name: permission },
    });

    newUser.addPermission(permissionsFound);

    res.send({ msg: "User created" });
  } catch (error) {
    res.send({ msg: error.message });
  }
};

export const updateUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const { name, email, password, phone, Permissions, lastname } = req.body;
    const { User, Permission } = models;

    const user = await relationUserById(userId);

    if (Permissions) {
      const user = await User.findOne({ where: { id: userId } });

      // Verificar si `permissions` es un arreglo válido
      if (!Array.isArray(Permissions)) {
        return res.status(400).json({
          error: "Los permisos deben ser proporcionados como un arreglo.",
        });
      }

      // Verificar si todos los elementos en `permissions` son números enteros (paso el id)
      if (!Permissions.every(Number.isInteger)) {
        return res
          .status(400)
          .json({ error: "Los permisos deben ser números enteros." });
      }

      // Convertir los elementos en `permissions` a enteros
      const permissionIds = Permissions.map(Number);

      // Asignar los nuevos permisos al usuario
      user.setPermissions(permissionIds);
    }

    if (name || email || password || phone || lastname) {
      const updated = await User.update(
        {
          name,
          email,
          password: await UserModel.prototype.encryptPassword(password),
          phone,
          lastname,
        },
        {
          where: { id: user.id },
        }
      );

      if (updated[0] === 0) return res.send({ msg: "No se pudo modificar" });
    }

    res.send({ msg: "Usuario modificado" });
  } catch (error) {
    res.send({ msg: error.message });
  }
};

export const deleteUserById = (req, res) => {
  try {
  } catch (error) {
    res.send({ msg: error.message });
  }
};
