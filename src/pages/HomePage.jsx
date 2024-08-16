import React from 'react'
import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ScrollToTop from './ScrollToTop'
import { useEffect } from 'react'

const HomePage = () => {
  useEffect(() => {
    document.title = 'Ryan Lei-Home';
  }, []);

  return (
    <div className="bg-slate-800 overflow-x-hidden overflow-y-hidden">
      <ScrollToTop/>
      <Navbar/>
      <Welcome/>
      <AboutMe/>
      <Projects onHomePage={true}/>
      {/* <Contact/> */}
      <Footer/>
    </div>
  )
}

export default HomePage
