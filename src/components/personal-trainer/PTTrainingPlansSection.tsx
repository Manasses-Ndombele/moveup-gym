import React from 'react';
import { Dumbbell, Heart, Zap, Shield, Baby } from 'lucide-react';

const PTTrainingPlansSection = () => {
  const trainingPlans = [
    {
      icon: Dumbbell,
      title: 'Braços Grandes',
      description: 'Programa focado em construção muscular para desenvolvimento impressionante dos braços com técnicas de sobrecarga progressiva.',
      duration: '8-12 semanas',
      level: 'Intermediário',
    },
    {
      icon: Heart,
      title: 'Resistência',
      description: 'Programa de condicionamento cardiovascular para melhorar a resistência e performance atlética geral.',
      duration: '6-10 semanas',
      level: 'Todos os níveis',
    },
    {
      icon: Zap,
      title: 'Aumento de Força',
      description: 'Programa inspirado no powerlifting projetado para maximizar sua força em movimentos compostos.',
      duration: '10-16 semanas',
      level: 'Avançado',
    },
    {
      icon: Shield,
      title: 'Treinos Saudáveis',
      description: 'Programa de fitness equilibrado promovendo saúde geral, mobilidade e hábitos fitness sustentáveis.',
      duration: 'Contínuo',
      level: 'Iniciante',
    },
    {
      icon: Baby,
      title: 'Recuperação Pós-Parto',
      description: 'Programa especializado para novas mães focando em recuperação segura e reconstrução da força do core.',
      duration: '12-20 semanas',
      level: 'Especializado',
    },
  ];

  return (
    <section className="py-20 bg-moveup-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-lato font-black text-4xl sm:text-5xl text-moveup-blue mb-4">
            PLANOS DE TREINO COM PROPÓSITO
          </h2>
          <p className="text-xl text-gray-600 font-body max-w-3xl mx-auto">
            Cada programa é cuidadosamente projetado com objetivos específicos em mente, 
            garantindo máxima eficácia para sua jornada fitness única
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-8 border border-gray-100 cursor-default"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-moveup-yellow/10 rounded-full mb-6">
                <plan.icon className="h-8 w-8 text-moveup-yellow" />
              </div>
              
              <h3 className="font-lato font-bold text-2xl text-moveup-blue mb-4">
                {plan.title}
              </h3>
              
              <p className="font-body text-gray-600 mb-6 leading-relaxed">
                {plan.description}
              </p>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-body text-gray-500">Duração:</span>
                  <span className="font-body font-semibold text-moveup-blue">{plan.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-body text-gray-500">Nível:</span>
                  <span className="font-body font-semibold text-moveup-blue">{plan.level}</span>
                </div>
              </div>
              
              <button className="w-full mt-6 bg-moveup-blue text-white font-lato font-bold py-3 px-6 rounded-lg hover:bg-moveup-blue/90 transform hover:scale-105 transition-all duration-300">
                Saiba Mais
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PTTrainingPlansSection;