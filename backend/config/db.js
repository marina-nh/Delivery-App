import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://manzana:311094@cluster0.98pfb.mongodb.net/delivery').then(()=>console.log("DB Connected"));
}