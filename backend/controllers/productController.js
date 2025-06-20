import { v2 as cloudinary } from 'cloudinary';
import productModel from "../models/productModel.js"
const addProduct = async (req,res) => {
try{const { name,description,price,category,subCategory,sizes,bestseller } = req.body;
const image1 = req.files.image1 && req.files.image1[0];
const image2 = req.files.image2 && req.files.image2[0];
const image3 = req.files.image3 && req.files.image3[0];
const image4 = req.files.image4 && req.files.image4[0];
console.log(name,description,price,category,subCategory);
const images = [image1,image2,image3,image4];

const imagesUrl = await Promise.all(images.map(async (item) => {
    let result = await cloudinary.uploader.upload(item.path,{resource_type:"image"});
    return result.secure_url;
}));

const productData = {
    name,description,category,subCategory,price:Number(price),bestseller: bestseller === "true" ? true : false,
    sizes:JSON.parse(sizes),image:imagesUrl,date:Date.now()
}
const product = new productModel(productData);
await product.save();
console.log(imagesUrl)

res.send({success:true,message:"product added"})
}catch(error){
res.json({success:false,message:error.message})
}
}

const listProducts = async (req,res) => {

    try{
        const products = await productModel.find({});
        res.json({success:true,message:"All prodcuts listed",products})
    }catch(error){
        res.json({success:false,message:error.message})
    }
    
}
const removeProduct = async (req,res) => {
    try{
await productModel.findByIdAndDelete(req.body._id)
res.json({success:true,message:"Item deleted"})
    }catch(error){
 res.json({success:false,message:error.message})
    }
}

const singleProduct = async (req,res) => {

    try{
        console.log("ccccccccccc",req.body)
        const { productId } = req.body; 

  if (!productId) {
      throw new Error('Product ID is required');
    }

    const product = await productModel.findById(productId); // Pass productId directly
    console.log('Product:', product);

    if (!product) {
      throw new Error('Product not found');
    }
    res.json({message:true,product})
    }catch(error){
        res.json({success:false,message:error.message})
    }
    
}
export  { listProducts,addProduct,removeProduct,singleProduct}