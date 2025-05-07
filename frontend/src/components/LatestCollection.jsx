import React, { useContext, useEffect } from 'react'
import Title from './Title'
import { ShopContext } from "../context/ShopContext"
import { useState } from 'react'
import ProductItem from './ProductItem'
const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);
    useEffect(()=>{
        setLatestProducts(products.slice(0, 10))
    },[])
    console.log(latestProducts)
  return (
    <div className='my-10'>
<div className='text-center py-8 text-3xl'>
<Title text1={"LATEST"} text2={"COLLECTIONS"}/>
<p className='w-3/4 m-auto text-sm sm:text-sm md:text-base text-gray-600'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, commodi distinctio delectus voluptas maiores, quo neque alias laborum temporibus esse in, laudantium placeat aut libero</p>
</div>
{/* redndering product */}
   <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
{
  latestProducts?.map((item, index)=>(
    <ProductItem id={item.id} image={item.image} price={item.price} name={item.name} key={index}/>
  ))
}
   </div>
    </div>
  )
}

export default LatestCollection