import "./App.css"
import React, { useEffect } from "react"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import Login from "./Pages/Login/Login"

import SignUp from "./Pages/SignUp/SignUp"

import NewsLetter from "./Components/NewsLetter/NewsLetter"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  useEffect(() => {
    document.title = "Kitchen Jungle"
  }, [])
  return (
    <div>
      <Navbar />
      <SignUp />
      <Login />

      <NewsLetter />
      <Footer />
    </div>
  )
}

export default App
