import React from "react";

import { HomeView } from "src/views";
import Hero from "../Hero";
import Coache from "../Coache";
import Weekly from "../Weekly";

const Home = () => {
  return (
    <div>
      <Hero />
      <Coache />
      <Weekly />
      <HomeView />
    </div>
  );
};

export default Home;
