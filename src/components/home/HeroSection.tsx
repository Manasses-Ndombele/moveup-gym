import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="font-lato font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            MoveUp
            <span className="block text-moveup-yellow">Premium Gym</span>
          </h1>

          <p className="text-xl text-white/90 mb-4 font-body">
            Promoção especial: 25% OFF na matrícula neste mês.
          </p>

          <div className="flex items-center gap-4 mb-8">
            <span className="text-2xl text-white/60 line-through">AOA 400</span>
            <span className="text-4xl font-bold text-moveup-yellow">AOA 300</span>
          </div>

          <button className="bg-moveup-yellow text-moveup-blue font-lato font-bold text-lg px-8 py-4 rounded-full hover:bg-moveup-yellow-secondary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Quero aproveitar
          </button>

          <p className="text-white/80 text-lg mt-8 font-body italic">
            "DE ONDE VOCÊ ESTÁ PARA ONDE VOCÊ QUER CHEGAR."
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;