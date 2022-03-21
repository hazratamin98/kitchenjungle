import "./App.css"
import React, { useEffect } from "react"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import {
  Login,
  Home,
  Recipe,
  SignUp,
  SubmitRecipe,
  Favorites,
  Contact,
} from "src/pages"

// import NewsLetter from "./Components/NewsLetter/NewsLetter"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  useEffect(() => {
    document.title = "Kitchen Jungle"
  }, [])
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/Recipe"} exact component={Recipe} />
        <Route path={"/Login"} exact component={Login} />
        <Route path={"/SignUp"} exact component={SignUp} />
        <Route path={"/submitrecipe"} exact component={SubmitRecipe} />
        <Route path={"/Favorite"} component={Favorites} />
        <Route path={"/Contact"} component={Contact} />
      </Switch>

      <Footer />
    </Router>
  )
}

export default App
