import { createContext, useContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";

// Create the context
const ShopContext = createContext();

// Define the provider component
const ShopContextProvider = (props) => {
  const delivery_fee = 10;
  const currency = "$";
const [search, setSearch] = useState("");
const [showSearch, setShowSearch] = useState(true);
const [cartItems, setCartItems] = useState({});
const addToCart = (itemId,size) => {
  if(!size){
    toast.error("Select Product Size")
  }
let cartData = structuredClone(cartItems);
if(cartData[itemId]){
  if(cartData[itemId][size]){
    cartData[itemId][size] += 1;
  }
  else{
    cartData[itemId][size] = 1;
  }
}
else{
  cartData[itemId] = {};
  cartData[itemId][size] = 1;
}
setCartItems(cartData);
console.log(cartData[itemId])
}

const getCartCount = () => {
  let totalCount = 0;
  for(const items in cartItems){
    for(const item in cartItems[items]){
      try{
        if(cartItems[items][item] > 0){
          totalCount += cartItems[items][item];
        }
        }
        catch (error){
console.log(error)
        }
      }
    }
    return totalCount;
  }
useEffect(()=>{
  console.log(cartItems)
},[cartItems])
  // Combine all values you want to provide in the context
  const value = {
    products,
    delivery_fee,
    currency,search,setSearch,showSearch,setShowSearch,cartItems,addToCart,getCartCount
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export { ShopContext };
export default  ShopContextProvider 