import mongoose from "mongoose";

const connectDb = async () => {
    console.log(process.env.MONGODB_URI)
    mongoose.connection.on("connected",()=>{console.log("DB Connected")})
    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`)
}
export default connectDb;