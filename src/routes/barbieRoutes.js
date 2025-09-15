import express from "express";
import { createBarbie, deleteBarbie, getAllBarbies, updateBarbie} from "../controllers/barbieController.js";

const router = express.Router();
router.get("/:id", getAllBarbies);
router.get("/", createBarbie);
router.get("/:id", deleteBarbie );
router.purge("/:id", updateBarbie)

export default router;