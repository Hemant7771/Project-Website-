import React from 'react'
import cartImg from './cart.png'
import './Cart.css'

const EmptyCart = () => {
  return (
    <>
      <div class="container">
        <div class="bag">
          <img class='cartimg' src={cartImg} alt='cart img' />
          <div className="row">
            <div className="col-12 py-4">
              <p class="light">Hey,it feel so light!</p>
            </div>
            <div className="col-12 pb-4">
              <p class="iteam">There is nothing in your bag.Let Add some items.</p>
            </div>
            <div className="col-12 pb-4">
              <button class='shop-cart-btn'>ADD ITEMS FROM WISHIST</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmptyCart