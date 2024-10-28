import React from 'react'
import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import {jwtDecode} from 'jwt-decode'
import api from '../pages/api'


function ProtectedRoute({children}) {

  const[authorize, setAuthorize] = useState(null)

  useEffect(() => {
    auth()
  }, []);

  if(authorize == null){
      return <div>Loading.......</div>
  }

  
  function auth(){
    const accessToken = localStorage.getItem('access_token');
    
    if(!accessToken){
      setAuthorize(false);
      return ;
    }

    const {exp} = jwtDecode(accessToken)

    const todayDate = new Date().getTime();

    try {
      if (exp * 1000 > todayDate){
        setAuthorize(true);
        return ;
      }
      else{
        refreshAuth();
      }
    } 
    catch (error) {
      // console.log(error);
      setAuthorize(false);
      return  
    }

  }

  const refreshAuth = () => {
    const refreshToken = localStorage.getItem('refresh_token');
    if(!refreshToken){
      setAuthorize(false);
      return ;
    }

    try {
      const access = api.post('api/token/refresh/', {
        refresh: refreshToken
      })
      if(access.status == 200){
        // check access
        // console.log(access)
        localStorage.setItem('access_token', access.data.access)
        setAuthorize(true);
      }
    } catch (error) {
      localStorage.clear();
      setAuthorize(false);
    }
  }

  return (
    <>

    {/* check if access token is expired or not */}
    {/* check if we have access token and authorize */}
    {/* if expired we will ask for a new access token using refresh token */}
    {/* if refresh is also expired we will divert the user to login page */}
 
        {authorize ? children : <Navigate to={"/login"}/>}    
    </>
  )
}

export default ProtectedRoute
