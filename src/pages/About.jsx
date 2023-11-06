import React from 'react'
import Layout from '../Layout/Layout'
import HeroSection from '../components/About/HeroSections'
import Introduce from '../components/About/Introduce'
import Reviews from '../components/Home/Reviews'

const About = () => {
  return (
    <div>
        
     <Layout>
    <HeroSection/>
    <Introduce />
    <Reviews />
    </Layout>
    </div>
  )
}

export default About