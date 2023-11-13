import React from "react";
import Nav from "../Components/Nav";
import Heart from "../Assets/heart.png";
import Sugar from "../Assets/sugar.png";
import { Link } from "react-router-dom";

const Test = () => {
  return (
    <div>
      <Nav />
      {/* TEXT */}
      <p className=" text-center pt-[5rem] pb-[1rem] font-bold">WHAT DO YOU WISH TO TEST FOR?</p>
      {/* CHOICE OF TEST */}
      <div className=" px-[15rem] md:px-[3rem] ">
        {/* TEST OPTIONS */}
        <div className=" flex items-center rounded-3xl overflow-hidden md:flex-col">
          {/* HEART */}
          <Link to="/checkHeart" className=" w-[50%] md:w-full red_bg">
            <img src={Heart} alt="" className=" w-full" />
          </Link>
          {/* BLOOD */}
          <Link
            to="/checkSugar"
            className=" w-[50%] md:w-full purple_bg py-[8px]"
          >
            <img src={Sugar} alt="" className=" w-full" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Test;
