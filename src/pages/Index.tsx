
import React from 'react';
import Header from '@/components/Header';
import CareerIntro from '@/components/CareerIntro';
import MeetLeaders from '@/components/MeetLeaders';
import LifeAtSunstone from '@/components/LifeAtSunstone';
import WhyJoinUs from '@/components/WhyJoinUs';
import LocationSection from '@/components/LocationSection';
import HiringSection from '@/components/HiringSection';
import Testimonials from '@/components/Testimonials';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="overflow-hidden">
        <CareerIntro />
        <MeetLeaders />
        <LifeAtSunstone />
        <WhyJoinUs />
        <LocationSection />
        <HiringSection />
        <Testimonials />
      </main>
    </div>
  );
};

export default Index;
