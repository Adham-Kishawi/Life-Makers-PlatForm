import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import Banner from './Banner';
import HomeAboutSection from './HomeAboutSection';
import HomeVideoSection from './HomeVideoSection';
import HomeFilesSection from './HomeFilesSection';
import HomeGallerySection from './HomeGallerySection';
import HomeJoinUsSection from './HomeJoinUsSection';

export default function Home(props) {
  return (
    <MainLayout>
      {/* Hero & Dynamic 3D Slider */}
      <Banner sliders={props.sliders} />

      {/* About Foundation Highlights */}
      <HomeAboutSection />

      {/* Cinematic Interactive Video Showcase */}
      <HomeVideoSection />

      {/* Committees & Files Grid (All 13 Committees) */}
      <HomeFilesSection files={props.committee} />

      {/* Field Work Gallery */}
      <HomeGallerySection />

      {/* Volunteer Call to Action */}
      <HomeJoinUsSection />
    </MainLayout>
  );
}
