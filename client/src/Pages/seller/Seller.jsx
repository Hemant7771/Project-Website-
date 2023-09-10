import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './form.css'

const Form = () => {

    const [product, setProduct] = useState({
        imgurl: "",
        productname: "",
        ratings: "",
        price: "",
        increasedprice: "",
        category: "",
        desc:"",
        quantity: "",
        brand:"",
        ram:"",
        storage:"",
        frontcamera:"",
        backcamera:"",
        battery:"",
        processor:"",
        display:""
    });

    const handleChange = (e) => {
        e.preventDefault();

        setProduct({ ...product, [e.target.name]: e.target.value });
    }


    const send = (e) => {
        e.preventDefault();

        try {
            axios.post("http://localhost:8000/takedata", product);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        <div className='form-container'>
            <form method="post" onSubmit={send}>
                <div>
                    <label htmlFor="imgUrl">Image URL :</label>
                    <input type="text" name='imgurl' value={product.imgurl} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="name">productname :</label>
                    <input type="text" name='productname' value={product.productname} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="name">ratings :</label>
                    <input type="text" name='ratings' value={product.ratings} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="rating">price :</label>
                    <input type="text" name='price' value={product.price} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="desc">increasedprice :</label>
                    <input type="text" name='increasedprice' value={product.increasedprice} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="category">Category :</label>
                    <input type="text" name='category' value={product.category} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="quantity">desc :</label>
                    <input type="text" name='desc' value={product.desc} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="quantity">quantity :</label>
                    <input type="text" name='quantity' value={product.quantity} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="brand">brand :</label>
                    <input type="text" name='brand' value={product.brand} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="ram">ram :</label>
                    <input type="text" name='ram' value={product.ram} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="frontcamera">frontcamera :</label>
                    <input type="text" name='frontcamera' value={product.frontcamera} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="backcamera">backcamera :</label>
                    <input type="text" name='backcamera' value={product.backcamera} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="battery">battery :</label>
                    <input type="text" name='battery' value={product.battery} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="processor">processor :</label>
                    <input type="text" name='processor' value={product.processor} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="display">display :</label>
                    <input type="text" name='display' value={product.display} onChange={handleChange} />
                </div>


                <input type="submit" value="submit" />
            </form>
        </div>
        </>
    )
}

export default Form