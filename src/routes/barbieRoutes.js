import express from "express";
import { createBarbie, deleteBarbie, getAllBarbies} from "../controllers/barbieController.js";

const router = express.Router();
router.get("/:id", getAllBarbies);
router.get("/", createBarbie);
router.get("/:id", deleteBarbie );

export default router;