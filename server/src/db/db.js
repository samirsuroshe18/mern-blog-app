import mongoose from "mongoose";

const connectDB = async () => {
    try {
        console.log(process.env.MONGODB_URI)
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB Connected !!  DB Host : "+connectionInstance.connection.host);
    } catch (error) {
        console.log("MongoDB connnection fail !! ",error);
        process.exit(1)
    }
}


export {connectDB}