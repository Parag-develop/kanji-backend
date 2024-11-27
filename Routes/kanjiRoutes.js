import express from "express";
import { getGrade1Kanji, getGrade2Kanji } from "../Controllers/kanjiController.js";

const router = express.Router();

//Grade one kanji
router.get('/grade1', getGrade1Kanji);
//Grade two kanji
router.get('/grade2', getGrade2Kanji);

export default router;