import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage"
import Login from "./pages/Login"
import Register from "./pages/Register"
import NotFound from "./pages/NotFound"
import ProtectedRoute from './components/ProtectedRoute'



function Logout(){
  return (
    <div>
      {localStorage.clear()}
      <Navigate to='/login' />
    </div>
  )
}


function App() {

  return (
    <>
      <BrowserRouter>

      Navbar
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

        <Routes>

          <Route path='/' element = {
            <ProtectedRoute>
            <HomePage/>
            </ProtectedRoute>
        } />
          <Route path='/login' element = {<Login/>} />
          <Route path='/register' element = {<Register/>} />
          <Route path='/*' element = {<NotFound/>} />
          <Route path='/logout' element = {<Logout/>} />
        </Routes>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        Footer
      </BrowserRouter>
    </>
  )
}

export default App
