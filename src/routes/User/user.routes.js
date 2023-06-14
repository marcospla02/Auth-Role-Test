import { Router } from "express";
import * as users from "../../controllers/User/user.controllers";
import { verifyPermission, verifyToken } from "../../middlewares";

const router = Router();

router.get(
  "/",
  verifyToken,
  verifyPermission("get_users", "dev"),
  users.getUsers
);

router.post(
  "/create",
  verifyToken,
  verifyPermission("create_user", "dev"),
  users.createUser
);

router.put(
  "/:userId",
  verifyToken,
  verifyPermission("update_user", "dev"),
  users.updateUserById
);

router.delete(
  "/:userId",
  verifyToken,
  verifyPermission("delete_user", "dev"),
  users.deleteUserById
);

export default router;
