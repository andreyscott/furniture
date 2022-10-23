// React
import React from "react";
// Components
import Hero from "./Hero/Hero";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import Services from "./Services/Services";
import Contact from "./Contact/Contact";
const Home = () => {
  return (
    <main>
      <Hero />
      <div className="bg-gray-300 text-3xl underline text-green-500">
        hello there 
        </div>
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default Home;
