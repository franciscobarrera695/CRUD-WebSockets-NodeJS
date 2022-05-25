import mongoose from "mongoose";
import { MONGO_URI } from "./config/env.config.js";

export const dbConnected = async() => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log('connected to db')
    } catch (error) {
        console.log(error)
    }
}