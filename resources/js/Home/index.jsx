import React from 'react';
import Nav from '../Components/Nav';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Banner from './Banner';

import { motion } from 'framer-motion';
import { FaHandsHelping } from 'react-icons/fa';
import HomeAboutSection from './HomeAboutSection';
import HomeFilesSection from './HomeFilesSection';
import HomeGallerySection from './HomeGallerySection';
import HomeJoinUsSection from './HomeJoinUsSection';

const Home = (props) => {
  return (
    <>
      <Header />
      <Nav />

      <div className="spacer"></div>

      <motion.div
        className="text-center py-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="font-weight-bold Hellow-Home">
          <FaHandsHelping className="Hellow-in-Home mr-2" size={28} />
          <span>أهلا بيكم في موقع </span>
          <span className="Hellow-in-Home">صناع الحياة الإسماعيلية</span>
        </h2>
      </motion.div>

      <Banner sliders={props.sliders}/>

      <div className="spacer"></div>
      <HomeAboutSection />
      <div className="spacer"></div>
      <HomeFilesSection files={props.committee}/>
      <div className="spacer"></div>
      <HomeGallerySection />
      <div className="spacer"></div>
      <HomeJoinUsSection />

      <Footer />
    </>
  );
};

export default Home;
