import React from "react";
import HeroImg from "../Assets/heroImg.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className=" flex px-[10rem] justify-between items-center md:flex-col-reverse md:px-[2rem] py-[2.5rem]">
      <div className=" w-[45%] flex flex-col gap-[1em] md:w-full">
        <h1 className=" text-4xl font-bold md:text-[32px] md:text-center">
          We Are Ready To Help & Take Care Of Your Vitality
        </h1>
        <p className=" text-sm md:text-center">
          Enjoy Your Life — We'll Be Here to Save it! We care for you — inside
          and out!
        </p>
        <Link to="/test" className=" text-sm text-white px-[2.5rem] py-[0.75rem] rounded-md gradient w-fit md:m-auto">Take a test</Link>
      </div>
      <div className=" w-[55%] md:w-full">
        <img src={HeroImg} alt="" className=" w-full" />
      </div>
    </section>
  );
};

export default Hero;
