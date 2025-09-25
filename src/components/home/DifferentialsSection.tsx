import React from 'react';
import { Check, Users, Award, Target } from 'lucide-react';

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: Award,
      title: 'Equipamentos de última geração',
      description: 'Tecnologia mais avançada para resultados otimizados',
    },
    {
      icon: Target,
      title: 'Planos personalizados',
      description: 'Treinos customizados para seus objetivos',
    },
    {
      icon: Users,
      title: 'Profissionais verificados',
      description: 'Treinadores certificados e experientes',
    },
  ];

  return (
    <section className="relative bg-moveup-gray py-16 -mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 pt-16">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-slide-up cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-moveup-yellow/10 rounded-full mb-6">
                <item.icon className="h-8 w-8 text-moveup-yellow" />
              </div>
              <h3 className="font-lato font-bold text-xl text-moveup-blue mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 font-body">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;