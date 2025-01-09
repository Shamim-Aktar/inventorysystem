
import express from 'express'
import dotenv from "dotenv"
import {db} from './db/db.js'
import userRoutes from "./routes/userRoutes.js"
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'

import bodyParser from 'body-parser';

dotenv.config()
const app=express()

const port = process.env.PORT || 5000;

db()

app.use(express.json())
//app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())



app.use("/api/users", userRoutes)


app.listen(port, console.log(`app is running port  ${port}`));