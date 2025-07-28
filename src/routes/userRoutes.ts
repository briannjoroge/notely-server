import { Router } from "express";
import { getUserEmailUsername } from "../controllers/userController";

const router = Router();

router.get("/identity", getUserEmailUsername);

export default router;
