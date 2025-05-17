import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {
    const {cartAmount,currency,delivery_fee} = useContext(ShopContext);
  return (
    <div className='w-full'>
<div className='text-2xl'>
<Title text1={"CART"} text2={" TOTAL"}/>
</div>
<div className='flex flex-col mt-2 text-sm'>
  <div className='flex justify-between py-2'>
<p>Subtotal</p>
<p>{currency} {cartAmount()}.00</p>
</div> 
<div className='flex justify-between border-t border-b py-2'>
<p>Shipping Fee</p>
<p>{currency} {delivery_fee}.00</p>
</div>
<div className='flex justify-between py-2 font-bold'>
<p >Total</p>
<p>{currency} {cartAmount() === 0 ? 0 : cartAmount() + delivery_fee}</p>
</div>  
</div>
    </div>
  )
}

export default CartTotal