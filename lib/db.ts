import mongoose from "mongoose";


export const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string);
        console.log("connect to MongoDB");


    } catch (error) {
        console.log(error);

    }
}