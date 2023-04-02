import css from "../assets/css.png";
import flutter from "../assets/flutter.png";
import react from "../assets/react.png";
import git from "../assets/git.png";
import html from "../assets/html.png";
import js from "../assets/javascript.png";
import mongo from "../assets/mongo.png";
import node from "../assets/node.png";
import mui from "../assets/mui.png";
import chakraUi from "../assets/chakraUi.png";
import nextjs from "../assets/nextjs.png";
import { useEffect } from "react";
import { useThemeContext } from "../context/ThemeContextProvider";

export default function Skill() {
  const { isLightTheme, light, dark } = useThemeContext();
  const theme = isLightTheme ? light : dark;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div name="skills" className={`${theme.bg} min-h-screen`}>
      <div className={`max-w-[1000px] mx-auto  ${theme.bg} ${theme.syntax}`}>
        <div className="sm:text-center ml-10 mb-10 ">
          <p className="text-3xl border-b-4 border-pink-600 inline-block mb-3 font-bold">
            Skill
          </p>
          <p className="font-semibold">
            These are the technologies I've worked with
          </p>
        </div>
        <div className=" grid grid-cols-2 sm:grid-cols-4">
          <div data-aos="flip-left" data-aos-duration="3000">
            <div className="flex flex-col items-center shadow-lg  shadow-gray-700 hover:scale-110 p-5 m-3">
              <img src={html} alt="html image" className="w-16 sm:w-20 " />
              <p>Html</p>
            </div>
          </div>
          <div data-aos="flip-left" data-aos-duration="3000">
            <div className="flex flex-col items-center shadow-lg  shadow-gray-700 hover:scale-110 p-5 m-3">
              <img src={css} alt="css image" className="w-16 sm:w-20 " />
              <p>Css</p>
            </div>
          </div>
          <div data-aos="flip-left" data-aos-duration="3000">
            <div className="flex flex-col items-center shadow-lg  shadow-gray-700 hover:scale-110 p-5 m-3">
              <img src={js} alt="js image" className="w-16 sm:w-20 " />
              <p>Javascript</p>
            </div>
          </div>
          <div data-aos="flip-left" data-aos-duration="3000">
            <div className="flex flex-col items-center shadow-lg  shadow-gray-700 hover:scale-110 p-5 m-3">
              <img src={node} alt="node image" className="w-16 sm:w-20 " />
              <p>Node Js</p>
            </div>
          </div>

          <div data-aos="flip-right" data-aos-duration="3000">
            <div className="flex flex-col items-center shadow-lg  shadow-gray-700 hover:scale-110 p-5 m-3">
              <img src={mongo} alt="mongo image" className="w-16 sm:w-20 " />
              <p>mongoDb</p>
            </div>
          </div>
          <div data-aos="flip-right" data-aos-duration="3000">
            <div className="flex flex-col items-center shadow-lg  shadow-gray-700 hover:scale-110 p-5 m-3">
              <img src={react} alt="react image" className="w-16 sm:w-20 " />
              <p>React</p>
            </div>
          </div>
          <div data-aos="flip-right" data-aos-duration="3000">
            <div className="flex flex-col items-center shadow-lg  shadow-gray-700 hover:scale-110 p-5 m-3">
              <img src={flutter} alt="flutter image" className="w-16 sm:w-20" />
              <p>Flutter</p>
            </div>
          </div>
          <div data-aos="flip-right" data-aos-duration="3000">
            <div className="flex flex-col items-center shadow-lg  shadow-gray-700 hover:scale-110 p-5 m-3">
              <img src={git} alt="git image" className="w-16 sm:w-20" />
              <p>Git</p>
            </div>
          </div>
          <div data-aos="flip-right" data-aos-duration="3000">
            <div className="flex flex-col items-center shadow-lg  shadow-gray-700 hover:scale-110 p-5 m-3">
              <img
                src={nextjs}
                alt="nextjs image"
                className="w-16 h-14 sm:w-20 sm:h-20"
              />
              <p>NextJS</p>
            </div>
          </div>
          <div data-aos="flip-right" data-aos-duration="3000">
            <div className="flex flex-col items-center shadow-lg  shadow-gray-700 hover:scale-110 p-5 m-3">
              <img src={mui} alt="mui image" className="w-16 sm:w-20 sm:h-20" />
              <p>Material UI</p>
            </div>
          </div>
          <div data-aos="flip-right" data-aos-duration="3000">
            <div className="flex flex-col items-center shadow-lg shadow-gray-700 hover:scale-110 p-5 m-3">
              <img
                src={chakraUi}
                alt="chakriUi image"
                className="w-16 sm:w-20"
              />
              <p>Chakra UI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
