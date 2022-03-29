import React from "react";
import HeroImg from "../../components/images/hero.jpg";

const Hero = () => {
  return (
    <div className="relative text-center ">
      {/* <div className="absolute">
        <h1 className="">hero</h1>
        <div className="flex items-center justify-center">
          <span className="">
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. TEMPORE,
            NOSTRUM.
          </span>
          <button className="bg-red-800 rounded border py-2 px-2   my-20">
            SUBMIT RECIPE
          </button>
        </div>
      </div> */}

      <img className="w-full h-auto bg-no-repeat " src={HeroImg} />
    </div>
  );
};

export default Hero;
