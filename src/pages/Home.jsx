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
        <div className='mx-20 my-20'>
          <div className='lg:w-1/2 md:w-full'>
            <h1 className='text-4xl font-bold py-10'>Recent Internships</h1>
            <p className='text-gray-500 text-lg'><b>Internships come every two months </b> Grab your internships in your favorite domain to boost yourself in the field of Computer technology</p>
          </div>
        </div>
        <RecentInternships />
        <div className='bg-blue-50 py-32'>
          <h1 className='text-4xl font-bold text-center'>Happy Internee Reviews</h1>
        </div>
        <Reviews />
      </Layout>
    </div>
  )
}

export default Home