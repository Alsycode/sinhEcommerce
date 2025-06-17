const addProduct = async (req,res) => {
try{const { name,desscription,price,category,subCategory,sizes,bestseller } = req.body;
const image1 = req.files.image1[0];
const image2 = req.files.image2[0];
const image3 = req.files.image3[0];
const image4 = req.files.image4[0];
console.log(name,dtesscription,price,category,subCategory);
console.log(image1,image2)
}catch(error){
res.json({success:false,message:error.message})
}
}

const listProducts = async (req,res) => {
    
}
const removeProduct = async (req,res) => {
    
}

const singleProduct = async (req,res) => {
    
}
export  { listProducts,addProduct,removeProduct,singleProduct}