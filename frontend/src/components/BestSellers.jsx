import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';
const BestSellers = () => {
    const { products } = useContext(ShopContext);
    const [bestSellers, setBestSellers] = useState([]);
    useEffect(()=>{
        const bestProducts  = products.filter((item)=>(item.bestseller === true))
        setBestSellers(bestProducts)    
    },[])
  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={"BEST"} text2={"SELLER"}/>
            <p className='w-3/4 m-auto text-sm sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quis?</p>

        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
{
  bestSellers?.slice(0, 10)?.map((item, index)=>(
    <ProductItem id={item.id} image={item.image} price={item.price} name={item.name} key={index}/>
  ))
}
   </div>

    </div>
  )
}

export default BestSellers