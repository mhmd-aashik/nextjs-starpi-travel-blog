/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = ({ imgSrc, headline, theme = "turquoise" }) => {
  return (
    <section className="hero">
      <div className="hero__background">
      <img
          className="img"
          src={imgSrc || `/assets/hero-home.png`}
          alt="hero"         
        />
      </div>
      <div className={`hero__headline       hero__headline--${theme}`}>
        {headline}
      </div>
      <button className={`btn btn--medium btn--${theme}`}>
        <Link href="/events">Book Now</Link>
      </button>
      <Image src="/assets/logo.svg" alt="logo" width={120} height={186} className={`hero__logo hero__logo--${theme}`} />
    </section>
  );
};

export default HeroSection;
