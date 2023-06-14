import { Router } from "express";

import * as authCtrl from "../../controllers/Auth/auth.controllers";

const router = Router();

router.post("/signup", authCtrl.singUp);

router.post("/signin", authCtrl.signIn);

export default router;
