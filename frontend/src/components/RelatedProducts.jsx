import React, { useState,useContext,useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = (category,subCategory) => {

    const { products } = useContext(ShopContext);
    const [relatedProducts, setRelatedProducts] = useState([]);
    useEffect(()=>{
        let productsCopy = products.slice();
        productsCopy = productsCopy.filter((product)=>product.category === category.category);
        productsCopy = productsCopy.filter((product)=>product.subCategory === category.subCategory);
        setRelatedProducts(productsCopy);
    },[products])
console.log(relatedProducts.slice(0,5))
console.log(category)
  return (
<div className='my-24'>
<div className='text-center text-3xl'>
<Title text1={"RELATED"} text2={" PRODUCTS"}/>
</div>
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
    {relatedProducts.slice(0,5).map((product,index)=>(
        <ProductItem key={index} id={product._id} image={product.image} name={product.name} price={product.price}/>
    ))}

</div>
</div>
  )
}

export default RelatedProducts