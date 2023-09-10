import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Aboutus from '../Pages/Aboutus/Aboutus'
import Contactus from '../Pages/Contactus/Contactus'
import Cart from '../Pages/Cart/Cart'
import Wishlist from '../Pages/Wishlist/Wishlist'
import User from '../Pages/User/User'
import Product from '../Pages/Product/Product'
import Seller from '../Pages/seller/Seller'
import Viewproduct from '../Components/Viewproduct/Viewproduct'
import Mobile from '../Pages/Mobiles/Mobile'
// import Laptop from '../Pages/Laptops/Laptop'
import Buy from '../Pages/Buy/Buy'
import Payment from '../Pages/Buy/Payment'
// import Clothings from '../Pages/Clothings/Clothings'

export default function AllRoutes() {

  return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about-us' element={<Aboutus/>}/>
            <Route path='/contact-us' element={<Contactus/>}/>
            <Route path='/wishlist' element={<Wishlist/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/user' element={<User/>}/>
            <Route path='/products/electronics' element={<Product/>}/>
            <Route path='/seller' element={<Seller/>}/>
            <Route path='/products/electronics/:category/:id' element={<Viewproduct/>}/>
            <Route path='/products/electronics/:category' element={<Mobile/>}/>
            {/* <Route path='/products/clothings' element={<Clothings/>}/> */}
            {/* <Route path='/products/electronics/laptops' element={<Laptop/>}/> */}
            <Route path='/buy' element={<Buy/>}/>
            <Route path='/payment' element={<Payment/>}/>
        </Routes>
  )
}
