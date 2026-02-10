"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-white/70 shadow-lg py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        {/* <img src="/logo.png" width="50px"/> */}
        <h3
          className={`text-2xl tracking-wider font-semibold transition ${
            scrolled ? "text-gray-900" : "text-white"
          }`}
        >
          Royal Grand<span className="text-blue-900">Guest House</span>
        </h3>

        {/* MENU */}
        <ul
          className={`hidden md:flex gap-10 font-medium tracking-wide transition ${
            scrolled ? "text-gray-700" : "text-white"
          }`}
        >
          <li className="hover:text-amber-500 cursor-pointer transition">
            <Link href="/">Home</Link>
          </li>

          <li className="hover:text-amber-500 cursor-pointer transition">
            <a href="/rooms">Rooms</a>
          </li>

          <li className="hover:text-amber-500 cursor-pointer transition">
            <a href="#services">Services</a>
          </li>

          <li className="hover:text-amber-500 cursor-pointer transition">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* CTA BUTTON */}
        <button
          className="border border-(--royal)
text-(--royal)
px-6 py-2 rounded-full
hover:bg-(--royal)
hover:text-white
transition
"
        >
          <Link href="#contact">Book Your Stay</Link>
          
        </button>
      </div>
    </nav>
  );
}
