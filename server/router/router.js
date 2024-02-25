import express from "express";
import defaultData from "../default.js";
import {getProducts} from "../controller/prod_control.js";

const router = express.Router();

router.post('/insert',defaultData)
router.post('/products', getProducts);
export default router;  
