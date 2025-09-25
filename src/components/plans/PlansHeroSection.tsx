import React from 'react';
import { Check } from 'lucide-react';

const PlansHeroSection = () => {
  const plans = [
    {
      name: 'Básico',
      price: 'AOA 150',
      period: '/mês',
      originalPrice: 'AOA 200',
      features: [
        'Acesso aos equipamentos da academia',
        'Acesso ao vestiário',
        'Avaliação física básica',
        'Aulas em grupo (limitadas)',
        'Acesso ao aplicativo móvel',
      ],
      popular: false,
      description: 'Perfeito para começar',
    },
    {
      name: 'Intermediário',
      price: 'AOA 250',
      period: '/mês',
      originalPrice: 'AOA 330',
      features: [
        'Todos os recursos do Básico',
        'Sessões com personal trainer (4/mês)',
        'Orientação nutricional',
        'Todas as aulas em grupo',
        'Análise de composição corporal',
        'Acesso à área de recuperação',
        'Planos de treino personalizados',
        'Acompanhamento de progresso',
      ],
      popular: true,
      description: 'Escolha mais popular',
    },
    {
      name: 'Premium',
      price: 'AOA 400',
      period: '/mês',
      originalPrice: 'AOA 530',
      features: [
        'Todos os recursos do Intermediário',
        'Sessões ilimitadas com personal trainer',
        'Planos alimentares personalizados',
        'Massoterapia',
        'Vestiário VIP',
        'Agendamento prioritário',
        'Planos de treino em casa',
        'Consultoria de suplementos',
        'Suporte 24/7 do treinador',
        'Passes para convidados (2/mês)',
      ],
      popular: false,
      description: 'Experiência fitness definitiva',
    },
  ];

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-moveup-gray to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-lato font-black text-4xl sm:text-5xl lg:text-6xl text-moveup-blue mb-6">
            Escolha Seu
            <span className="block text-moveup-yellow">Plano Perfeito</span>
          </h1>
          <p className="text-xl text-gray-600 font-body max-w-3xl mx-auto mb-8">
            Selecione o plano que se adequa aos seus objetivos e orçamento. Todos os planos incluem acesso às nossas instalações premium e orientação especializada.
          </p>
          
          <div className="bg-moveup-yellow/10 border border-moveup-yellow rounded-lg p-4 max-w-md mx-auto">
            <p className="font-lato font-bold text-moveup-blue">
              🎉 Oferta Especial: 25% OFF em todos os planos neste mês!
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-default ${
                plan.popular
                  ? 'border-moveup-yellow scale-105 z-10'
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-moveup-yellow text-moveup-blue px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="font-lato font-bold text-2xl text-moveup-blue mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 font-body text-sm mb-4">
                    {plan.description}
                  </p>
                  
                  <div className="mb-4">
                    <span className="text-2xl text-gray-400 line-through mr-2">
                      {plan.originalPrice}
                    </span>
                    <div className="text-4xl font-bold text-moveup-blue">
                      {plan.price}
                      <span className="text-lg text-gray-600 font-normal">{plan.period}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-moveup-yellow mr-3 flex-shrink-0 mt-0.5" />
                      <span className="font-body text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="font-body text-gray-600 mb-4">
            Todos os planos incluem garantia de reembolso de 7 dias
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <span>✓ Sem compromisso</span>
            <span>✓ Cancele a qualquer momento</span>
            <span>✓ Política de reembolso total</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansHeroSection;