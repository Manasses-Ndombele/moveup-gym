import React from 'react';

const GallerySection = () => {
  const galleryImages = [
    'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/13896069/pexels-photo-13896069.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/13885346/pexels-photo-13885346.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/703016/pexels-photo-703016.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3757941/pexels-photo-3757941.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/6339446/pexels-photo-6339446.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1552244/pexels-photo-1552244.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-lato font-black text-4xl sm:text-5xl text-moveup-blue mb-4">
            Nossas Instalações
          </h2>
          <p className="text-xl text-gray-600 font-body max-w-2xl mx-auto">
            Experimente treinos premium em nossas instalações de última geração
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={image}
                alt={`Instalação da academia ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;