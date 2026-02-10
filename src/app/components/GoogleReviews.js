"use client";
import { useEffect } from "react";

export default function GoogleReviews() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apps.elfsight.com/p/platform.js";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
          What Our Guests Say ⭐
        </h2>

        <p className="text-gray-600 mb-12">
          Real experiences from our valued guests.
        </p>

        <div className="elfsight-app-4b85b18b-b6cf-426e-9c7f-dae0748fa1c5"></div>

      </div>
    </section>
  );
}
