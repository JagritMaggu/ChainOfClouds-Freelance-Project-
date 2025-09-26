import React from "react";
import Footer from "./Footer";
import { motion, transform } from "framer-motion";

import { MessageCircle } from "lucide-react";
function Services() {
 const bgStyle = {
  background: `url("/images/hookaClass.jpg") no-repeat center center`,
  backgroundSize: "cover", 
  width: "100%",
  height: "100%",
  position: "fixed", 
 
  top: 0,
  left: 0,
  zIndex: -1,
  filter: "blur(3px)",
};
  const message = "Hi, I wanted to contact you regarding your services!";
  const encodedMessage = encodeURIComponent(message);
  const whatsAppLink = `https://wa.me/917895897270?text=${encodedMessage}`;

  const textStyle = {
    textDecoration: "none",
  };

  const services = [
    {
      title: "Wedding Events",
      desc: "Luxurious setups and curated hookah lounges.",
    },
    {
      title: "Corporate Parties",
      desc: "Stylish arrangements to impress your guests.",
    },
    {
      title: "Private Gatherings",
      desc: "Intimate experiences with premium service.",
    },
  ];
  return (
    <div className="relative min-h-screen w-full overflow-visible">
      <div style={bgStyle} className="overflow-hidden"> </div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col relative z-10 px-4 sm:px-6 md:px-10 py-10"
      >

        <div className="flex relative items-center mt-3 ml-10">
          <img src="/images/chainofclouds.jpg" className="h-10 w-10" />
          <h1 className="text-white ml-3">Welcome to Chain of Clouds</h1>
        </div>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-white max-w-2xl mt-3 ml-10"
        >
          At Chain of Clouds, we specialize in creating unforgettable moments
          through the art of premium shisha experiences. Whether it’s a wedding,
          a private gathering, or a corporate event, our mission is to bring
          people together with elegance, comfort, and style. We take pride in
          offering high-quality shisha setups, curated flavors, and a seamless
          service that blends perfectly into any event. Every detail is designed
          to elevate the atmosphere—turning ordinary occasions into
          extraordinary memories. With a passion for hospitality and a
          commitment to excellence, Chain of Clouds isn’t just about shisha—it’s
          about crafting an experience your guests will talk about long after
          the event ends.
        </motion.p>
        <motion.div
          className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className=" ml-10 mt-2  overflow-hidden ">
            <h2 className="text-white mb-3">Our Services</h2>
            <h3 className="text-white">Wedding Events</h3>
            <p className="text-white">
              Add a touch of elegance and luxury to your special day with our
              premium shisha service. We provide beautifully presented shisha
              setups that perfectly complement your wedding décor, offering your
              guests a unique and memorable experience to enjoy during the
              celebrations.
            </p>
            <h3 className="text-white">Corporate Parties</h3>
            <p className="text-white">
              Make your private parties and get-togethers unforgettable with our
              customized shisha experience. Whether it’s a birthday, house
              party, or an intimate gathering with friends, we bring stylish
              setups and a variety of premium flavors to create the perfect
              atmosphere for relaxation and enjoyment.
            </p>
            <h3 className="text-white">Private Gatherings</h3>
            <p className="text-white">
              Enhance your corporate functions with a sophisticated shisha
              lounge experience. Perfect for company parties, networking
              sessions, and team celebrations, our professional service provides
              a modern and classy touch that encourages socializing and leaves a
              lasting impression on your guests.
            </p>
          </div>
        </motion.div>
      </motion.div>

      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        {" "}
        <a
          href={whatsAppLink}
          style={textStyle}
          className="flex items-center justify-center ml-2 no-underline text-white transition duration-300 bg-green-700 p-3 rounded-lg hover:opacity-90"
        >
          <MessageCircle className="text-gray-100 mr-2 h-5 w-5" />
          Chat on WhatsApp
        </a>{" "}
      </div>
      <div className="mt-10 ml-12">
        <Footer />
      </div>
    </div>
  );
}

export default Services;
