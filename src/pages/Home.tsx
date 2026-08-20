import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import HeroCarousel from '../components/custom/HeroCarousel';
import AIServices from '../components/custom/AIServices';
import OurApproach from '../components/custom/OurApproach';
import StrategicPillars from '../components/custom/StrategicPillars';
import AIProjects from '../components/custom/AIProjects';
import CaseStudies from '../components/custom/CaseStudies';
import AIUseCases from '../components/custom/AIUseCases';
import ImpactMetrics from '../components/custom/ImpactMetrics';
import Leaders from '../components/custom/Leaders';
import TeamPage from '../components/custom/TeamPage';

export const Home = () => {
  const [showTeam, setShowTeam] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="dark bg-background min-h-screen font-manrope text-on-surface selection:bg-primary/30">
      <Navbar />
      <main>
        {showTeam ? (
          <TeamPage onBack={() => setShowTeam(false)} />
        ) : (
          <>
            <HeroCarousel />
            <AIServices />
            <OurApproach />
            <StrategicPillars />
            <AIProjects />
            <CaseStudies />
            <AIUseCases />
            <ImpactMetrics />
            <Leaders onSeeMore={() => setShowTeam(true)} />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};
