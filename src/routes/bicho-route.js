import express from "express";

import bichoController from "../controllers/bicho-controller.js"

const router = express.Router()

router.post("/", bichoController.store)
router.get("/", bichoController.index)
router.get("/:id", bichoController.show)
router.put("/:id", bichoController.update)
router.delete("/:id", bichoController.destroy)

export default router