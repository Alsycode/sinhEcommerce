import React, { useContext,useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const {id} = useParams();
  console.log(id)
  const {products,currency,addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState('');
 const [image,setImage] = useState();
 const [size, setSize] = useState();
 console.log("size",size)
  const fetchproducts = async () => {
 products.map((item)=>{
      if(item._id === id){
        setProductData(item);
        setImage(item.image[0])
        console.log("productData", productData.category)
        return null;
      }
    })
  }
  useEffect(()=>{
    fetchproducts()
  },[id])
console.log("productdata",productData)
  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 '>
{/* product data */}
<div className='flex gap-12 flex-col sm:gap-12 sm:flex-row'>
  {/* product images */}
<div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
<div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
{
  productData.image?.map((product,index)=> (
    <img src={product} onClick={()=>setImage(product)} key={index} alt='product-img' className='w-[14%] sm:w-full cursor-pointer flex-shrink-0 sm:mb-3'/>
  ))
}
</div>
<div className='w-full sm:w-[80%] max-w-[800px]'>
<img className='w-full h-auto' src={image} alt='main-image'/>
</div>
</div>
{/* product info */}
<div className='flex-1 '>
<h1 className='font-medium text-2xl mt-2 text-black'>
{productData.name}
</h1>
<div className='flex gap-1 items-center mt-2'>
<img src={assets.star_icon} className="w-4 " alt='stars'/>
<img src={assets.star_icon} className="w-4 " alt='stars'/>
<img src={assets.star_icon} className="w-4 " alt='stars'/>
<img src={assets.star_icon} className="w-4 " alt='stars'/>
<img src={assets.star_icon} className="w-4 " alt='stars'/>
<p className='pl-2'>(1222)</p>
</div>
<p className='mt-4 font-medium text-3xl'>{currency}{productData.price}</p>
<p className='mt-4 text-gray-400 md:w-4/5'>{productData.description}</p>
<div className='flex flex-col gap-4 my-8'>
<p className='font-medium text-2xl'>Select sizes</p>
<div className='flex gap-2'>
{productData.sizes.map((productSize,index)=>(
  <button onClick={()=>setSize(productSize)} className={`border  py-2 px-4 bg-gray-300 ${productSize === size ? "border-orange-500" : "" }`} key={index}>{productSize}</button>
))}
</div>

</div>
<button className='bg-black  text-sm text-white active:bg-gray-700 px-8 py-3' onClick={()=>addToCart(productData._id,size)}>ADD TO CART</button>
<hr className='mt-8 sm:w-4/5'></hr>
<div className='text-sm text-gary-500 mt-5 flex flex-col gap-1'>
  <p className=''>100% Original Product</p>
  <p className=''>Cash on delivery is available on this product.</p>
  <p className=''>Easy return and exchange policy within 7 days</p>

</div>
</div>

</div>
{/* description and review section */}
<div className='mt-20'>
<div className='flex'>
  <b className='border px-5 py-3 text-sm'>Description</b>
  <p className='border px-5 py-3 text-sm'>Reviews</p>

</div>
<div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
  <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer. </p>
  <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>

</div>
</div>
{/* display related products */}
<RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product