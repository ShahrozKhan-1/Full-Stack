import React, { useState } from 'react'
import api from "./api"
import {useNavigate} from "react-router-dom"


function Login() {

  const[username, setusername] = useState('')
  const[password, setpassword] = useState('')
  const navigate = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault()
    // console.log(username, password)

    try {
      const response = await api.post('api/token/', {username, password})
      // console.log(response)
      localStorage.setItem('access_token', response.data.access)
      localStorage.setItem('refresh_token', response.data.refresh);

      navigate("/");

    } catch (error) {
      alert(error)
    }

  }
  return (

    <div>
      <form action="" onSubmit={handleSubmit}>

        <h1>Login</h1>

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
        <button type='submit'>Login</button>

      </form>
    </div>
  )
}

export default Login
