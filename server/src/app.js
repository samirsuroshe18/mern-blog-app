import express from "express";
import cors from 'cors';
import path from 'path';

const __dirname = path.resolve();
const app = express();



app.use(cors({ origin: process.env.CORS_ORIGIN}))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))


import userRouter from "./routes/user.route.js";

app.use("/users", userRouter);


app.use(express.static(path.join(__dirname, '/client/dist')))

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})

export {app}