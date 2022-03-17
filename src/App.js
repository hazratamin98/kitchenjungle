import "./App.css"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import Login from "./Components/Login/Login"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      <Hero />
      <Footer />
    </div>
  )
}

export default App
