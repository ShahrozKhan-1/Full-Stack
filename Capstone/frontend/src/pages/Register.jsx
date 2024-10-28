import React from 'react'
import { useState } from 'react'
import api from "./api"
import {useNavigate} from "react-router-dom"

function Register() {


    const[username, setusername] = useState('')
    const[password, setpassword] = useState('')
    const navigate = useNavigate();
  
    const handleSubmit = async(event) => {
      event.preventDefault()
  
      try {
        const response = await api.post('api/user/register/', {username, password})
        navigate("/login");
  
      } catch (error) {
        alert(error)
      }
  
    }
  

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>

        <h1>Rgister</h1>

        <h3>Username</h3>
        <input type="text" 
          value={username} 
          placeholder='Please enter your username'
          onChange={(e) => {setusername(e.target.value)}}
        />
        
        <h3>Password</h3>
        <input type="password" 
          value={password} 
          placeholder='Please enter your password'
          onChange={(e) => {setpassword(e.target.value)}}
        />
        <br />
        <br />
        <br />
        <button type='submit'>Register</button>

      </form>
    </div>
  )
}

export default Register
