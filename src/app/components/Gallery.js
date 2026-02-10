"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  { src: "/g7.jpeg" },
  { src: "/g8.jpeg" },
  { src: "/g9.jpeg" },
  { src: "/g4.jpeg" },
  { src: "/g5.jpeg" },
  { src: "/g6.jpeg" },
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <section className="py-28 bg-[#0f172a]">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-white text-5xl font-bold text-center mb-6">
          Experience Our Space
        </h2>

        <p className="text-gray-400 text-center mb-16">
          Take a closer look at the comfort and elegance waiting for you.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className="overflow-hidden rounded-3xl cursor-pointer group"
            >
              <img
                src={img.src}
                className="h-[260px] w-full object-cover 
                group-hover:scale-110 transition duration-700"
              />
            </div>
            
          ))}

        </div>

        <Lightbox
          slides={images}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />

      </div>
    </section>
  );
}
