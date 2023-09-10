import React from 'react'
import Cartproductcard from './Cartproductcard'
import EmptyCart from './EmptyCart'
import axios from 'axios';
import { useState, useEffect } from 'react';

const Cart = () => {
  const [cartProduct, setCartProduct] = useState([]);

  useEffect(
    () => {
      getcartdata()
    }, []
  )

  const getcartdata = () => {
    axios.get("http://localhost:8000/getCartData2").then(async (res) => {
      await setCartProduct(res.data);
    });
  }

  let count = 0;
  if (cartProduct.length === 0) {
    count = 1;
  }
  return (
    <div>
      <div className="container">
        {
          count === 1 ? (
            <EmptyCart/>
          ) : (
            <div className="row">
              {
                cartProduct.map((product) => {
                  return (
                    <Cartproductcard id={product.prodId} qty={product.qty} category={product.category} img={product.imgurl} productname={product.productname} price={product.price} increasedprice={product.increasedprice} brand={product.brand} />
                  )
                })
              }
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Cart