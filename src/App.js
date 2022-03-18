import "./App.css";
import React, { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Recipe from "./Pages/Recipe/Recipe";
import SignUp from "./Pages/SignUp/SignUp";

import NewsLetter from "./Components/NewsLetter/NewsLetter";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    document.title = "Kitchen Jungle";
  }, []);
  return (
    <Router>
      <Navbar />
      <Switch>
        {/* <NewsLetter /> */}
        <Route path={"/"} exact component={<Home />} />
        <Route path={"/Login"} exact component={Login} />
        <Route path={"/SignUp"} exact component={SignUp} />
        <Route path={"/Recipe"} exact component={Recipe} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
