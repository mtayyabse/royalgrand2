import React from 'react'

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white" id='why'>
  
  <div className="max-w-6xl mx-auto px-6 text-center">
    
    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
      Why Guests Love Staying With Us
    </h2>

    <p className="text-gray-600 max-w-2xl mx-auto mb-16">
      We combine comfort, affordability, and exceptional service
      to give you a stay that feels like home.
    </p>

    <div className="grid md:grid-cols-3 gap-10">

      <div className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-white">
        <div className="text-4xl mb-4">📍</div>
        <h3 className="text-2xl font-semibold mb-2 text-black">
          Prime Location
        </h3>
        <p className="text-gray-600">
          Located near key city areas with easy transport access.
        </p>
      </div>

      <div className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-white">
        <div className="text-4xl mb-4">✨</div>
        <h3 className="text-2xl font-semibold mb-2 text-black">
          Premium Comfort
        </h3>
        <p className="text-gray-600">
          Spotless rooms, cozy beds, and peaceful ambiance.
        </p>
      </div>

      <div className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-white">
        <div className="text-4xl mb-4">🕑</div>
        <h3 className="text-2xl font-semibold mb-2 text-black">
          24/7 Assistance
        </h3>
        <p className="text-gray-600">
          Our team is always ready to make your stay smooth.
        </p>
      </div>

    </div>

  </div>
</section>

  )
}

export default WhyChooseUs