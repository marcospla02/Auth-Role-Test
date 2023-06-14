import { Router } from "express";
import * as permisions_routes from "../../controllers/Permission/permission.controllers";
import { verifyToken, verifyPermission } from "../../middlewares";
// import { verifyPermission } from "../../middleware";

const router = Router();

router.get("/", permisions_routes.getPermissions);

router.post(
  "/create",
  verifyToken,
  verifyPermission("create_permission", "dev"),
  permisions_routes.createPermissions
);

router.put("/:permissionId", permisions_routes.updatePermissions);

router.delete("/:permissionId", permisions_routes.deletePermissions);

export default router;
