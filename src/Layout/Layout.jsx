import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="content">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;