import React from 'react'
import Nav from '../Components/Nav';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ContactHero from './ContactHero';
import ContactInfo from './ContactInfo';

function ContactPage() {
  return (
    <div className="footer-respons">
        <Header/>
        <Nav/>
         <div className="spacer"></div>
         <ContactHero/>
         <div className="spacer"></div>
         <ContactInfo/>

         <div className="spacer"></div>

        <Footer/>
      
    </div>
  )
}

export default ContactPage
