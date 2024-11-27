import express from "express";
import { getExample } from "../Controllers/exampleController.js";
const router = express.Router();


router.get('/:character', getExample);

export default router;