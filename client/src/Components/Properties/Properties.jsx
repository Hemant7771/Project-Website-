import React from 'react'
// import properties1 from '../../Assets/Properties/freship.png'
// import properties2 from '../../Assets/Properties/support.jpg'
// import properties3 from '../../Assets/Properties/support.jpg'
// import properties4 from '../../Assets/Properties/support.jpg'
import './Properties.css'

const Properties = () => {
  return (
    <>
    <section className="properties px-5">
            <div className="w-100">
                <div className="heading heading-center">
                    <span>
                        BENIFITS
                    </span>
                    <h2>
                        Here's why you can trust we're the real deal.
                    </h2>
                </div>
                <div className="properties-div">
                    <div className="row w-100">
                        <div className="col-lg-3 col-md-6 col-12 pt-lg-0 pt-md-5 p-3">
                            <div className="d-flex-column">
                                <figure className='icons-fig'>
                                <i class='icons bx bxs-ship' ></i>
                                </figure>
                                <span>Free Shiping</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 pt-lg-0 pt-md-5 p-3">
                            <div className="d-flex-column">
                                <figure className='icons-fig'>
                                    <i class='icons bx bx-support' ></i>
                                </figure>
                                <span>24X7 customer support</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 pt-lg-0 pt-md-5 p-3">
                            <div className="d-flex-column">
                                <figure className='icons-fig'>
                                <i class='icons bx bxs-credit-card-alt' ></i>
                                </figure>
                                <span>Secure Payment</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 pt-lg-0 pt-md-5 p-3">
                            <div className="d-flex-column">
                                <figure className='icons-fig'>
                                <i class='icons bx bxs-package' ></i>
                                </figure>
                                <span>Easy Return</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Properties