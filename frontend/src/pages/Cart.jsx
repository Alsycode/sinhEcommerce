import React, { useContext, useEffect,useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
const Cart = () => {
  const {products,currency,cartItems} = useContext(ShopContext);
  const [cartData,setCartData] = useState([]);
  useEffect(()=>{
    let tempData = [];
    for(const items in cartItems){
      for(const item in cartItems[items]){
if(cartItems[items][item] > 0){
  tempData.push({
    _id:items,
    size:item,
    quantity:cartItems[items][item]
  })
}
      }
    }
    setCartData(tempData)
    console.log("xxxxxxxxxx",cartData)
  },[cartItems])
  return (

    <div className='border-t py-14'>
      <div className='text-2xl'>
      <Title text1={"YOUR"} text2={" CART"}/>
      </div>
      {
        cartData.map((item,index)=>{
          const productData = products.find((product)=>product._id === item._id);
          return(
            <div key={index} className='py-4 items-center border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] gap-4'>
<div className='flex flex-start gap-6 items-center'>
<img src={productData.image[0]} alt='product-img' className='w-16 sm:w-20'/>
<div>
  <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
  <div className='flex items-center mt-2 gap-5'>
    <p>{currency}{productData.price}</p>
    <p className='px-2 sm:px-3 bg-slate-50 border'>{item.size}</p>
  </div>
</div>
</div>
            </div>
          )
        })
      }

    </div>
  )
}

export default Cart