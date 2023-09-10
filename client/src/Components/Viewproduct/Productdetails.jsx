import React from 'react'
import './Productdetails.css'
import Productproperties from './Productproperties'
const Productdetails = (props) => {
  return (
    <>
        <div class="product-details">
                    <div class="pd1">
                        <h1>Product Description</h1>
                        <div class="pd2">
                            <h4>Top-Details :</h4>
            
                        </div>
                    </div>
                    <Productproperties properties={props.properties}/>
                </div>
    </>
  )
}

export default Productdetails