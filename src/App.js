import "./App.css";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {
  // Login,
  Home,
  // Recipe,
  // SignUp,
  // submitrecipe,
  // Favorite,
  // Contact,
} from "src/pages";

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
        {/* <Route path={"/Login"} exact component={Login} />
        <Route path={"/SignUp"} exact component={SignUp} />
        <Route path={"/Recipe"} exact component={Recipe} />
        <Route path={"/submitrecipe"} exact component={submitrecipe} />
        <Route path={"/Favorite"} component={Favorite} />
        <Route path={"/Contact"} component={Contact} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
