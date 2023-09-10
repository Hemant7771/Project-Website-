import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import './User.css'

const User = () => {

  const { user} = useAuth0();

  const userimage=user.picture

  return (
    <>
    
    <div class="maincontainer">
        <div class="box">
            <img src={userimage} alt=""/>
            <ul>
                <li>{user.name}</li>
                <li>{user.birthdate}</li>
                
            </ul>
        </div>
        <div class="About">
            <ul>
                <h1>about</h1>
            </ul>
            <ul>
                <h3>Name</h3>
                <li>{user.name} </li>
            </ul>
            <ul>
                <h3>Mail</h3>
                <li>{user.email} </li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default User