import React from 'react'
import Productcard from '../../Components/Productcardlist/Productcard'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Mobile = () => {
    const [productlist, setproductlist] = useState([])
    const { category} = useParams();
    useEffect(
        () => {
            getProducts()
        },[category]
    )
    let getProducts = () => {
        axios.get("http://localhost:8000/products/electronics/"+category)
            .then(async (res) => {
                await setproductlist(res.data);
            })
    }
    return (
        <>
            <div className="p-5">
                <h1>{category.toUpperCase()}</h1>
                <div className="row">
                    {
                        productlist.map((product) => {
                            return (
                                <Productcard key={product._id} id={product._id} category={product.category} img={product.imgurl} productname={product.productname} price={product.price} increasedprice={product.increasedprice} brand={product.brand} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Mobile