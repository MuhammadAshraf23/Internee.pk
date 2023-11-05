import React from 'react'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Categories from '../components/Categories'
import Laungh from '../components/Laungh'
import RecentInternships from '../components/RecentInternships'
import Reviews from '../components/Reviews'
const Home = () => {
  return (
    <div>

     <Layout>
    <HeroSection/>
    <About/>
    <Categories />
    <Laungh />
    <RecentInternships />
    <Reviews />
    </Layout>


    </div>
  )
}

export default Home