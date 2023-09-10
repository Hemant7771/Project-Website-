import React from 'react'
import Sliderimg1 from '../Slider/gada-banner.png'
import './Slider.css'

const Slider = () => {
    return (
        <>
            <figure className='banner-figure'>

                <img className='banner-img' src={Sliderimg1} alt="bannerimg 1" />
            </figure>
        </>


    )
}

export default Slider