import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

export default function Home() {
    return (
        <div name='home' className='w-full h-screen bg-gray-800'>
            <div className="max-w-[1000px] px-8 mx-auto flex flex-col justify-center items-start h-full text-[#FFFDD0]">
                <p className='text-pink-400 text-2xl'>Hola! i am </p>
                <h1 className='text-4xl sm:text-7xl'>Hamza Tarique</h1>
                <h2 className='text-2xl sm:text-4xl text-[#8892b0]'>I'm Full Stack Web Developer from 🇵🇰</h2>
                <p className='text-[#8892b0] py-4 max-w-[300px]'>I can build website using html,css,bootstrap,tailwind css and react js for frontend.I also know about flutter a little bit have a look mu github to view my project built on flutter,and for backend i use node js (custom backend)</p>
                <div >
                    <Link to="work" smooth={true} duration={500} offset={70}>

                        <button className='flex group justify-start  items-center px-6 py-3 border-2 border-white'>View work
                            <span className='group-hover:rotate-90 duration-300 mx-3'>{<HiArrowNarrowRight />}</span>
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    )
}
