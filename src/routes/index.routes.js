import { Router } from "express";
const router = Router();

import package_route from "./Package/package.routes";
import permission_route from "./Permission/permission.routes";
import user_route from "./User/user.routes";
import auth_route from "./Auth/auth.routes";

// middleware (redirijo las rutas)
router.use("/package", package_route);
router.use("/user", user_route);
router.use("/permission", permission_route);
router.use("/auth", auth_route);

export default router;
