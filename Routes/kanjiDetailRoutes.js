import express from "express";
import {getKanjiDetail} from '../Controllers/kanjiDetailController.js'
const router = express.Router();


router.get('/:character', getKanjiDetail);

export default router;