
import React from 'react';
import MainLayout from '../components/Layout/MainLayout';
import HeroSection from '../components/Home/HeroSection';
import FeaturedProjects from '../components/Home/FeaturedProjects';
import LatestPublications from '../components/Home/LatestPublications';
import TeamSection from '../components/Home/TeamSection';
import StatisticsSection from '../components/Home/StatisticsSection';
import NewsletterSection from '../components/Home/NewsletterSection';

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturedProjects />
      <LatestPublications />
      <StatisticsSection />
      <TeamSection />
      <NewsletterSection />
    </MainLayout>
  );
};

export default Index;
