import React from 'react';
import { Check, X } from 'lucide-react';

const PlansComparisonSection = () => {
  const features = [
    {
      category: 'Acesso à Academia',
      items: [
        { feature: 'Acesso aos equipamentos da academia', basic: true, intermediate: true, premium: true },
        { feature: 'Acesso ao vestiário', basic: true, intermediate: true, premium: true },
        { feature: 'Vestiário VIP', basic: false, intermediate: false, premium: true },
        { feature: 'Acesso 24/7', basic: false, intermediate: true, premium: true },
      ]
    },
    {
      category: 'Treino e Suporte',
      items: [
        { feature: 'Avaliação física básica', basic: true, intermediate: true, premium: true },
        { feature: 'Sessões com personal trainer', basic: '0/mês', intermediate: '4/mês', premium: 'Ilimitado' },
        { feature: 'Planos de treino personalizados', basic: false, intermediate: true, premium: true },
        { feature: 'Suporte 24/7 do treinador', basic: false, intermediate: false, premium: true },
      ]
    },
    {
      category: 'Aulas e Programas',
      items: [
        { feature: 'Aulas em grupo', basic: 'Limitadas', intermediate: 'Todas as aulas', premium: 'Todas + Prioridade' },
        { feature: 'Programas especializados', basic: false, intermediate: true, premium: true },
        { feature: 'Planos de treino em casa', basic: false, intermediate: false, premium: true },
      ]
    },
    {
      category: 'Saúde e Bem-estar',
      items: [
        { feature: 'Análise de composição corporal', basic: false, intermediate: true, premium: true },
        { feature: 'Orientação nutricional', basic: false, intermediate: true, premium: true },
        { feature: 'Planos alimentares personalizados', basic: false, intermediate: false, premium: true },
        { feature: 'Massoterapia', basic: false, intermediate: false, premium: true },
        { feature: 'Consultoria de suplementos', basic: false, intermediate: false, premium: true },
      ]
    },
    {
      category: 'Tecnologia e Extras',
      items: [
        { feature: 'Acesso ao aplicativo móvel', basic: true, intermediate: true, premium: true },
        { feature: 'Acompanhamento de progresso', basic: false, intermediate: true, premium: true },
        { feature: 'Acesso à área de recuperação', basic: false, intermediate: true, premium: true },
        { feature: 'Passes para convidados', basic: '0/mês', intermediate: '0/mês', premium: '2/mês' },
        { feature: 'Agendamento prioritário', basic: false, intermediate: false, premium: true },
      ]
    }
  ];

  const renderFeatureValue = (value: any) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="h-5 w-5 text-green-500 mx-auto" />
      ) : (
        <X className="h-5 w-5 text-red-400 mx-auto" />
      );
    }
    return <span className="text-sm font-medium text-gray-700">{value}</span>;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-lato font-black text-4xl sm:text-5xl text-moveup-blue mb-4">
            Comparação Detalhada
          </h2>
          <p className="text-xl text-gray-600 font-body max-w-2xl mx-auto">
            Compare todos os recursos entre nossos planos para encontrar o ajuste perfeito para suas necessidades
          </p>
        </div>

        <div className="overflow-x-auto bg-white rounded-2xl shadow-lg border border-gray-200">
          <table className="w-full">
            <thead>
              <tr className="bg-moveup-gray">
                <th className="py-4 px-6 text-left font-lato font-bold text-moveup-blue">
                  Recursos
                </th>
                <th className="py-4 px-6 text-center font-lato font-bold text-moveup-blue">
                  Básico
                  <div className="text-sm font-normal text-gray-600">AOA 150/mês</div>
                </th>
                <th className="py-4 px-6 text-center font-lato font-bold text-moveup-blue bg-moveup-yellow/20">
                  Intermediário
                  <div className="text-sm font-normal text-gray-600">AOA 250/mês</div>
                  <div className="text-xs text-moveup-yellow font-bold">POPULAR</div>
                </th>
                <th className="py-4 px-6 text-center font-lato font-bold text-moveup-blue">
                  Premium
                  <div className="text-sm font-normal text-gray-600">AOA 400/mês</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((category, categoryIndex) => (
                <React.Fragment key={categoryIndex}>
                  <tr className="bg-gray-50">
                    <td colSpan={4} className="py-3 px-6 font-lato font-bold text-moveup-blue text-lg">
                      {category.category}
                    </td>
                  </tr>
                  {category.items.map((item, itemIndex) => (
                    <tr key={itemIndex} className="border-b border-gray-100 hover:bg-gray-50/50">
                      <td className="py-4 px-6 font-body text-gray-700">
                        {item.feature}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {renderFeatureValue(item.basic)}
                      </td>
                      <td className="py-4 px-6 text-center bg-moveup-yellow/5">
                        {renderFeatureValue(item.intermediate)}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {renderFeatureValue(item.premium)}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-moveup-blue/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-lato font-bold text-2xl text-moveup-blue mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="font-body text-gray-600 mb-6">
              Nossa equipe está aqui para ajudá-lo a escolher o plano perfeito para sua jornada fitness. 
              Entre em contato para uma consulta personalizada.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <button className="bg-moveup-yellow text-moveup-blue font-lato font-bold px-8 py-3 rounded-lg hover:bg-moveup-yellow-secondary transform hover:scale-105 transition-all duration-300">
                Entre em Contato
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansComparisonSection;