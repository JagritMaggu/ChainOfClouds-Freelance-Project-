import React from 'react'
import { motion } from "framer-motion";
import Footer from './Footer';
function Contact() {
   const bgStyle = {
      background: `url("/images/hookaClass.jpg") no-repeat center center`,
      backgroundSize: "100% 100%",
      position:"fixed",
     minHeight: "100vh",
     height:"100vh",
     backgroundPosition:"center",
   width:"100%",
      filter:"blur(3px)",
  
      margin: 0,
    padding:0};

 const message="Hi, I wanted to contact you regarding your products and services"
 const encodedMessage= encodeURIComponent(message);
    const whatsAppLink =`https://wa.me/917895897270?text=${encodedMessage}`
    const textStyle={
      margin:0,
      padding:0
    }
  return (
    <div className='relative min-h-screen min-w-screen'>
    <div style={bgStyle}></div>
    <div className='relative bg-transparent flex items-center h-screen z-10'>
      <h2  className='text-white'>Contact Us</h2>
      <p className='text-white'>We’d love to help make your event unforgettable.</p>
      <a
      
        href= {whatsAppLink}
        className='text-decoration-none text-white fs-4 btn btn-primary btn-lg'

      >
        Chat on WhatsApp
      </a>
     
       
     </div>
     <Footer/>
     </div>
    
  )
}

export default Contact
