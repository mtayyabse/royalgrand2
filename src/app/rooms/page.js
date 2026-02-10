"use client";

import { rooms } from "../../../data/rooms";
import Image from "next/image";
import { motion } from "framer-motion";

export default function RoomsPage() {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen py-20">

      <h1 className="text-5xl font-bold text-center mb-16">
        Our Luxury Rooms
      </h1>

      <div className="max-w-6xl mx-auto space-y-20 px-6">
        {rooms.map((room, index) => (
          <motion.div
            key={room.id}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            {/* IMAGE */}
            <div className="overflow-hidden rounded-3xl shadow-2xl w-full md:w-1/2">
              <Image
                src={room.image}
                alt={room.title}
                width={600}
                height={400}
                className="hover:scale-110 transition duration-700 object-cover"
              />
            </div>

            {/* INFO */}
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-3">
                {room.title}
              </h2>

              <p className="text-gray-600 mb-4">
                Perfect for {room.capacity}. Designed with comfort,
                elegance, and modern facilities.
              </p>

              <p className="text-4xl font-bold text-blue-600 mb-6">
                PKR {room.price}
                <span className="text-lg text-gray-500"> / night</span>
              </p>

              <a
                href="#contact"
                className="bg-blue-600 text-white px-7 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
              >
                Book This Room
              </a>
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  );
}
