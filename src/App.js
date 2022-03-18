import "./App.css"
import React, { useEffect } from "react"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import Login from "./Components/Login/Login"

import NewsLetter from "./Components/NewsLetter/NewsLetter"
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  useEffect(() => {
    document.title = "Kitchen Jungle"
  }, [])
  return (
    <div>
      <Navbar />
      <Login />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default App
