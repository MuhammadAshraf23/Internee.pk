import React from 'react'
import Layout from '../Layout/Layout'
import HeroSection from '../components/Home/HeroSection'
import AboutIntern from '../components/Home/AboutIntern'
import Categories from '../components/Home/Categories'
import Laungh from '../components/Home/Laungh'
import RecentInternships from '../components/Home/RecentInternships'
import Reviews from '../components/Home/Reviews'
const Home = () => {
  return (
    <div>

      <Layout>
        <HeroSection />
        <AboutIntern />
        <Categories />    
        <Laungh />
        <div className='container my-20'>
          <div className='lg:w-1/2 md:w-full'>
            <h1 className='lg:text-4xl md:text-4xl text-3xl font-bold lg:py-10 md:py-10 py-5 px-3'>Recent Internships</h1>
            <p className='text-gray-500 text-lg px-3'><b>Internships come every two months </b> Grab your internships in your favorite domain to boost yourself in the field of Computer technology</p>
          </div>
        <RecentInternships />
        </div>
        <div className='bg-blue-50 lg:py-32 md:py-24 py-14'>
          <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold text-center'>Happy Internee Reviews</h1>
        </div>
        <Reviews />
      </Layout>
    </div>
  )
}

export default Home