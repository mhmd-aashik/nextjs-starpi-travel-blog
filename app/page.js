import HeroSection from "@/components/HeroSection";
import React from "react";

const page = () => {
  const headline = (
    <>
      <h1>barrel</h1>
      <h1>your</h1>
      <h1>happiness</h1>
    </>
  );
  return (
    <main>
      <HeroSection headline={headline}/>
    </main>
  );
};

export default page;
