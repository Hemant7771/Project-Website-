import React from 'react'
import Logo from '../../Assets/Gada_Electronic.png'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer-upper-div">
                        <div className=" my-lg-4 my-2">
                            <div className=" d-flex ">
                                <div className="footer-contact-wrap">
                                    <svg className="footer-icon mr-0" stroke="currentColor" fill="currentColor" stroke-width="0"
                                        viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z">
                                        </path>
                                    </svg>
                                    <span className="footer-contact">004-43171562</span>
                                </div>
                                <div>
                                    <svg className="footer-icon" stroke="currentColor" fill="none" stroke-width="2"
                                        viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em"
                                        width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                                        </path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                    <span className="footer-contact">info@oyefish.in</span>
                                </div>
                            </div>
                        </div>
                        <div className="footer-social-medial my-lg-4 my-2 ">
                            <span className="footer-contact">Follow us on:</span>
                            <div className="sm-icon-wrap">
                                <Link to="" className="footer-sm-icon">
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                        stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                    </svg>
                                </Link>
                                <Link to="" className="footer-sm-icon">
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                        stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="line-footer"></div>
                <div className="container">
                    <div className="main-footer row mt-lg-5 m-3">
                        <div className="col-lg-3">
                            <h6 className="list-heading">Categories</h6>
                            <ul className="footer-list">
                                <li className="footer-list-items"> <Link className="footer-list-link" to="/"> Laptop</Link></li>
                                <li className="footer-list-items"> <Link className="footer-list-link" to="/"> Mobile</Link></li>
                                <li className="footer-list-items"> <Link className="footer-list-link" to="/"> Tablet</Link></li>
                                <li className="footer-list-items"> <Link className="footer-list-link" to="/"> Computer</Link></li>
                                <li className="footer-list-items"> <Link className="footer-list-link" to="/"> headphones</Link></li>
                                <li className="footer-list-items"> <Link className="footer-list-link" to="/"> Monitor</Link></li>
                                <li className="footer-list-items"> <Link className="footer-list-link" to="/"> Veiw All Products</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-2">
                            <h6 className="list-heading">Useful Links</h6>
                            <ul className="footer-list">
                                <li className="footer-list-items">
                                    <Link className="footer-list-link" to="/"> Why OyeFish
                                    </Link>
                                </li>
                                <li className="footer-list-items"> <Link className="footer-list-link" to="/"> FAQs

                                </Link></li>
                                <li className="footer-list-items"> <Link className="footer-list-link" to="/"> Contact Us

                                </Link></li>
                                <li className="footer-list-items"> <Link className="footer-list-link" to="/"> Privacy Policy

                                </Link></li>
                                <li className="footer-list-items"> <Link className="footer-list-link" to="/"> Terms and Condition

                                </Link></li>
                                <li className="footer-list-items"> <Link className="footer-list-link" to="/"> Cancellation Policy

                                </Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-2">
                            <h6 className="list-heading">Areas We Serve</h6>
                            <ul className="footer-list">
                                <li className="footer-list-items"> <Link className="footer-list-link" to="/"> Broadway

                                </Link></li>
                                <li className="footer-list-items"> <Link className="footer-list-link" to="/"> Egmore

                                </Link></li>
                                <li className="footer-list-items"> <Link className="footer-list-link" to="/"> Nungambakkam

                                </Link></li>
                                <li className="footer-list-items"> <Link className="footer-list-link" to="/"> Triplicane

                                </Link></li>
                                <li className="footer-list-items"> <Link className="footer-list-link" to="/"> Velacheary

                                </Link></li>
                                <li className="footer-list-items"> <Link className="footer-list-link" to="/"> Park Town

                                </Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-2">
                            <h6 className="list-heading">Top Cities</h6>
                            <ul className="footer-list">
                                <li className="footer-list-items"><Link className="footer-list-link" to="/"> Royapuram

                                </Link></li>
                                <li className="footer-list-items"> <Link className="footer-list-link" to="/"> Tondiarpet

                                </Link></li>
                                <li className="footer-list-items"> <Link className="footer-list-link" to="/"> Chennai GPO

                                </Link></li>
                                <li className="footer-list-items"> <Link className="footer-list-link" to="/"> Mylapore

                                </Link></li>
                                <li className="footer-list-items"> <Link className="footer-list-link" to="/"> Santhome

                                </Link></li>
                                <li className="footer-list-items"> <Link className="footer-list-link" to="/"> Adyr

                                </Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <figure className="footer-logo">
                                <img src={Logo} alt="" />
                            </figure>
                            <span className="footer-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
                                nihil rem ipsum deleniti minima provident ut doloremque adipisci quae perferendis?</span>
                            <div className="read-more">
                                <Link to="/">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="last-footer">
                    <span>©Copyright 2023 Gada Electronics.</span>
                    <span> All right reserved.</span>
                    <span>Designed by Tabish Khan</span>
                </div>
            </footer>
        </>
    )
}

export default Footer