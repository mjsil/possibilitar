"use client";
import Carousel from './components/Carousel';
import GridSection from './components/GridSection';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import FeatureSection2 from './components/FeatureSection2';
import Card from './components/Card';

export default function Home() {
  return (
    <>
      <Carousel />
      <GridSection />
      <Card />
      {/* <HeroSection /> */}
      <FeatureSection />
      <FeatureSection2 />
    </>
  )
}
