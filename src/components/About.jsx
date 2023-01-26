import React, { useEffect } from 'react'
import profile from '../assets/profile.jpeg';

export default function About() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div name='about' className='bg-gray-900 flex min-h-screen text-white '>
            <div className='max-w-[1000px] px-8 mx-auto flex flex-col items-center  justify-center '>
                <div className='text-4xl ml-3 border-b-4 border-pink-600 font-bold'>
                    About
                </div>
                <div className='grid sm:grid-cols-2 items-center '>
                    <div
                        data-aos="fade-left"
                        data-aos-duration="3000"
                        data-aos-anchor-placement="top-center"
                        className='text-5xl p-3 sm:text-right'>
                        Hi! I'm Hamza,nice to meet you,please take a look arround
                    </div>
                    <div
                        data-aos="fade-right"
                        data-aos-duration="3000"
                        data-aos-anchor-placement="top-center"
                        className='mx-auto sm:mx-10'>
                        <img className='rounded-full w-56 h-56 object-cover' src={profile} alt="profile pic" />
                    </div>
                </div>
            </div>
        </div>
    )
}
