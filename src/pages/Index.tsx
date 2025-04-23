import React from 'react';
import Header from '@/components/Header';
import CareerIntro from '@/components/CareerIntro';
import LifeAtSunstone from '@/components/LifeAtSunstone';
import MeetLeaders from '@/components/MeetLeaders';
import WhyJoinUs from '@/components/WhyJoinUs';
import LocationSection from '@/components/LocationSection';
import HiringSection from '@/components/HiringSection';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <CareerIntro />
        <LifeAtSunstone />
        <MeetLeaders />
        <WhyJoinUs />
        <LocationSection />
        <HiringSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
