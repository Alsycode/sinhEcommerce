import express from "express"
import cors from "cors"
import "dotenv/config"
import mongoDb from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js"
// middlewares
const app = express();
app.use(express.json());

app.use(cors())

connectCloudinary();
const port = process.env.PORT || 4000;
mongoDb();
// api endpoints
app.use("/api/user",userRouter)

app.use("/api/product",productRouter)
app.get("/",(req,res)=>{
    res.send("API working")
})
app.listen(port,()=>console.log('Server is running on port : ' + port))