import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter/X' },
  ];

  return (
    <footer className="bg-moveup-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center items-center mb-6">
            <img
              src="/public/moveup logo.png"
              alt="MoveUp Logo"
              className="h-20 w-auto"
            />
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="p-3 rounded-full bg-moveup-blue/20 hover:bg-moveup-yellow transition-all duration-300 hover:scale-110"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <div className="text-gray-400 text-sm">
            <p>&copy; 2025 - <a href="https://manassesndombele.vercel.app/" className="underline">Manassés Ndombele</a>. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
