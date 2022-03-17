import "./App.css"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import Login from "./Components/Login/Login"
import NewsLetter from "./Components/NewsLetter/NewsLetter"
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <div>
      <Navbar />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default App
