import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './Testimonial.css'
import Sliderimg1 from './t1.jpg'
import Sliderimg2 from './t2.jpg'
import Sliderimg3 from './t3.jpg'
import Sliderimg4 from './t4.jpg'
import Sliderimg5 from './t5.jpg'
import Sliderimg6 from './t6.jpg'
import Sliderimg7 from './t7.jpg'
import Sliderimg8 from './t8.jpg'


const Testimonial = () => {
    return (
        <section className='px-5'>
        <div className="w-100">
        <Splide  aria-label="My Favorite Images" options={ {
            type   : 'loop',
            autoplay:false,
            // padding: '5rem',
            gap:"1rem",
            arrows:true,
            height:500,
            perPage:4,
            perMove:3,
            breakpoints:{
                1300:{
                    perPage:3
                },
                992:{
                    perPage:2
                },
                654:{
                    perPage:1
                },
            }
          }}>
            <SplideSlide >
                
            <div class="card-1 mx-auto mx-auto">
                        <div class="image-content">
                            <span class="overlay-1"></span>
                            <div class="card-image">
                                <img src={Sliderimg1} alt=""  class="card-img"/>
                            </div>
                        </div>

                        <div class="card-content">
                            <h2 class="name">Tabish</h2>
                            <p class="description">The <b> Gada shop</b> website is best for shopping 
                                it provide product at very reasonable rate and offer to the customers. 
                                It best service is pay later facilities.
                                   it helpful in emergency and 
                                  fast delivery other than other e commerce site.
                            </p>
                            <button class="button">View more</button>
                        </div>
                    </div>
            </SplideSlide>
            <SplideSlide>
                
            <div class="card-1 mx-auto">
                        <div class="image-content">
                            <span class="overlay-1"></span>
                            <div class="card-image">
                                <img src={Sliderimg2} alt=""  class="card-img"/>
                            </div>
                        </div>

                        <div class="card-content">
                            <h2 class="name">Hemant</h2>
                            <p class="description">The <b> Gada shop</b> website is best for shopping 
                                it provide product at very reasonable rate and offer to the customers. 
                                It best service is pay later facilities.
                                   it helpful in emergency and 
                                  fast delivery other than other e commerce site.
                            </p>
                            <button class="button">View more</button>
                        </div>
                    </div>
            </SplideSlide>
            <SplideSlide>
                
            <div class="card-1 mx-auto">
                        <div class="image-content">
                            <span class="overlay-1"></span>
                            <div class="card-image">
                                <img src={Sliderimg3} alt=""  class="card-img"/>
                            </div>
                        </div>

                        <div class="card-content">
                            <h2 class="name">Yesmeena</h2>
                            <p class="description">The <b> Gada shop</b> website is best for shopping 
                                it provide product at very reasonable rate and offer to the customers. 
                                It best service is pay later facilities.
                                   it helpful in emergency and 
                                  fast delivery other than other e commerce site.
                            </p>
                            <button class="button">View more</button>
                        </div>
                    </div>
            </SplideSlide>
            <SplideSlide>
                
            <div class="card-1 mx-auto">
                        <div class="image-content">
                            <span class="overlay-1"></span>
                            <div class="card-image">
                                <img src={Sliderimg4} alt=""  class="card-img"/>
                            </div>
                        </div>

                        <div class="card-content">
                            <h2 class="name">Avani</h2>
                            <p class="description">The <b> Gada shop</b> website is best for shopping 
                                it provide product at very reasonable rate and offer to the customers. 
                                It best service is pay later facilities.
                                   it helpful in emergency and 
                                  fast delivery other than other e commerce site.
                            </p>
                            <button class="button">View more</button>
                        </div>
                    </div>
            </SplideSlide>
        </Splide>
        </div>
        </section>

    )
}

export default Testimonial