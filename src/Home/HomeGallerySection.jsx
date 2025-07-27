// HomeGallerySection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  "Images/Gallery/GalleryHome (1).jpg",
  "Images/Gallery/GalleryHome (2).jpg",
  "Images/Gallery/GalleryHome (3).jpg",
  "Images/Gallery/GalleryHome (4).jpg",
  "Images/Gallery/GalleryHome (5).jpg",
  "Images/Gallery/GalleryHome (6).jpg",


];

const HomeGallerySection = () => {
  return (
    <div className="container my-5">
      <h3 className="home-file-title text-center mb-4">من فعالياتنا</h3>
      <div className="row">
        {galleryImages.map((src, index) => (
          <div key={index} className="col-6 col-md-4 mb-4">
            <motion.div
              className="gallery-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false }}
            >
              <img
                src={src}
                alt={` ${index + 1}`}
                className="img-fluid rounded shadow-sm gallery-img"
              />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeGallerySection;
