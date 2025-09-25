import React from 'react';
import { Shield, Award, Users, Target } from 'lucide-react';

const PTProfessionalsSection = () => {
  const professionals = [
    {
      name: 'Carlos Silva',
      specialty: 'Treino de Força',
      experience: '8 anos',
      image: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=400',
      certifications: ['ACSM Certificado', 'Especialista em Nutrição'],
    },
    {
      name: 'Ana Rodriguez',
      specialty: 'Treino Funcional',
      experience: '6 anos',
      image: 'https://images.pexels.com/photos/13451729/pexels-photo-13451729.jpeg?auto=compress&cs=tinysrgb&w=400',
      certifications: ['CrossFit Nível 2', 'Especialista em Mobilidade'],
    },
    {
      name: 'Marcus Johnson',
      specialty: 'CrossFit',
      experience: '10 anos',
      image: 'https://images.pexels.com/photos/5327457/pexels-photo-5327457.jpeg?auto=compress&cs=tinysrgb&w=400',
      certifications: ['CrossFit Nível 3', 'Levantamento Olímpico'],
    },
    {
      name: 'Sofia Martinez',
      specialty: 'Emagrecimento',
      experience: '7 anos',
      image: 'https://images.pexels.com/photos/8846089/pexels-photo-8846089.jpeg?auto=compress&cs=tinysrgb&w=400',
      certifications: ['NASM Certificado', 'Coach Comportamental'],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-lato font-black text-4xl sm:text-5xl text-moveup-blue mb-4">
            Nossos Profissionais
          </h2>
          <p className="text-xl text-gray-600 font-body max-w-3xl mx-auto">
            Conheça nossa equipe de profissionais certificados, cada um trazendo anos de experiência 
            e conhecimento especializado para ajudá-lo a alcançar seus objetivos fitness
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {professionals.map((trainer, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-gray-100"
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
              </div>
              
              <div className="p-6 cursor-default">
                <h3 className="font-lato font-bold text-xl text-moveup-blue mb-2">
                  {trainer.name}
                </h3>
                <p className="text-moveup-yellow font-body font-semibold mb-1">
                  {trainer.specialty}
                </p>
                <p className="text-gray-600 font-body text-sm mb-4">
                  {trainer.experience} de experiência
                </p>
                
                <div className="space-y-1">
                  {trainer.certifications.map((cert, certIndex) => (
                    <p key={certIndex} className="text-xs text-gray-500 font-body">
                      {cert}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-moveup-gray rounded-xl p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="h-12 w-12 text-moveup-yellow mx-auto mb-4" />
              <h3 className="font-lato font-bold text-lg text-moveup-blue mb-2">
                Excelência Certificada
              </h3>
              <p className="font-body text-gray-600">
                Todos os treinadores possuem certificações reconhecidas e educação continuada
              </p>
            </div>
            
            <div className="text-center">
              <Users className="h-12 w-12 text-moveup-yellow mx-auto mb-4" />
              <h3 className="font-lato font-bold text-lg text-moveup-blue mb-2">
                Abordagem Personalizada
              </h3>
              <p className="font-body text-gray-600">
                Atenção individual e programas de treinamento customizados
              </p>
            </div>
            
            <div className="text-center">
              <Target className="h-12 w-12 text-moveup-yellow mx-auto mb-4" />
              <h3 className="font-lato font-bold text-lg text-moveup-blue mb-2">
                Foco em Resultados
              </h3>
              <p className="font-body text-gray-600">
                Histórico comprovado de ajudar clientes a alcançar seus objetivos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PTProfessionalsSection;