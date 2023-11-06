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
    <HeroSection/>
    <AboutIntern/>
    <Categories />
    <Laungh />
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