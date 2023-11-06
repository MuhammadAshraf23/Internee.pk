import React from 'react'
import Layout from '../Layout/Layout'
import HeroSection from '../components/Internships/HeroSection'
import Reviews from '../components/Home/Reviews'


const Internships = () => {
  return (
    <div>
        
     <Layout>
    <HeroSection/>
    <Internships />
    <Reviews />
    </Layout>
    </div>
  )
}

export default Internships