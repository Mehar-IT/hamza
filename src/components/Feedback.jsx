import React, { useEffect } from "react";
import Location from "./Location";
import { useThemeContext } from "../context/ThemeContextProvider";

export default function Feedback() {
  const { isLightTheme, light, dark } = useThemeContext();
  const theme = isLightTheme ? light : dark;
  const apikey = import.meta.env.VITE_FORM_KEY;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    // <div name='feedback' className='bg-gray-900 pt-40 min-h-screen'>
    <div name="feedback" className={`${theme.bg} pt-40 min-h-screen`}>
      <div className="max-w-[1000px] mx-auto sm:text-center ">
        <h1
          className={`text-3xl font-bold mb-3 ${theme.syntax} border-b-4 border-pink-600 inline-block mx-3`}
        >
          Feedback
        </h1>
        <p className={`${theme.syntax} mx-3 font-semibold`}>
          Can send me feedback at here
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between  max-w-[1000px] mx-auto p-10 md:p-3 ">
        <form
          data-aos="zoom-in"
          // data-aos-anchor-placement="top-center"
          data-aos-duration="3000"
          className="w-full md:w-1/2 sm:mx-3"
          method="POST"
          action={`https://getform.io/f/${apikey}`}
        >
          <div className=" mb-6 md:mb-0">
            <label
              className={`block uppercase tracking-wide ${
                !isLightTheme ? "text-gray-300" : "text-gray-700"
              } text-xs font-bold mb-2`}
              htmlFor="grid-first-name"
            >
              Name
            </label>
            <input
              name="name"
              className="appearance-none block w-full  bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-first-name"
              type="text"
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="w-full">
            <label
              className={`block uppercase tracking-wide ${
                !isLightTheme ? "text-gray-300" : "text-gray-700"
              } text-xs font-bold mb-2`}
              htmlFor="grid-password"
            >
              E-mail
            </label>
            <input
              name="email"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              placeholder="Enter your email here"
              type="email"
              required
            />
          </div>

          <div className="w-full">
            <label
              className={`block uppercase tracking-wide ${
                !isLightTheme ? "text-gray-300" : "text-gray-700"
              } text-xs font-bold mb-2`}
              htmlFor="grid-password"
            >
              Message
            </label>
            <textarea
              name="message"
              className={`w-full no-resize appearance-none block  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none`}
              id="message"
              placeholder="Enter message here"
              required
              defaultValue={""}
            />
          </div>

          <button
            className={`hadow ${
              !isLightTheme ? "border-white" : "border-gray-500"
            } border-2 focus:shadow-outline focus:outline-none ${theme.bg}  ${
              theme.syntax
            } font-bold py-2 px-4 rounded`}
            type="submit"
          >
            Send
          </button>
        </form>
        <Location />
      </div>
    </div>
  );
}
