import React from 'react'
import './Productcard.css'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Slidercard = (props) => {
    const category=props.category.toLowerCase()+"s";
    const id = props.id;

    function gotoCart(e) {
        e.preventDefault();
    
        try {
          axios.post("http://localhost:8000/takeCartData", {
            "prodId":id,
          });
        } catch (error) {
          console.log(error);
        }
      } 

    return (
        <> 
            <div className="col-lg-10 col-12 mx-auto pb-lg-4 pb-2 d-flex justify-content-center">
            <div className="product-div">
                <div className="product-img">
                    <figure className='product-img-fig'>
                        <img className='product-img-img' src={props.img} alt="" />
                    </figure>
                </div>
                <div className="product-info">
                    <h5 className="product-info-h5">{props.productname}</h5>
                    <div className="price">
                        <h6 className="product-price">{props.price}</h6>
                        <span className="product-red-price">{props.increasedprice}</span>
                    </div>
                </div>

                <div className="quantity-sect">
                    <div className="product-quantity">
                        <Link to={"/products/electronics/"+category+"/"+id} >
                        <button className="productcard-add-to-cart-btn" >viewproduct</button>
                        </Link>
                    </div>
                    <div className="product-quantity">
                    <button className="productcard-add-to-cart-btn" onClick={gotoCart}>Add to cart</button>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Slidercard