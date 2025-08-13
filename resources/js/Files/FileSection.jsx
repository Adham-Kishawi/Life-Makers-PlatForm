import React from 'react';
import { motion } from 'framer-motion';
import FileCard from './FileCard';
import ScrollLine from './ScrollLine';
import Nav from '../Components/Nav';
import Header from '../Components/Header';
import Footer from '../Components/Footer';


const FileSection = ({ title, description, icon, items }) => {
  
  return (
    <div className="file-section-wrapper footer-respons">
      <ScrollLine />
      <Header />
      <Nav />



      <div className="spacer"></div>


      {/* Section Title and Description */}
      <div className="container text-center mb-5">
        <motion.h2
          className="section-title mb-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {icon && <span className="me-2">{icon}</span>}
          {title}
        </motion.h2>

        <motion.p
          className="section-description lead"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >

        <div dangerouslySetInnerHTML={{ __html: description}}></div>
        </motion.p>
      </div>

      {/* Cards Section */}
      <div className="container">
        <div className="row justify-content-center">
          {items.map((item, index) => (
            <FileCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FileSection;
