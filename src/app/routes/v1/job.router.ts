import * as jobHandler from "../../handlers/job.handler";

import { Router } from "express";

const router = Router();

router.post("/", jobHandler.createOne);
router.get("/", jobHandler.findAll);
router.get("/id/:id", jobHandler.findOneById);
router.get("/:slug", jobHandler.findOneBySlug);
router.put("/:id", jobHandler.updateOne);
router.delete("/:id", jobHandler.deleteOne);
export default router;
