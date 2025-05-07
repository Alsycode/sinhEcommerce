import { createContext, useContext } from "react";
import { products } from "../assets/frontend_assets/assets";

// Create the context
const ShopContext = createContext();

// Define the provider component
const ShopContextProvider = (props) => {
  const delivery_fee = 10;
  const currency = "$";

  // Combine all values you want to provide in the context
  const value = {
    products,
    delivery_fee,
    currency
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export { ShopContext };
export default  ShopContextProvider 