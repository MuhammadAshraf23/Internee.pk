import React from 'react'

const About = () => {
    const img = {
        height: '750px',

    }
    const aboutInfo = {
        position: 'absolute',
        bottom: '0',
        right: "0",
        margin: '20px',
        padding: '20px',


    }
    return (
        <div className='container flex mx-auto mt-20 justify-center w-full'>
            <div className='w-1/4 h-100'>
                <div className='bg-green-500 h-100 rounded-l-lg relative'>
                    <img src="https://internee.pk/images/founder.jpg" style={img} className='about-image rounded-l-lg img-fluid object-cover h-full' alt="" />

                    <div className='about-info bg-green-500 p-3 rounded-md' style={aboutInfo}>
                        <h4 className='text-white mb-0 me-2 text-3xl font-bold'>Hammad  Sheikh</h4>
                        <p className='text-white mb-0'>Founder</p>
                    </div>
                </div>
            </div>
                <div className='custom-text-block bg-indigo-500 mx-5 px-20 py-20' style={{ height: '750px',width:'500px' }} >
                    <h2 className='text-white mb-2 font-bold text-4xl leading-relaxed'>Welcome to Internee.pk</h2>
                    <p className='text-white leading-relaxed'>
                        Our internship program is designed to give students the opportunity to work on meaningful projects and tasks, while also receiving mentorship and guidance from experienced professionals in the field. Our goal is to help interns develop the skills and knowledge they need to succeed in their careers, while also building a strong network of talented individuals who may become valuable members of our team in the future. If you're looking for a challenging and rewarding internship experience, we invite you to explore our program and
                        <a href="/job-listings.html" className='text-green-500 font-semibold' target="_parent"> Apply Today</a>
                    </p>

                    <div className='flex items-center mt-10'>
                        <a href="/job-listings.html" className="text-white border-2 border-white p-2 mr-5 hover:bg-white-500 hover:border-white-500 hover:text-black rounded-full transition duration-300">Get To Know Us</a>
                        <a href="job-listings.html" className='custom-link smoothscroll'>Explore Internships</a>
                    </div>
                </div>

            <div className='lg:w-1/4 w-50'>
                <div className='h-100 rounded-r-lg relative'>
                    <img src="https://internee.pk/images/rayyan.jpg" style={img} className='about-image rounded-r-lg img-fluid object-cover w-full h-full' alt="" />
                    <div className='about-info bg-green-500 p-3 rounded-md' style={aboutInfo}>
                        <h4 className='text-white mb-0 me-2 text-3xl font-bold'>Rayyan Zain</h4>
                        <p className='text-white mb-0'>CMO</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About