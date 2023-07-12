import React from 'react'
import Hero from '../Hero/Hero'
import homeimg from "../assests/homeimg.png"
import Distentaions from '../components/destinations/Distentaions'
import Trip from '../components/Trip/Trip'
import Footer from '../components/Footer/Footer'
const Home = () => {
  return (
    <>
      <Hero 
      cName="hero"   
      heroImg={homeimg} 
       title="Your Journey Your Story"
       text="Choose Your Favourite Destination."
      buttonText="Travel Plan" url="/" btnClass="show"/>
      <Distentaions/>
      <Trip/>
     
      </>
    
  )
}

export default Home
