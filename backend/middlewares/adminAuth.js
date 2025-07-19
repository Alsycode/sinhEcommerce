import jwt from "jsonwebtoken"

const adminAuth = async (req,res,next) => {
    try{
        
const { token } = req.headers;
if(!token){
    res.json({success:flase,message:"Login again,authorization failed"})
}
const token_decode = jwt.verify(token,process.env.JWT_SECRET)
console.log(token_decode)
if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
    return res.json({success:false,message:"Not Authorized Login abain"})
}
next()
    }catch(error){
        res.json({success:true,message:error.message})
    }
}

export default adminAuth