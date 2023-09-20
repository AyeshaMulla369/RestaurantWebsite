import React from 'react';
import HeroSection from './HeroSection';
import Footer from './Footer';
import Gallery from './GalleryRes';
import Menu from './Menu';

function Home() {

  return (
    <>
      <HeroSection />
      <Gallery/>
      <Menu/>
      <Footer/>
    </>
    
  );
}

export default Home