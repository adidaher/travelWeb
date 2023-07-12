import React from 'react'
import Hero from '../Hero/Hero'
import aboutimg from "../assests/night.jpg"
import AboutUs from '../components/AboutUs/AboutUs'
import Trip from '../components/Trip/Trip'

const Service = () => {
  return (
    <>
    <Hero cName="hero-mid"   
    heroImg={aboutimg}
     title="Services"
    buttonText="Travel Plan" url="/" btnClass="hide"/>
  <Trip/>
</>
  )
}

export default Service
