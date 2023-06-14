import { models } from "../../db";

export const getPermissions = async (req, res) => {
  try {
    const { Permission } = models;
    const allPermission = await Permission.findAll();

    res.send(allPermission);
  } catch (error) {
    res.send({ msg: error.message });
  }
};

export const createPermissions = async (req, res) => {
  try {
    const { name } = req.body;
    const { Permission } = models;

    if (!name) {
      return res.send({ msg: "El nombre es obligatorio" });
    }
    // en el proyecto poner que no se puede crear 2 veces el mismo.

    const newPermission = await Permission.create({
      name,
    });
    res.send({ msg: `Permiso '${newPermission.name}' creado` });
  } catch (error) {
    res.send({ msg: error.message });
  }
};

export const updatePermissions = async (req, res) => {
  try {
  } catch (error) {
    res.send({ msg: error.message });
  }
};

export const deletePermissions = async (req, res) => {
  try {
  } catch (error) {
    res.send({ msg: error.message });
  }
};
