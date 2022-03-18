import "./App.css";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe/Recipe";
import SignUp from "./pages/SignUp/SignUp";
import SubmitRecipe from "./pages/Submit_Recipe/Submit_Recipe";
import Favorite from "./pages/Favorites/Favorite";
import Contact from "./pages/Contact/Contact";

// import NewsLetter from "./Components/NewsLetter/NewsLetter"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    document.title = "Kitchen Jungle";
  }, []);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/Login"} exact component={Login} />
        <Route path={"/SignUp"} exact component={SignUp} />
        <Route path={"/Recipe"} exact component={Recipe} />
        <Route path={"/SubmitRecipe"} exact component={SubmitRecipe} />
        <Route path={"/Favorite"} component={Favorite} />
        <Route path={"/Contact"} component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
