import React, {useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Hero from "./Hero/Hero";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import Stats from "./Stats";
import NewInStore from  './newInStore/new-in-store'
import OurProducts from "../ourProducts";
import Features from "../Features";
import Newsletter from "../Newsletter";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  
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
