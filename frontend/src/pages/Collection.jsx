import React, { useContext,useEffect,useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
const Collection = () => {
  const { products,search, showSearch } = useContext(ShopContext); 
  const [showFilters, setShowFilters] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const toggleCategory = (e) => {

    if(category.includes(e.target.value)){
      setCategory(prev=>prev.filter(item=>item !== e.target.value))
    }
    else{
      setCategory(prev=>[...prev,e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=>prev.filter(item=> item !== e.target.value))
    }
    else{
      setSubCategory(prev=>[...prev,e.target.value])
    }
  }

  // logic to filter products based on category and subcategory
  const applyFilter  = () => {
    let productsCopy = products.slice();
    if(showSearch && search){
     productsCopy = productsCopy.filter(item=> item.name.toLowerCase().includes(search.toLowerCase())); 
    }

    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }

    if(subCategory.length > 0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }
    setFilterProducts(productsCopy)
  }

  // logic to sort products based on price 
  const sortProducts = () => {
    let fpCopy = filterProducts.slice();
    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a,b)=>a.price - b.price));
        break;
        case "high-low":
          setFilterProducts(fpCopy.sort((a,b)=>b.price - a.price));
          break;
default:
  applyFilter();
  break; 
    }
  }
  // to filter the products whenever the category or sub category chnages
  useEffect(()=>{
    applyFilter()
    console.log(filterProducts)
  },[category, subCategory,search,showSearch])
  

  // to sort teh filtered products based on the prices
  useEffect(()=>{
    sortProducts();
  },[sortType])
  // useEffect(()=>{
  //   setFilterProducts(products)
  // },[])

//   useEffect(()=>{
// console.log("subacategory",subCategory)
//   },[subCategory])
//   useEffect(()=>{
//     console.log("catgeory selected",category)
//   },[category])
  return (
    <div className='flex flex-col sm:flex-row sm:gap-10 border-t text-gray-500 pt-10'>
{/* filter options */}
<div className='min-w-60'>
<p onClick={()=>setShowFilters(!showFilters)}className='my-2 text-gray-600 flex items-center text-center cursor-pointer gap-2 text-xl '>FILTERS
  <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilters ? "rotate-90" : ""}`}/>
</p>
{/* category filters */}
<div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilters ? "" : "hidden"} sm:block`}>
<p className='mb-3 text-sm font-medium'>CATEGORIES</p>
<div className='text-sm flex flex-col gap-2 font-light'>
  <p className='flex gap-2'><input type="checkbox" className='w-3' onChange={toggleCategory} value={"Men"}/>Men</p>
  <p className='flex gap-2'><input type="checkbox" className='w-3' onChange={toggleCategory} value={"Women"}/>Women</p>
  <p className='flex gap-2'><input type="checkbox" className='w-3' onChange={toggleCategory} value={"Children"}/>Children</p>

</div>
</div>
{/* sub category filters */}
<div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilters ? "" : "hidden"} sm:block`}>
<p className='mb-3 text-sm font-medium'>TYPE</p>
<div className='text-sm flex flex-col gap-2 font-light'>
  <p className='flex gap-2'><input type="checkbox" className='w-3' onChange={toggleSubCategory} value={"Topwear"}/>Topwear</p>
  <p className='flex gap-2'><input type="checkbox" className='w-3' onChange={toggleSubCategory} value={"Bottomwear"}/>Bottomwear</p>
  <p className='flex gap-2'><input type="checkbox" className='w-3' onChange={toggleSubCategory} value={"Winterwear"}/>Winterwear</p>

</div>
</div>
</div>
{/* right side */}
<div className='flex-1'>
<div className='flex justify-between text-base sm:text-2xl mb-4'>
<Title text1={"ALL"} text2={"COLLECTIONS"}/>
{/* product sort */}
<select className='border-2 text-gray-300 text-sm px-2' onChange={(e)=>setSortType(e.target.value)}>
<option value="Relevance">Sort by: Relevance</option>
<option value="low-high">Sort by: Low to High</option>
<option value="high-low">Sort by: Hight to Low</option>
</select>
</div>
<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 '>
{
filterProducts.map((item,index)=>(<ProductItem key={index} id={item._id} price={item.price} name={item.name} image={item.image}/>))
}
</div>
</div>
    </div>
  )
}

export default Collection