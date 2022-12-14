// React
import React from "react";
// React Router
import { Link } from "react-router-dom";
// Auth0
import { useAuth0 } from "@auth0/auth0-react";
// CSS
import styles from "./Hero.module.css";
// Components
import Loading from "../../Shared/Loading/Loading";
import HeroCarousel from "../../HeroCarousel/index";

const Hero = () => {
  const { user, isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className={`${styles.wrapper} section-center`} >
      <article className="content mb-8 md:mb-0">
        {user && (
          <h4>
            Welcome <span>{user?.nickname}</span> for
          </h4>
        )}
        <h1>
          design your
          <br />
          comfort zone
        </h1>
        <p>
          Fill your home with furniture that brings you comfort as soon as you
          walk in the door. From cozy sectionals that work well for big
          get-togethers to beds that invite you for a good night's sleep after a
          long day, when you want to add modern, contemporary flair to your
          living space, Sam Standard Furniture has a wealth of items to enliven your space.
        </p>
        <Link to="/products"
        data-aos="fade-up-right"
         className={`btn  ${styles["hero-btn"]}`}>
          shop now
        </Link>
      </article>
    
      <HeroCarousel />
      
    </section>
  );
};

export default Hero;
