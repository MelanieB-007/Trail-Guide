import { Router } from "express";
import * as trailController from "../controllers/trailController.js";

const router = Router();

// Startseite
router.get("/", trailController.renderAllTrails);

// Detailseite (mit Variable :slug)
router.get("/trails/:slug", trailController.renderTrailDetail);

export default router;
