import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import AboutHero from './AboutHero';
import AboutMissionVision from './AboutMissionVision';
import AboutNationalAlliance from './AboutNationalAlliance';
import AboutPrograms from './AboutPrograms';
import AboutIsmailiaBranch from './AboutIsmailiaBranch';
import AboutImpact from './AboutImpact';
import AboutGallery from './AboutGallery';
import AboutOfficialHub from './AboutOfficialHub';
import AboutCTA from './AboutCTA';

export default function AboutPage() {
  return (
    <MainLayout>
      <AboutHero />
      <AboutMissionVision />
      <AboutNationalAlliance />
      <AboutPrograms />
      <AboutIsmailiaBranch />
      <AboutImpact />
      <AboutGallery />
      <AboutOfficialHub />
      <AboutCTA />
    </MainLayout>
  );
}
