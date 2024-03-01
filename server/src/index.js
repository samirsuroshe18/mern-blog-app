import dotenv from "dotenv";
dotenv.config()
import { connectDB } from "./db/db.js";
import { app } from "./app.js";


connectDB().then(()=>{
    app.listen(process.env.PORT || 5000, ()=>{
        console.log(`Server is running at Port : http://localhost:${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("MongoDB Failed !! ", err);
})