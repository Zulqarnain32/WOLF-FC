import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import("./App.css")
const App = () => {
  return (
    <>
    <BrowserRouter>
         <Navbar/> 
      <Routes>
         
         
      </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App
