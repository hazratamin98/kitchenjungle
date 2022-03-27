import React from "react";

import { HomeView } from "src/views";
import Hero from "../../components/images/hero.jpg";
import Coache from "../Coache";

const Home = () => {
  return (
    <div>
      <img src={Hero} alt="Herp" className="w-full h-full" />
      <Coache />
      <HomeView />
    </div>
  );
};

export default Home;
