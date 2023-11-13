import React from "react";
import Nav from "../Components/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faSubtract } from "@fortawesome/free-solid-svg-icons";

const CheckHeart = () => {
  return (
    <section className=" bg-light-grey h-screen w-screen">
      <Nav />
      <div className=" w-[70%] rounded-2xl overflow-hidden m-auto bg-white my-[0.5rem] md:w-[95%]">
        <h1 className=" red_bg p-3 text-white font-bold text-center md:text-sm">
          CALCULATE YOUR AVERAGE BLOOD PRESSURE
        </h1>
        <p className=" p-[3rem] py-[1rem] md:p-[1rem]">
          As a general guide: ideal blood pressure is considered to be between
          90/60mmHg and 120/80mmHg. high blood pressure is considered to be
          140/90mmHg or higher. low blood pressure is considered to be below
          90/60mmHg.
        </p>
        <section className=" p-5 flex flex-wrap justify-between gap-5 text-sm md:text-xs md:gap-2 md:p-3">
          <div className=" border-[1.5px] border-black bg-light-grey rounded-md w-[30%] text-center p-2">
            Day 1 Morning
          </div>
          <div className=" border-[1.5px] border-black bg-light-grey rounded-md w-[30%] md:w-[31%] md: px-1 text-center p-2">
            Systolic BP
          </div>
          <div className=" border-[1.5px] border-black bg-light-grey rounded-md w-[30%] md:w-[31%] md: px-1 text-center p-2">
            Diastolic BP
          </div>
          <div className=" border-[1.5px] border-black bg-light-grey rounded-md w-[30%] md:w-[31%] md: px-1 text-center p-2">
            Day 1 Afternoon
          </div>
          <div className=" border-[1.5px] border-black bg-light-grey rounded-md w-[30%] md:w-[31%] md: px-1 text-center p-2">
            Systolic BP
          </div>
          <div className=" border-[1.5px] border-black bg-light-grey rounded-md w-[30%] md:w-[31%] md: px-1 text-center p-2">
            Diastolic BP
          </div>
          <div className=" border-[1.5px] border-black bg-light-grey rounded-md w-[30%] md:w-[31%] md: px-1 text-center p-2">
            Average
          </div>
          <div className=" border-[1.5px] border-black bg-light-grey rounded-md w-[30%] md:w-[31%] md: px-1 text-center p-2"></div>
          <div className=" border-[1.5px] border-black bg-light-grey rounded-md w-[30%] md:w-[31%] md: px-1 text-center p-2"></div>
        </section>

        <section className=" p-5 flex md:flex-wrap justify-between items-center md:p-2 md:gap-2">
          <div className=" text-white text-center bg-grey rounded-md text-sm flex items-center gap-1 p-3 w-[22%] justify-center md:w-[48%]">
            <FontAwesomeIcon
              icon={faAdd}
              className=" text-xs rounded-full bg-white p-1 w-[10px] h-[10px] text-black"
            />{" "}
            Add New Day
          </div>
          <div className=" text-white text-center bg-grey rounded-md text-sm flex items-center gap-1 p-3 w-[22%] justify-center md:w-[48%]">
            <FontAwesomeIcon
              icon={faSubtract}
              className=" text-xs rounded-full bg-white p-1 w-[10px] h-[10px] text-black"
            />{" "}
            Remove New Day
          </div>
          <div className=" text-white text-center bg-grey rounded-md text-sm gap-2 p-3 w-[22%] md:w-[48%]">
            Reset
          </div>
          <div className=" text-white text-center bg-[#60C945] rounded-md text-sm gap-2 p-3 w-[22%] md:w-[48%]">
            Calculate
          </div>
        </section>
      </div>
    </section>
  );
};

export default CheckHeart;
