import React, { useState, useEffect } from 'react'
import Productcard from './Slidercard'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/splide/dist/css/themes/splide-default.min.css'; // Corrected import path
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
import './Productcardlist.css'

const Productcardlist = (props) => {
    const [productlist, setproductlist] = useState([])
    useEffect(
        () => {
            getProducts()
        }, []
    )
    let getProducts = () => {
        axios.get("http://localhost:8000/products/electronics/mobiles")
            .then(async (res) => {
                await setproductlist(res.data);
            })
    }
    return (

        <>
        <div className='px-5'>
            <div className="section-head">
                <div className="section-head-wrap">
                    <div className="shopby-text">
                        For You
                    </div>
                    <div className="categories-text m-0 pb-2 pt-0">
                        {props.heading}
                    </div>
                </div>
                <div className="section-head-btn">
                    <Link to='/products/electronics/mobiles'>Veiw all</Link>
                </div>
            </div>
            <Splide options={{
                type: "loop",
                width: "100%",
                gap: '1rem',
                autoplay: false,
                perPage: 4,
                breakpoints: {
                    992: {
                        perPage: 3, // 3 slides per page at or above 1200px width
                    },
                    654: {
                        perPage: 2, // 1 slide per page at or above 500px width
                    },
                    500: {
                        perPage: 1, // 1 slide per page at or above 500px width
                    }
                }
            }}>

                {
                    productlist.map((product, index) => {
                        if (index <= 4) {
                            return (
                                <SplideSlide>
                                    <Productcard id={product._id} category={product.category} img={product.imgurl} productname={product.productname} price={product.price} increasedprice={product.increasedprice} brand={product.brand} />
                                </SplideSlide>
                            )
                        }
                        else {
                            return ""
                        }
                    })
                }
            </Splide>
        </div>
        </>


    )
}

export default Productcardlist