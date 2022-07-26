import React from "react";
import "../../App.css";
import Hero from "../hero/Hero.component";
import Cards from "../cards/Cards.component";
import Map from "../map/Map.component";

function Home(){
  return (
    <>
      <Hero />
      <Cards/>
      <Map/>
    </>
  );
};

export default Home;
