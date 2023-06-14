import jwt from "jsonwebtoken";
import { models } from "../db";
const { SECRET } = process.env;

export const verifyToken = async (req, res, next) => {
  try {
    const { User } = models;

    const auth = req.get("Authorization");

    let token = null;

    if (auth && auth.toLowerCase().startsWith("bearer")) {
      token = auth.substring(7);
    } else {
      return res.send({ msg: "No estas autorizado" });
    }

    if (!token) return res.send("No estas registrado");

    const decoded = jwt.verify(token, SECRET);
    req.userId = decoded.id;

    if (!decoded.id) return res.send("No estas autorizado");

    const user = await User.findByPk(decoded.id);

    if (!user) return res.send("No existe el usuario");

    next();
  } catch (error) {
    return res.send({ msg: error.message });
  }
};
