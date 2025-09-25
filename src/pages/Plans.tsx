import React from 'react';
import PlansHeroSection from '../components/plans/PlansHeroSection';
import PlansComparisonSection from '../components/plans/PlansComparisonSection';

const Plans = () => {
  return (
    <div className="min-h-screen">
      <PlansHeroSection />
      <PlansComparisonSection />
    </div>
  );
};

export default Plans;