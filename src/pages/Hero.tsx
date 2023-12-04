import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-r from-[#FAACA8] to-[#DDD6F3]">
      <h1 className="relative z-10 block my-auto mt-auto ml-10 text-3xl font-bold text-white top-1/4 left-[10%] md:text-7xl lg:text-8xl">
        WON YEONG EUN
        <br />
        FRONTEND
        <br />
        PORTFOLIO
      </h1>
      <div className="w-[150vw] animate-flow absolute top-1/2">
        <div className="flex items-center overflow-hidden rotate-[15deg] h-[80vh] w-[150vw]">
          <div className="w-full h-full bg-cover bg-hero-pattern"></div>
          {/* <div className="w-full h-full bg-cover bg-hero-pattern"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
