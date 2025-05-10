import { createContext, useContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

// Create the context
const ShopContext = createContext();

// Define the provider component
const ShopContextProvider = (props) => {
  const delivery_fee = 10;
  const currency = "$";
const [search, setSearch] = useState("");
const [showSearch, setShowSearch] = useState(true);
  // Combine all values you want to provide in the context
  const value = {
    products,
    delivery_fee,
    currency,search,setSearch,showSearch,setShowSearch
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export { ShopContext };
export default  ShopContextProvider 