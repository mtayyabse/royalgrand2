"use client";

import { motion } from "framer-motion";

const services = [
  { icon: "📶", title: "Free High-Speed WiFi" },
  { icon: "🚗", title: "Secure Car Parking" },
  { icon: "🛍️", title: "Nearby Market" },
  { icon: "🍳", title: "Shared Kitchen" },
  { icon: "🧺", title: "Laundry Service" },
  { icon: "🛎️", title: "24/7 Room Support" },
];

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
          Amenities & Services
        </h2>

        <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
          Enjoy modern facilities designed to make your stay
          comfortable, convenient, and stress-free.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-4">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-black">
                {service.title}
              </h3>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
