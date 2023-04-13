import React, { useEffect } from "react";
import { FaGithub, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { GoLocation, GoMail } from "react-icons/go";
import { AiOutlineWhatsApp } from "react-icons/ai";
import logo from "../assets/hamza.png";
import { useThemeContext } from "../context/ThemeContextProvider";
import { Link } from "react-scroll";

export default function Contact() {
  const { isLightTheme, light, dark } = useThemeContext();
  const theme = isLightTheme ? light : dark;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      id="contact"
      // data-aos-anchor-placement="top-center"
      data-aos="zoom-in"
      data-aos-duration="3000"
      className={` ${theme.bg}`}
    >
      <div
        className={`max-w-[1000px] mx-auto flex flex-col justify-between items-center ${!isLightTheme ? "text-gray-300" : "text-gray-700"
          }  pt-3`}
      >
        <Link to="home" smooth={true} duration={500} className="hover:cursor-pointer ">
          <span>
            <img src={logo} alt="logo" />
          </span>
        </Link>
        <div className="flex flex-col sm:flex-row flex-wrap justify-between w-full ">
          <div className="card hover:scale-110 m-3 hover:cursor-pointer">
            <Link to="location" smooth={true} duration={500} offset={-110} className="flex flex-col items-center justify-center ">
              <span>
                <GoLocation size={30} />
              </span>
              <h1>Address</h1>
              <p>Hyderabad,Sindh Pakistan</p>
            </Link>
          </div>
          <div className="card hover:scale-110 m-3">
            <a href="mailto:hamzatarique2000@gmail.com" target="_blank" className="flex flex-col items-center justify-center">
              <span>
                <GoMail size={30} />
              </span>
              <h1>Email</h1>
              <p>hamzatarique2000@gmail.com</p>
            </a>
          </div>
          <div className="card flex flex-col items-center justify-center hover:scale-110 m-3">
            <a href="https://wa.me/923179654961" target="_blank" className="flex flex-col items-center justify-center">
              <span>
                <AiOutlineWhatsApp size={30} />
              </span>
              <h1>whatsapp</h1>
              <p>(+92) 317 9654961</p>
            </a>
          </div>
        </div>

        <ul className="flex flex-wrap justify-evenly items-center w-full p-3 m-3">
          <li className="bg-blue-600 text-white p-2 rounded-md shadow-md shadow-blue-900 hover:scale-110">
            <a
              href="https://www.facebook.com/hamzatariquearain1/"
              target="_blank"
            >
              <FaFacebook size={30} />
            </a>
          </li>
          <li className="bg-black text-white p-2 rounded-md shadow-md shadow-black hover:scale-110">
            <a href="https://github.com/Mehar-IT" target="_blank">
              <FaGithub size={30} />
            </a>
          </li>
          <li className="bg-blue-500 text-white p-2 rounded-md shadow-md shadow-blue-900 hover:scale-110">
            <a href="https://twitter.com/HamzaTarique51" target="_blank">
              <FaTwitter size={30} />
            </a>
          </li>
          <li className="bg-pink-500 text-white p-2 rounded-md shadow-md shadow-pink-700 hover:scale-110">
            <a href="https://www.instagram.com/hamza.arainpak/" target="_blank">
              <FaInstagram size={30} />
            </a>
          </li>
        </ul>

        <h1 className={`text-center ${theme.syntax} text-xl w-full p-5`}>
          copyright&copy; Hamza<span className="text-red-600">❤️</span>
        </h1>
      </div>
    </div>
  );
}
