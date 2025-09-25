import React from 'react';

const PTHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1431283/pexels-photo-1431283.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="font-lato font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Seus resultados,
            <span className="block text-moveup-yellow">guiados por profissionais de elite</span>
          </h1>

          <p className="text-xl text-white/90 mb-8 font-body max-w-3xl mx-auto">
            Na MoveUp, você treina em um ambiente premium, com equipamentos de última geração 
            e orientação de personal trainers altamente qualificados. Oferecemos planos personalizados 
            para que você possa progredir com segurança, motivação e resultados reais.
          </p>

          <button className="bg-moveup-yellow text-moveup-blue font-lato font-bold text-lg px-8 py-4 rounded-full hover:bg-moveup-yellow-secondary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Comece a Treinar Hoje
          </button>
        </div>
      </div>
    </section>
  );
};

export default PTHeroSection;