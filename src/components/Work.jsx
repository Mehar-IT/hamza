import React, { useEffect } from "react";
import ecommerce from "../assets/Screenshots/ecommerce.png";
import chat from "../assets/Screenshots/chat.png";
import pokemon from "../assets/Screenshots/pokemon.png";
import postmaster from "../assets/Screenshots/postmaster.png";
import textutil from "../assets/Screenshots/textutil.png";
import whatsapp from "../assets/Screenshots/whatsapp.png";
import { useThemeContext } from "../context/ThemeContextProvider";

export default function Work() {
  const { isLightTheme, light, dark } = useThemeContext();
  const theme = isLightTheme ? light : dark;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    // <div name='work' className='bg-gray-900 w-full min-h-screen '>
    <div name="work" className={`${theme.bg} w-full min-h-screen `}>
      {/* <div className='max-w-[1000px] mx-auto bg-gray-900 text-white pt-40'> */}
      <div
        className={`max-w-[1000px] mx-auto ${theme.bg} ${theme.syntax} pt-40`}
      >
        <div className="sm:text-center ml-10">
          <h1 className="text-3xl font-bold border-b-4 border-pink-600 inline-block">
            Work
          </h1>
          <p className="m-5 font-semibold">
            These projects are built up with react js
          </p>
        </div>
        <div className="mx-10 sm:mx-3 grid  sm:grid-cols-2 md:grid-cols-3 gap-3">
          <div
            style={{ backgroundImage: `URL(${pokemon})` }}
            data-aos="flip-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="2000"
            className="shadow-lg shadow-gray-900 rounded-md h-52 w-full bg-no-repeat bg-cover bg-center  mx-auto opacity-100 hover:opacity-100"
          >
            <div className="flex shadow-lg shadow-gray-900  sm:flex-col h-full justify-evenly items-center text-center rounded-md group content-div">
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-center">Pokemon App</span>
                <div>
                  <a href="https://mypokemonapp.surge.sh/" target="_blank">
                    <button className="bg-white text-gray-700  hover:border-black m-2">
                      live
                    </button>
                  </a>
                  <a
                    href="https://github.com/Mehar-IT/pokemon_app"
                    target="_blank"
                  >
                    <button className="bg-white text-gray-700 hover:border-black ">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `URL(${chat})` }}
            data-aos="flip-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="2000"
            className="shadow-lg shadow-gray-900 rounded-md h-52 w-full bg-no-repeat bg-cover bg-center  mx-auto opacity-100 hover:opacity-100"
          >
            <div className="flex shadow-lg shadow-gray-900  sm:flex-col h-full justify-evenly items-center text-center rounded-md group content-div">
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-center">Chat Application</span>
                <div>
                  <a
                    href="https://hamza-chat-mern.herokuapp.com/"
                    target="_blank"
                  >
                    <button className="bg-white text-gray-700 hover:border-black m-2">
                      live
                    </button>
                  </a>
                  <a
                    href="https://github.com/Mehar-IT/chat_application"
                    target="_blank"
                  >
                    <button className="bg-white text-gray-700 hover:border-black ">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `URL(${whatsapp})` }}
            data-aos="flip-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="2000"
            className="shadow-lg shadow-gray-900  rounded-md h-52 w-full bg-no-repeat bg-cover bg-center  mx-auto opacity-100 hover:opacity-100 "
          >
            <div className="flex shadow-lg shadow-gray-900  sm:flex-col h-full justify-evenly items-center text-center rounded-md group content-div">
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-center">Whatsapp util</span>
                <div>
                  <a href="https://mywhatsapputil.surge.sh/" target="_blank">
                    <button className="bg-white text-gray-700 hover:border-black m-2">
                      live
                    </button>
                  </a>
                  <a
                    href="https://github.com/Mehar-IT/WhatsApp-util"
                    target="_blank"
                  >
                    <button className="bg-white text-gray-700 hover:border-black ">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `URL(${ecommerce})` }}
            data-aos="flip-down"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="2000"
            className="shadow-lg shadow-gray-900 rounded-md h-52 w-full bg-no-repeat bg-cover bg-center  mx-auto opacity-100 hover:opacity-100"
          >
            <div className="flex shadow-lg shadow-gray-900  sm:flex-col h-full justify-evenly items-center text-center rounded-md group content-div">
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-center">Ecommerce</span>
                <div>
                  <a href="https://ecommerceforfyp.vercel.app/" target="_blank">
                    <button className="bg-white text-gray-700 hover:border-black m-2">
                      live
                    </button>
                  </a>
                  <a
                    href="https://github.com/Mehar-IT/ecommerce"
                    target="_blank"
                  >
                    <button className="bg-white text-gray-700 hover:border-black ">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `URL(${textutil})` }}
            data-aos="flip-down"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="2000"
            className="shadow-lg shadow-gray-900 rounded-md h-52 w-full bg-no-repeat bg-cover bg-center  mx-auto opacity-100 hover:opacity-100"
          >
            <div className="flex shadow-lg shadow-gray-900  sm:flex-col h-full justify-evenly items-center text-center rounded-md group content-div">
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-center">Textutil App</span>
                <div>
                  <a href="http://mytextutilstest.surge.sh/" target="_blank">
                    <button className="bg-white text-gray-700 hover:border-black m-2">
                      live
                    </button>
                  </a>
                  <a
                    href="https://github.com/Mehar-IT/TextUtil_app"
                    target="_blank"
                  >
                    <button className="bg-white text-gray-700 hover:border-black ">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `URL(${postmaster})` }}
            data-aos="flip-down"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="2000"
            className="shadow-lg shadow-gray-900 rounded-md h-52 w-full bg-no-repeat bg-cover bg-center  mx-auto opacity-100 hover:opacity-100 "
          >
            <div className="flex shadow-lg shadow-gray-900  sm:flex-col h-full justify-evenly items-center text-center rounded-md group content-div">
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-center">Post Master</span>
                <div>
                  <a href="http://postmaster.surge.sh/" target="_blank">
                    <button className="bg-white text-gray-700 hover:border-black m-2">
                      live
                    </button>
                  </a>
                  <a
                    href="https://github.com/Mehar-IT/postmaster"
                    target="_blank"
                  >
                    <button className="bg-white text-gray-700 hover:border-black ">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
