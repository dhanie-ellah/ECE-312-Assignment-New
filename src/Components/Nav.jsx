import React, { useState } from "react";
import Logo from "../Assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <section>
      {/* DESKTOP NAV */}
      <section className=" flex justify-between items-center md:hidden px-[10rem]">
        <div className=" flex items-center">
          <img src={Logo} alt="" className="w-[30%]" />
          <p className=" font-bold font-[inter]">AVA Medications</p>
        </div>
        <div className=" text-sm text-grey flex items-center gap-[2rem]">
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">Services</a>
          <a href="/">Testimonials</a>
          <Link to="/test" className=" gradient  px-[1rem] py-[0.5rem] rounded-full text-white text-xs">
            Run Test
          </Link>
        </div>
      </section>

      {/* MOBILE NAV */}
      <section className=" hidden md:block md:relative">
        <div className=" flex justify-between items-center px-[2rem]">
          <div className=" w-[20%] z-20">
            <img src={Logo} alt="" className="w-full" />
            {/* <p>AVA Medications</p> */}
          </div>
          <FontAwesomeIcon
            icon={navOpen ? faClose : faBars}
            className={`${navOpen ? "text-white" : "text-black"} text-2xl z-20`}
            onClick={() => {
              setNavOpen(!navOpen);
            }}
          />
        </div>
        <div
          className={`${
            navOpen ? "flex" : "hidden"
          } md:flex-col md:items-center md:justify-center md:gap-14 md:text-2xl md:text-grey bg-black w-screen h-screen fixed top-0`}
        >
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">Services</a>
          <a href="/">Testimonials</a>
          <Link to="/test">Run Test</Link>
        </div>
      </section>
    </section>
  );
};

export default Nav;
