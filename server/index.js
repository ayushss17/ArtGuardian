import  express  from "express";
import connection from "./Database/DB.js";
import dotenv from 'dotenv';
import defaultData from "./default.js";

const app=express();

dotenv.config();

const user= process.env.DB_USERNAME;
const pass=process.env.DB_PASSWORD;

const port = 6969;

connection(user,pass);

app.listen(port,()=>{console.log('Server ON on port')})

defaultData();
