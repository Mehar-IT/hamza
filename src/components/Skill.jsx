import css from '../assets/css.png';
import flutter from '../assets/flutter.png';
import react from '../assets/react.png';
import github from '../assets/github.png';
import html from '../assets/html.png';
import js from '../assets/javascript.png';
import mongo from '../assets/mongo.png';
import node from '../assets/node.png';
import { useEffect } from 'react';

export default function Skill() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div name='skills' className='bg-gray-900 min-h-screen'>
            <div className='max-w-[1000px] mx-auto  bg-gray-900 text-white' >
                <div className='sm:text-center ml-10 mb-10 '>
                    <p className='text-3xl border-b-4 border-pink-600 inline-block mb-3 font-bold'>Skill</p>
                    <p>These are the technologies I've worked with</p>
                </div>
                <div className=' grid grid-cols-2 sm:grid-cols-4'>
                    <div data-aos="flip-left"
                        data-aos-duration="3000"  >
                        <div
                            className='flex flex-col items-center shadow-lg shadow-gray-700 hover:scale-110 p-5 m-3'>
                            <img src={html} alt="html image" className='w-16 sm:w-20 ' />
                            <p>Html</p>
                        </div>
                    </div>
                    <div data-aos="flip-left"
                        data-aos-duration="3000"  >
                        <div
                            className='flex flex-col items-center shadow-lg shadow-gray-700 hover:scale-110 p-5 m-3'>
                            <img src={css} alt="css image" className='w-16 sm:w-20 ' />
                            <p>Css</p>
                        </div>
                    </div>
                    <div data-aos="flip-left"
                        data-aos-duration="3000"  >
                        <div
                            className='flex flex-col items-center shadow-lg shadow-gray-700 hover:scale-110 p-5 m-3'>
                            <img src={js} alt="js image" className='w-16 sm:w-20 ' />
                            <p>Javascript</p>
                        </div>
                    </div>
                    <div data-aos="flip-left"
                        data-aos-duration="3000"  >
                        <div
                            className='flex flex-col items-center shadow-lg shadow-gray-700 hover:scale-110 p-5 m-3'>
                            <img src={node} alt="node image" className='w-16 sm:w-20 ' />
                            <p>Node Js</p>
                        </div>
                    </div>

                    <div data-aos="flip-right"
                        data-aos-duration="3000"  >
                        <div
                            className='flex flex-col items-center shadow-lg shadow-gray-700 hover:scale-110 p-5 m-3'>
                            <img src={mongo} alt="mongo image" className='w-16 sm:w-20 ' />
                            <p>mongoDb</p>
                        </div>
                    </div>
                    <div data-aos="flip-right"
                        data-aos-duration="3000"  >
                        <div
                            className='flex flex-col items-center shadow-lg shadow-gray-700 hover:scale-110 p-5 m-3'>
                            <img src={react} alt="react image" className='w-16 sm:w-20 ' />
                            <p>React</p>
                        </div>
                    </div>
                    <div data-aos="flip-right"
                        data-aos-duration="3000"  >
                        <div

                            className='flex flex-col items-center shadow-lg shadow-gray-700 hover:scale-110 p-5 m-3'>
                            <img src={flutter} alt="flutter image" className='w-16 sm:w-20 ' />
                            <p>Flutter</p>
                        </div>
                    </div>

                    <div data-aos="flip-right"
                        data-aos-duration="3000"  >
                        <div
                            className='flex flex-col items-center shadow-lg shadow-gray-700 hover:scale-110 p-5 m-3'>
                            <img src={github} alt="github image" className='w-16 sm:w-20 ' />
                            <p>Github</p>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
