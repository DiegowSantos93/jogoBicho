import express from "express";

import apostaController from "../controllers/aposta-controller.js";

const router = express.Router()

router.post("/", apostaController.store)
router.get("/", apostaController.index)
router.get("/:id", apostaController.show)
router.put("/:id", apostaController.update)

export default router