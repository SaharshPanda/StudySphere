import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Login from './screens/loginScreen/login.jsx'
import Register from './screens/registerScreen/register.jsx'
import Home from './screens/homeScreen/home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route index path="/" element = {<Login/>}/>
      {/* <Route path= "/login" element= {<Login/>} /> */}
      <Route path= "/register" element= {<Register/>} />
      <Route path= "/home/*" element= {<Home/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
