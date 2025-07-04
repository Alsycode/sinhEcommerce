import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"
import userModel from "../models/userModel.js";



const createToken  = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}
const loginUser = async (req,res) => {
    try{
        const { email,password } = req.body;
const user = await userModel.findOne({email});
if(!user){
    return res.json({success:false,message:"User doesnt exist"})
}
const isMatch = await bcrypt.compare(password,user.password);
if(isMatch){
    const token =  createToken(user._id)
    res.json({success:true,token})
}else{
    return res.json({success:false,message:"Invalid credentials"})
}
    }
catch(error){
console.log(error);
        res.json({success:false,message:error.message})
    }
}
const registerUser = async (req,res) => {
    try{
        const { name,email,password } = req.body;
        console.log(req.body)
const exist = await userModel.findOne({email});
if(exist){
    return res.json({success:false,message:"The user already exsist"})
}
if(!validator.isEmail(email)){
    return res.json({success:false,message:"Please enter a valid email address"})
}
if(password.length < 8){
    return res.json({success:false,message:"Please enter a strong password"})
}
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password,salt);
const newUser  = new userModel({
    name,
email,password:hashedPassword
})
const user = await newUser.save();
const token = createToken(user._id);
res.json({success:true,token})
    }catch(error){
        console.log(error);
        res.json({success:false,message:error.message})
    }

}
const logoutUser = (req,res) => {

}   
const adminLogin = (req,res) => {
try{

}catch(error){
    res.json()
}
}

export { loginUser,logoutUser,registerUser,adminLogin }