import express from "express";
import defaultData from "../default.js";
import {getProducts} from "../controller/prod_control.js";

const router = express.Router();

router.post('/insert',defaultData)
router.get('/products',getProducts)

export default router;  
