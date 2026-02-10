import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-r from-blue-600 to-[#0f172a] text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Contact & Location
            </h2>

            <p className="text-blue-100 mb-8">
              We are conveniently located near major city attractions, making
              your stay comfortable and accessible.
            </p>

            <div className="space-y-4 text-lg">
              <p>
                📍 <strong>Address:</strong> House No. 60, Street 55, G-9/4 Islamabad
              </p>

              <p>
                📞 <strong>Phone:</strong> +92 300 5399934
              </p>

              <p>
                ✉️ <strong>Email:</strong> royalgrandresidence@gmail.com
              </p>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="tel:+92XXXXXXXXX"
                className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/923005399934"
                className="bg-green-500 px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT SIDE — MAP */}

          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26559.753009479475!2d73.00433921083986!3d33.68386360000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbd007717f80f%3A0x25512734d4bf9b58!2sROYAL%20GRAND%20GUEST%20HOUSE%20ONLY%20FOR%20FAMILIES!5e0!3m2!1sen!2s!4v1770727676020!5m2!1sen!2s"
              className="w-full h-[400px] border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;