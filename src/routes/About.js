import React from 'react'
import Hero from '../Hero/Hero'
import aboutimg from "../assests/night.jpg"
import AboutUs from '../components/AboutUs/AboutUs'
function About() {
  return (
    <>
    <Hero cName="hero-mid"   
    heroImg={aboutimg}
     title="About"
    
    buttonText="Travel Plan" url="/" btnClass="hide"/>

    <AboutUs/>

    </>
  )
}

export default About
