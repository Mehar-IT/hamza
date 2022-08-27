import React, { useEffect } from 'react'
import { FaGithub, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { GoLocation, GoMail } from 'react-icons/go'
import { AiOutlinePhone } from 'react-icons/ai'
import logo from '../assets/hamza.png';

export default function Contact() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div id='contact'
            data-aos-anchor-placement="top-center"
            data-aos="zoom-in"
            data-aos-duration="3000"
            className='contact'>
            <div className='max-w-[1000px] mx-auto flex flex-col justify-between items-center text-gray-400 pt-3'>

                <span><img src={logo} alt="" /></span>
                <div className='flex flex-col sm:flex-row flex-wrap justify-between w-full   '>
                    <div className="card flex flex-col items-center justify-center hover:scale-110 m-3">
                        <span><GoLocation size={30} /></span>
                        <h1>Address</h1>
                        <p>Hyderabad,Sindh Pakistan</p>
                    </div>
                    <div className="card flex flex-col items-center justify-center hover:scale-110 m-3">
                        <span><GoMail size={30} /></span>
                        <h1>Email</h1>
                        <p>hamzatariquearain@gmail.com</p>
                    </div>
                    <div className="card flex flex-col items-center justify-center hover:scale-110 m-3">
                        <span><AiOutlinePhone size={30} /></span>
                        <h1>Contact</h1>
                        <p>(+92) 3225322156</p>
                        <p>(+92) 3179654961</p>
                    </div>

                </div>


                < ul className='flex flex-wrap justify-evenly items-center w-full p-3 m-3' >

                    <li className='bg-blue-600 text-white p-2 rounded-md shadow-md shadow-blue-900 hover:scale-110'>
                        <a href="https://www.facebook.com/hamzatariquearain1/" target='_blank' >
                            <FaFacebook size={30} />
                        </a>
                    </li>
                    <li className='bg-black text-white p-2 rounded-md shadow-md shadow-black hover:scale-110'>
                        <a href="https://github.com/Mehar-IT" target='_blank' >
                            <FaGithub size={30} />

                        </a>
                    </li>
                    <li className='bg-blue-500 text-white p-2 rounded-md shadow-md shadow-blue-900 hover:scale-110'>
                        <a href="https://twitter.com/HamzaTarique" target='_blank' >
                            <FaTwitter size={30} />

                        </a>
                    </li>
                    <li className='bg-pink-500 text-white p-2 rounded-md shadow-md shadow-pink-700 hover:scale-110'>
                        <a href="https://www.instagram.com/hamza.arainpak/" target='_blank' >
                            <FaInstagram size={30} />

                        </a>
                    </li>
                </ ul>

                <h1 className='text-center text-white text-xl w-full p-5'>copyright&copy; Hamza<span className='text-red-600'>❤️</span></h1>

            </div >
        </div>
    )
}
