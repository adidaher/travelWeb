import React from 'react'
import Hero from '../Hero/Hero'
import constactImg from "../assests/2.jpg"
import ContactForm from '../components/ContactForm/ContactForm'
function Contact() {
  return (
    <>
    <Hero 
    cName="hero-mid"   
    heroImg={constactImg} 
     title="Contact"
    buttonText="Travel Plan" url="/" btnClass="hide"/>
    <ContactForm/>
  </>
  )
}

export default Contact
