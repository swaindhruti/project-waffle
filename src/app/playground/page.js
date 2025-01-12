'use client';
import React from 'react';

import AboutUs from '@/components/about-us/about-us';
import CampusAmbasador from '@/components/campusAmbasador/CampusAmbasador';
import CommunityPartnerSection from '@/components/communityPartners/CommunityPartners';
import Gallery from '@/components/gallery/gallery';
import Hero from '@/components/hero/hero';
import Prizes from '@/components/prizes/prizes';
import Questions from '@/components/questions/Questions';
import { StatsMain } from '@/components/stats/stats-main';
import Timeline from '@/components/timeline/timeline';
import { Footer } from '@/components/Footer/Footer';

const Playground = () => {
  return (

    <div className='flex flex-col items-center justify-center w-full h-full px-5'>

      <Hero />
      <AboutUs />
      <StatsMain />
      <Prizes />
      <Gallery /> 
      <Timeline />
      <Footer />
      <CommunityPartnerSection />
      <CampusAmbasador />
      <Questions />
    </div>
  );
};

export default Playground;
