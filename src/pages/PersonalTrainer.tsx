import React from 'react';
import PTHeroSection from '../components/personal-trainer/PTHeroSection';
import PTProfessionalsSection from '../components/personal-trainer/PTProfessionalsSection';
import PTTrainingPlansSection from '../components/personal-trainer/PTTrainingPlansSection';
import PTCTASection from '../components/personal-trainer/PTCTASection';

const PersonalTrainer = () => {
  return (
    <div className="min-h-screen">
      <PTHeroSection />
      <PTProfessionalsSection />
      <PTTrainingPlansSection />
      <PTCTASection />
    </div>
  );
};

export default PersonalTrainer;