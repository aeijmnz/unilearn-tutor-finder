import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import '../assets/SignPage.css'
import '../assets/Navbar.css'

import Navbar from './Navbar'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import SignInPage from '../pages/SignInPage'
import SignUpTuteePage from '../pages/SignUpTuteePage'
import SignUpTutorPage from '../pages/SignUpTutorPage'


function Navigator() {
  return (
    <>
    <Navbar/>
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/sign-in" element={<SignInPage/>}/>
          <Route path="/sign-up-tutee" element={<SignUpTuteePage/>}/>
          <Route path="/sign-up-tutor" element={<SignUpTutorPage/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default Navigator