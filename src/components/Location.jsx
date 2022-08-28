import React, { useEffect } from 'react'

export default function Location() {
    useEffect(() => {
        AOS.init();
    })
    return (
        <div
            // data-aos-anchor-placement="top-center"
            data-aos="zoom-out"
            data-aos-duration="3000"
            className="location md:w-1/2 w-full sm:mx-3">
            <iframe className=' border-8 w-full mt-7 h-80 shadow-md shadow-gray-900 border-white' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d115348.29623011859!2d68.36690614999999!3d25.3835715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1661455836332!5m2!1sen!2s" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
        </div>
    )
}


