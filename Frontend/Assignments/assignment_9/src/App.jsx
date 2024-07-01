import { useState } from 'react'
import NewTv from './components/NewTv/NewTv'
import CarInsurance from './components/CarInsurance/CarInsurance'
import NewDesk from './components/NewDesk/NewDesk'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NewTv />
    <CarInsurance />
    <NewDesk />
    </>
  )
}

export default App
