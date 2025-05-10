import React, { useContext,useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Product = () => {
  const {id} = useParams();
  console.log(id)
  const {products} = useContext(ShopContext);
  const [productData, setProductData] = useState('');
 const [image,setImage] = useState();
  const fetchproducts = async () => {
 products.map((item)=>{
      if(item._id === id){
        setProductData(item);
        setImage(item.image[0])
        console.log("productData", productData)
        return null;
      }
    })
  }
  useEffect(()=>{
    fetchproducts()
  },[id])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 '>
{/* product data */}
<div className='flex gap-12 flex-col sm:gap-12 sm:flex-row'>
  {/* product images */}
<div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
<div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[10.7%] w-full'>
{
  productData.image?.map((product,index)=> (
    <img src={product} key={index} alt='product-img' className='w-[14%] sm:w-full cursor-pointer flex-shrink-0 sm:mb-3'/>
  ))
}
</div>
<div className='w-full sm:w-[80%]'>
<img className='w-full h-auto max-h-[700px] max-w-[700px]' src={image} alt='main-image'/>
</div>
</div>
</div>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product