import React from 'react'

const Introduce = () => {
    return (
        <div className='container flex justify-center my-32 w-full mx-10'>
            <div className='custom-text-block ml-32 mr-5 h-full' style={{width:'70%'}}>
                <h2 className='text-black mb-2 font-bold text-4xl leading-relaxed'>Introducing Internee.pk</h2>
                <p className='text-gray-800 leading-relaxed'>
                    The ultimate platform designed to turbocharge the IT sector in Pakistan! We recognize the immense potential of talented individuals in the country and aim to bridge the gap between them and the thriving IT industry. Internee.pk offers a comprehensive range of virtual internship opportunities exclusively in the IT field.
                    <div className='flex items-center mt-10'>
                        <a href="/job-listings.html" className="text-indigo-500 border-2 border-gray-500 py-2 px-4 mr-5 hover:bg-indigo-500 hover:border-indigo-500 hover:text-white rounded-full transition duration-300">Explore Internships</a>
                        <a href="job-listings.html" className='custom-link smoothscroll'>Contact Us</a>
                    </div>
                </p>
            </div>
            <div className='w-full'>
                <div className='h-1/2 w-100 rounded-md'>
                    <img src="https://internee.pk/images/horizontal-shot-happy-mixed-race-females.jpg" className='about-image rounded-md img-fluid object-cover h-full' alt="" style={{width: "70%" ,height:'300px'} } />
                </div>
            </div>
        </div>
    )
}

export default Introduce