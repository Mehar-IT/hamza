import React from 'react'
import Location from './Location';

export default function Feedback() {
    return (
        <div name='feedback' className='bg-gray-800 pt-40'>
            <div className='max-w-[1000px] mx-auto sm:text-center '>
                <h1 className='text-3xl font-bold mb-3 text-white border-b-4 border-pink-600 inline-block mx-3'>Feedback</h1>
                <p className='text-white mx-3'>Can send me feedback at here</p>
            </div>
            <div className='flex flex-col md:flex-row justify-between  max-w-[1000px] mx-auto p-10 md:p-3 space-x-3 space-y-3'>
                <form className="w-full md:w-1/2" method='POST' action='https://getform.io/f/e3510801-e91a-4aa4-8803-6e4b984b546a'>

                    <div className=" mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                            htmlFor="grid-first-name"
                        >
                            Name
                        </label>
                        <input
                            name='name'
                            className="appearance-none block w-full  bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            type="text"
                            required
                            placeholder="Enter your name"
                        />

                    </div>

                    <div className="w-full">
                        <label
                            className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                            htmlFor="grid-password"

                        >
                            E-mail
                        </label>
                        <input
                            name='email'
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="email"
                            placeholder='Enter your email here'
                            type="email"
                            required
                        />
                    </div>

                    <div className="w-full">
                        <label

                            className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            Message
                        </label>
                        <textarea
                            name='message'
                            className="w-full no-resize appearance-none block  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                            id="message"
                            placeholder='Enter message here'
                            required
                            defaultValue={""}
                        />
                    </div>

                    <button
                        className="shadow border-white border-2 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="submit"
                    >
                        Send
                    </button>

                </form>
                <Location />
            </div>
        </div>

    )
}
