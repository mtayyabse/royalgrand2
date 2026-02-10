"use client";

import Navbar from "./components/Navbar";
import RoomCard from "./components/RoomCard";
import WhatsApp from "./components/Whatsapp";
import WhyChooseUs from './components/WhyChooseUs'
import { rooms } from "../../data/rooms";
import { motion } from "framer-motion";
import Contact from "./components/Contact";
import Services from "./components/Services";
import GoogleReviews from "./components/GoogleReviews";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      {/* <section
        id="hero"
        className="relative h-screen bg-[url('/hero.jpg')] bg-cover bg-center flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          className="relative z-10 text-center text-white px-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Comfort Guest House
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Affordable luxury rooms for families, couples & solo travelers
          </p>
          <a
            href="#rooms"
            className="bg-blue-600 px-8 py-3 rounded-full text-lg shadow-lg hover:bg-blue-700 transition"
          >
            Explore Rooms
          </a>
        </motion.div>
      </section> */}
      <Hero/>
      {/* ROOMS */}
      <section
        id="rooms"
        className="py-20 bg-gradient-to-r from-blue-50 to-white"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-black">Our Rooms</h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          {rooms.map((room) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <RoomCard room={room} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      {/* <section
        id="why"
        className="py-20 bg-gradient-to-r from-white to-blue-50"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Us
        </h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6 text-center">
          <motion.div
            className="p-6 rounded-xl bg-white/30 backdrop-blur-md border border-white/20 shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-2">Prime Location</h3>
            <p className="text-gray-700">
              Near main roads & markets, easy access to everything
            </p>
          </motion.div>
          <motion.div
            className="p-6 rounded-xl bg-white/30 backdrop-blur-md border border-white/20 shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2">Affordable Luxury</h3>
            <p className="text-gray-700">
              Premium rooms at budget-friendly prices
            </p>
          </motion.div>
          <motion.div
            className="p-6 rounded-xl bg-white/30 backdrop-blur-md border border-white/20 shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-700">Friendly staff always ready to help</p>
          </motion.div>
        </div>
      </section> */}
      <Gallery/>
      <WhyChooseUs />
      <Services/>
      <GoogleReviews />
      {/* CONTACT */}
      {/* <section id="contact" className="py-20 bg-gray-100 text-center px-6">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          📍 Islamabad <br />
          📞 +92 XXX XXX XXXX
        </p>
        <a
          href="tel:+92XXXXXXXXX"
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 shadow-lg transition"
        >
          Call Now
        </a>
      </section> */}
      <Contact />
      

      {/* Floating WhatsApp */}
      <WhatsApp />

      {/* Sticky Book Now */}
      {/* <a
        href="#contact"
        className="fixed bottom-20 right-6 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 z-50"
      >
        Book Now
      </a> */}
    </>
  );
}
