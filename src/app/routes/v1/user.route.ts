import * as userHandler from "../../handlers/user.handler";

import { login, register } from "../../validation/user.validation";

import { Router } from "express";
import { createValidator } from "express-joi-validation";

const validator = createValidator();

const router = Router();

router.post("/register", validator.body(register), userHandler.registerUser);
router.post("/login", validator.body(login), userHandler.loginUser);
router.get("/:id", userHandler.findOneById);

export default router;
