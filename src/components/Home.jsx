import React, { useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import hand from "../assets/splash/hand.gif";
import pk from "../assets/pk.gif";
import { useThemeContext } from "../context/ThemeContextProvider";

export default function Home() {
  const { isLightTheme, light, dark } = useThemeContext();
  const theme = isLightTheme ? light : dark;

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="3000"
      name="home"
      className={`w-full pt-32 mb-32 md:mb-0 md:min-h-screen ${theme.bg}`}
    >
      <div
        className={`max-w-[1000px] px-8 mx-auto flex flex-col justify-center ${
          !isLightTheme ? "text-[#FFFDD0]" : "text-gray-800"
        }`}
      >
        <p className="text-pink-400 text-2xl font-semibold">
          Hola! i am <img className="w-14 inline" src={hand} alt="hand pic" />{" "}
        </p>
        <h1 className="text-3xl sm:text-7xl">Hamza Tarique</h1>
        <h2
          className={`${
            !isLightTheme ? "text-gray-300" : "text-gray-500"
          } text-2xl sm:text-4xl `}
        >
          I'm Full Stack Web Developer from 🇵🇰
          <img src={pk} alt="pk" className="inline w-12 h-12 ml-2" />
        </h2>
        <p
          className={`${
            !isLightTheme ? "text-gray-300" : "text-gray-500"
          } py-4 max-w-[300px] font-medium`}
        >
          I can build website using html,css,bootstrap,tailwind css and react js
          for frontend.I also know about flutter a little bit have a look on my
          github to view my projects built on flutter and other technologies,and
          for backend i use node js (custom backend)
        </p>
        <div className="flex sm:flex-row justify-start items-center flex-col space-x-2 space-y-2 sm:space-y-0 ">
          <Link to="work" smooth={true} duration={500} offset={70}>
            <button
              className={`flex group justify-start  items-center px-6 py-3 border-2 ${
                !isLightTheme ? "border-white" : "border-gray-500"
              }`}
            >
              View work
              <span className="group-hover:rotate-90 duration-300 mx-3">
                {<HiArrowNarrowRight />}
              </span>
            </button>
          </Link>
          <button
            className={`button border-2  ${
              !isLightTheme ? "border-white" : "border-gray-500"
            }`}
          >
            <a
              className="button"
              href="https://drive.google.com/file/d/1sMEQM0pJ1XVDDw4a3ZrrcEY6T1V_yvKF/view?usp=share_link"
              download
            >
              Download Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
