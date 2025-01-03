import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Scorers from './components/Scorers'
import("./App.css")
const App = () => {
  return (
    <>
    <BrowserRouter>
         <Navbar/> 
      <Routes>
         <Route path = "/scorers" element = {<Scorers/>}/>
         
      </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App
