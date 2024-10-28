import React, { useEffect } from 'react'
import api from './api'

function HomePage() {

  useEffect(()=>{
    getTodo()

  },[])

  async function getTodo(){
    const res = await api.get('api/user/todo/')
    console.log(res.data)
  }
  

  return (
    <div>
      home page
    </div>
  )
}

export default HomePage;