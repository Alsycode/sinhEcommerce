import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Searchbar from './components/Searchbar'
const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] w-screen'>
<Navbar/>
<Searchbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/collection' element={<Collection/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/orders' element={<Orders/>}/>
  <Route path='/place-order' element={<PlaceOrder/>}/>
  <Route path='/product/:id' element={<Product/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
</Routes>
<Footer/>
    </div>
  )
}

export default App