import React from 'react';
import { Check } from 'lucide-react';

const PlansSection = () => {
  const plans = [
    {
      name: 'Básico',
      price: 'AOA 150',
      period: '/mês',
      features: [
        'Acesso aos equipamentos da academia',
        'Acesso ao vestiário',
        'Avaliação física básica',
        'Aulas em grupo (limitadas)',
      ],
      popular: false,
    },
    {
      name: 'Intermediário',
      price: 'AOA 250',
	period: '/mês',
      features: [
        'Todos os recursos do Básico',
        'Sessões com personal trainer (4/mês)',
        'Orientação nutricional',
        'Todas as aulas em grupo',
        'Análise de composição corporal',
        'Acesso à área de recuperação',
      ],
      popular: true,
    },
    {
      name: 'Premium',
      price: 'AOA 400',
      period: '/mês',
      features: [
        'Todos os recursos do Intermediário',
        'Sessões ilimitadas com personal trainer',
        'Planos alimentares personalizados',
        'Massoterapia',
        'Vestiário VIP',
        'Agendamento prioritário',
        'Planos de treino em casa',
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-lato font-black text-4xl sm:text-5xl text-moveup-blue mb-4">
            Escolha Seu Plano
          </h2>
          <p className="text-xl text-gray-600 font-body max-w-2xl mx-auto">
            Selecione o plano perfeito para sua jornada fitness
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl shadow-lg border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-default ${
                plan.popular
                  ? 'border-moveup-yellow scale-105 z-10'
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-moveup-yellow text-moveup-blue px-6 py-2 rounded-full text-sm font-bold">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <h3 className="font-lato font-bold text-2xl text-moveup-blue mb-4">
                  {plan.name}
                </h3>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-moveup-blue">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 font-body">{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-moveup-yellow mr-3 flex-shrink-0" />
                      <span className="font-body text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;