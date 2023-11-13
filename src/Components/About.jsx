import React from "react";
import AboutImg1 from "../Assets/about-1.png";
import AboutImg2 from "../Assets/about-2.png";
import AboutImg3 from "../Assets/about-3.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className=" flex items-center justify-between px-[10rem] py-5 md:flex-col md:px-[1rem] md:py-2 md:gap-2">
      {/* IMAGES */}
      <div className=" w-[45%] flex flex-col gap-2 md:w-full">
        {/* TOP IMAGES */}
        <div className=" flex gap-2 w-full">
          <div>
            {" "}
            <img src={AboutImg1} alt="" className=" w-full" />
          </div>
          <div>
            {" "}
            <img src={AboutImg2} alt="" className=" w-full" />
          </div>
        </div>
        {/* BOTTOM IMAGES */}
        <div className=" w-full">
          {" "}
          <img src={AboutImg3} alt="" className=" w-full" />
        </div>
      </div>

      {/* TEXT */}
      <div className=" w-[50%] flex flex-col gap-5 md:w-full md:gap-1">
        <b className=" md:text-center md:text-xs">ABOUT US</b>
        <h1 className=" text-4xl font-bold md:text-xl md:text-center">
          We Have 15 Years Of Experience In Health Care Services
        </h1>
        <p className=" text-sm md:text-center">
          We put users first when creating and transforming our content. We take
          an agile, iterative approach, starting with identifying the user
          needs. We test our ideas with users and use the feedback we receive to
          learn and improve.
        </p>
        <Link to="/test" className=" text-sm text-white px-[2.5rem] py-[0.75rem] rounded-md gradient w-fit md:m-auto">
          Take a Test
        </Link>
      </div>
    </section>
  );
};

export default About;
