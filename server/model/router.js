import express from "express";
import insertData from "./addingData.js";
import defaultData from "../default.js";

const router = express.Router();

router.post('/insert',defaultData)

export default router;  
