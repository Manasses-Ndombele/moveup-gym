import React from 'react';
import { Link } from 'react-router-dom';

const PTCTASection = () => {
  return (
    <section className="py-20 bg-moveup-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-lato font-black text-4xl sm:text-5xl lg:text-6xl mb-6">
            Comece sua transformação
            <span className="block text-moveup-yellow">hoje</span>
          </h2>
          
          <p className="text-xl text-white/90 font-body mb-4 max-w-3xl mx-auto leading-relaxed">
            Não espere mais um dia para se tornar a melhor versão de si mesmo. 
            Nossos treinadores especialistas estão prontos para guiá-lo através de uma jornada personalizada 
            que transformará não apenas seu corpo, mas todo o seu estilo de vida.
          </p>
          
          <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
            <Link
              to="/plans"
              className="inline-block bg-moveup-yellow text-moveup-blue font-lato font-bold text-lg px-8 py-4 rounded-full hover:bg-moveup-yellow-secondary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Ver Planos
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-lato font-black text-moveup-yellow mb-2">500+</div>
              <p className="font-body text-white/80">Histórias de Sucesso</p>
            </div>
            <div>
              <div className="text-3xl font-lato font-black text-moveup-yellow mb-2">15+</div>
              <p className="font-body text-white/80">Treinadores Especialistas</p>
            </div>
            <div>
              <div className="text-3xl font-lato font-black text-moveup-yellow mb-2">24/7</div>
              <p className="font-body text-white/80">Suporte Disponível</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PTCTASection;