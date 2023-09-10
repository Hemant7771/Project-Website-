import React from 'react'
import Slider from '../../Components/Slider/Slider';
import Properties from '../../Components/Properties/Properties';
import Testimonial from '../../Components/Testimonial/Testimonial';
import Productcardlist from '../../Components/Productcardlist/Productcardlist'

export default function Home() {
  return (
    <>
    <Slider/>
    <Productcardlist heading="Tending Products"/>
    <Properties/>
    <Testimonial/>
    </>
  )
}
