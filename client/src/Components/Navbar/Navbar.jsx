import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/Gada_Electronic.png'
import './Navbar.css'
import { useAuth0 } from "@auth0/auth0-react";
import { AppContext } from '../../Context';

export default function Navbar() {

    const {cartitem}=useContext(AppContext)

    let open_menu = () => {

        let menu = document.getElementById("sidem");
        console.log(menu)
        menu.classList.add("side-menu-open")
    }

    const { loginWithPopup, isAuthenticated, logout } = useAuth0();


    let close_menu = () => {

        document.getElementById("sidem").classList.remove('side-menu-open')
    }



    return (
        <>
            <header className="header-section">
                <div className="menu-section">
                    <div className="container">
                        <div className="top-header">
                            <div className="header-logo">
                                <img src={Logo} alt="logo" />
                            </div>
                            <nav className="navbar d-lg-block d-none">
                                <ul className="nav-list">
                                    <li className="list-items">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="hover1 list-items ">
                                        <Link to="/products/electronics">Electronics</Link>
                                        <ul className="inner-nav-list">
                                            <li className="list-items">
                                            <Link to="/products/electronics/mobiles">Mobiles</Link>
                                            </li>
                                            <li className="list-items">
                                            <Link to="/products/electronics/laptops">Laptops</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="list-items">
                                        <Link to="/about-us">About us</Link>
                                    </li>
                                    <li className="list-items">
                                        <Link to="/contact-us">Contact us</Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className="header-icons">
                                {isAuthenticated ? (
                                    <div className="header-icons">
                                        <div className="h-icons">
                                            <Link to="/user">
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"
                                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z">
                                                    </path>
                                                </svg>
                                            </Link>
                                        </div>
                                        <div className="h-icons">
                                            <Link className='cartlink' to="/cart"> 
                                            <svg id="bag" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"
                                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z">
                                                </path>
                                            </svg>
                                            <div className="cartitem">{cartitem}</div>
                                            </Link>
                                        </div>
                                        <button className='login-btn d-lg-block d-none' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                            Log Out
                                        </button>
                                    </div>
                                ) : (

                                    <button className='login-btn' onClick={() => loginWithPopup()}>Log In</button>
                                )
                                }

                                <button className=" d-lg-none d-inline-block" id="menu-btn" onClick={open_menu}>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                                        height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="side-menu " id="sidem">
                <div className="container">
                    <div className="side-menu-head">

                        <img src={Logo} alt="logo" />
                        <button id="close-btn" onClick={close_menu}>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <ul className="side-menu-list">
                        <li className="side-menu-list-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="side-menu-list-item">
                            <Link to="/products/electronics">Electronics</Link>
                        </li>
                        <li className="side-menu-list-item">
                            <Link to="/about-us">About us</Link>
                        </li>
                        <li className="side-menu-list-item">
                            <Link to="/contact-us">Contact us</Link>
                        </li>
                        <li className="side-menu-list-item">
                            <Link to="/">Clothing</Link>
                        </li>
                        {
                            isAuthenticated ?(

                        <li className="side-menu-list-item">
                            <button className='login-btn ' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                Log Out
                            </button>
                        </li>
                            ):(
                                <li></li>
                            )
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}
