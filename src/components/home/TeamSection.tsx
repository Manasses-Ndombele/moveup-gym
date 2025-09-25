import React from 'react';
import { ChevronLeft, ChevronRight, Shield } from 'lucide-react';

const TeamSection = () => {
  const trainers = [
    {
      name: 'Carlos Silva',
      specialty: 'Treino de Força',
      image: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Ana Rodriguez',
      specialty: 'Treino Funcional',
      image: 'https://images.pexels.com/photos/13451729/pexels-photo-13451729.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Marcus Johnson',
      specialty: 'CrossFit',
      image: 'https://images.pexels.com/photos/5327457/pexels-photo-5327457.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Sofia Martinez',
      specialty: 'Emagrecimento',
      image: 'https://images.pexels.com/photos/8846089/pexels-photo-8846089.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <section className="py-20 bg-moveup-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-lato font-black text-4xl sm:text-5xl text-moveup-blue mb-4">
            Equipe de Elite
          </h2>
          <p className="text-xl text-gray-600 font-body max-w-2xl mx-auto">
            Treine com profissionais certificados dedicados ao seu sucesso
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-moveup-yellow rounded-full p-2">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-lato font-bold text-lg text-white drop-shadow-lg">
                    {trainer.name}
                  </h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-moveup-blue font-body">
                  Especialista em {trainer.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;