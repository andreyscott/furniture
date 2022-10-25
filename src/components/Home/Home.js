import React from "react";

// Components
import Hero from "./Hero/Hero";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import Stats from "./Stats";
import NewInStore from  './newInStore/new-in-store'
import OurProducts from "../ourProducts";
import Features from "../Features";
import Newsletter from "../Newsletter";

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
     <NewInStore />
     <FeaturedProducts />
     <OurProducts />
      <Newsletter />
    </>
  );
};

export default Home;
