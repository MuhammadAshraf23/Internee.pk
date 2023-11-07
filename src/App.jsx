import React from "react"
import {BrowserRouter as Router,Route,Routes,} from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Internships from "./pages/Internships";
import CMS from "./pages/CMS";
import JobPortal from "./pages/JobPortal";
import './App.css'
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/internships" element={<Internships/>} />
        <Route path="/cms" element={<CMS/>} />
         <Route path="/jobportal" element={<JobPortal/>} />

        </Routes>
    </Router>
    </>
  )
}

export default App
