import { models } from "../../db";
import { UserModel } from "../../models/User";
import jwt from "jsonwebtoken";
const { SECRET } = process.env;

export const singUp = async (req, res) => {
  try {
    const { name, lastname, email, password, phone, permission } = req.body;
    const { User, Permission } = models;

    const sameemail = User.findOne({ where: { email: email } });

    if (sameemail) {
      return res.send({ msg: "Correo registrado" });
    }

    const newUser = await User.create({
      name,
      lastname,
      email,
      password: await UserModel.prototype.encryptPassword(password),
      phone,
    });

    if (permission) {
      const permissionsFound = await Permission.findAll({
        where: { name: permission },
      });

      newUser.addPermission(permissionsFound);
    }

    const token = jwt.sign({ id: newUser.id }, SECRET, {
      expiresIn: 86400,
    });

    res.send({ token: "Bearer " + token });
  } catch (error) {
    return res.send({ msg: error.message });
  }
};

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { User } = models;

    const userFound = await User.findOne({ where: { email: email } });

    if (!userFound) {
      return res.send({ msg: `El usuario con el correo '${email}' no existe` });
    }

    const matchPassword = await UserModel.prototype.comparePassword(
      password,
      userFound.password
    );

    if (!matchPassword) return res.send("Contraseña incorrecta");

    const token = jwt.sign({ id: userFound.id }, SECRET, {
      expiresIn: 86400,
    });

    res.send({ token: "Bearer " + token });
  } catch (error) {
    return res.send({ msg: error.message });
  }
};
