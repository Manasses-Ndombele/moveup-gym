import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import MapView from './MapView';

const ContactSection = () => {
  return (
    <section className="py-20 bg-moveup-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-lato font-black text-4xl sm:text-5xl text-moveup-blue mb-4">
            Visite-nos
          </h2>
          <p className="text-xl text-gray-600 font-body max-w-2xl mx-auto">
            Encontre-nos e comece sua transformação hoje
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Location */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <MapPin className="h-8 w-8 text-moveup-yellow mr-4" />
              <h3 className="font-lato font-bold text-2xl text-moveup-blue">Localização</h3>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-700 font-body text-lg mb-4">
                Rua Fitness, 123, Centro<br />
                São Paulo, SP 01234-567
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64">
              <MapView />
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="font-lato font-bold text-2xl text-moveup-blue mb-8">
              Informações de Contato
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-moveup-yellow mr-4" />
                <div>
                  <p className="font-body font-semibold text-moveup-blue">E-mail</p>
                  <a 
                    href="mailto:info@moveupgym.com" 
                    className="text-gray-600 hover:text-moveup-yellow transition-colors"
                  >
                    info@moveupgym.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="h-6 w-6 text-moveup-yellow mr-4" />
                <div>
                  <p className="font-body font-semibold text-moveup-blue">Telefone</p>
                  <a 
                    href="tel:+244923224456" 
                    className="text-gray-600 hover:text-moveup-yellow transition-colors"
                  >
                    +244 923 224 456
                  </a>
                </div>
              </div>

              <div className="mt-8 p-6 bg-moveup-blue/5 rounded-lg">
                <h4 className="font-lato font-bold text-moveup-blue mb-3">Horário de Funcionamento</h4>
                <div className="space-y-2 font-body text-gray-700">
                  <p>Segunda - Sexta: 05:00 - 23:00</p>
                  <p>Sábado: 06:00 - 22:00</p>
                  <p>Domingo: 07:00 - 21:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;