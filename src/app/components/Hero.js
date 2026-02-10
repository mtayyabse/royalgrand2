import React from 'react'
import { playfair } from "../fonts";


const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">

  {/* Background Image */}
  <div
  className="absolute inset-0 bg-cover bg-center bg-fixed"
  style={{ backgroundImage: "url('/hero2.jpeg')" }}
/>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/55" />

  {/* Content */}
  <div className="relative z-10 text-center text-white px-6">

<h1 className={`${playfair.className} text-5xl md:text-7xl font-bold`}>
      Experience Comfort <br /> Like Never Before
    </h1>

    <p className="text-xl mb-8 text-gray-200">
      Luxury rooms. Prime location. Affordable prices.
    </p>

    <div className="flex gap-4 justify-center flex-wrap">

      <a
        href="#rooms"
        className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
      >
        Explore Rooms
      </a>

      <a
        href="#contact"
        className="bg-blue-600 px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
      >
        Book Now
      </a>

    </div>


  </div>
  <div className="absolute bottom-10 animate-bounce text-white text-3xl">
  ↓
</div>
</section>

  )
}

export default Hero