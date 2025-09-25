import React from 'react';
import HeroSection from '../components/home/HeroSection';
import DifferentialsSection from '../components/home/DifferentialsSection';
import GallerySection from '../components/home/GallerySection';
import TeamSection from '../components/home/TeamSection';
import PlansSection from '../components/home/PlansSection';
import ContactSection from '../components/home/ContactSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <DifferentialsSection />
      <GallerySection />
      <TeamSection />
      <PlansSection />
      <ContactSection />
    </div>
  );
};

export default Home;