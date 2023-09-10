import React from 'react'
import { Link } from 'react-router-dom'
import './Contactus.css'
import { useAuth0 } from "@auth0/auth0-react";
import { useState,useEffect } from 'react';
import axios from 'axios';

export default function Contactus() {
  const { isAuthenticated } = useAuth0();
  let firstlogin=()=>{
    alert("Login First to send the message")
  }
  
  
  const [usermsg ,setUsermsg]=useState({
    username:"",email:"",phone:"",subject:"",message:""
  })
  

  

  let name,value;

  const handlechange=(e)=>{
    // console.log(e)
    name = e.target.name;
    value= e.target.value;

    setUsermsg({...usermsg,[name]:value})

  }

  let sendmsg=async(e)=>{
    e.preventDefault();
  
    try{
      
      await axios.post("http://localhost:8000/contact-us",usermsg)
      alert("msg sent")
    }
    catch(e){
      console.log(e)
    }
  }


  return (
    <>
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading">
                CONTACT US
              </div>
              <h2 className="section-h2">
                Let's Collaborate and work together
              </h2>
              <p className="section-description">
                Get in touch to know about buisness opportunities and promotions
              </p>
              <p className="follow-text">
                FOLLOW US ON
              </p>
              <div className="icons">
                <Link to="/" className="facebook-icon sm-icon">
                  <i class='bx bxl-meta'></i>
                </Link>
                <Link to="/" className="twitter-icon sm-icon">
                  <i class='bx bxl-twitter' ></i>
                </Link>
                <Link to="/" className="linkedin-icon sm-icon">
                  <i class='bx bxl-linkedin' ></i>
                </Link>
                <Link to="/" className="instagram-icon sm-icon">
                  <i class='bx bxl-instagram' ></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <form action="POST">
                <div className="row contact-form">
                  <div className="col-lg-6 py-lg-2">
                    <input className='fullname' type="text" placeholder="Name" name="username" onChange={handlechange} value={usermsg.username}/>
                  </div>
                  <div className="col-lg-6 py-lg-2">
                    <input className='mail' type="text" placeholder="E-mail" name="email" onChange={handlechange} value={usermsg.email}/>
                  </div>
                  <div className="col-lg-6 py-lg-2">
                    <input type="text" placeholder="Phone" name="phone" value={usermsg.phone} onChange={handlechange}/>
                  </div>
                  <div className="col-lg-6 py-lg-2">
                    <input type="text" placeholder="Subject" name='subject' value={usermsg.subject} onChange={handlechange}/>
                  </div>
                  <div className="col-lg-12">
                    <textarea name="message" placeholder="Message" id="" cols="30" rows="10" value={usermsg.message} onChange={handlechange}></textarea>
                  </div>
                  {
                    isAuthenticated?(
                  <div className="col-lg-12">
                    <button type='submit' onClick={sendmsg} className="submitbutton mr-0">SEND MESSAGE</button>
                  </div>
                    ):(
                  <div className="col-lg-12">
                    <Link to="" className="submitbutton mr-0" onClick={firstlogin}>SEND MESSAGE</Link>
                  </div>
                    )
                  }
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
