import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const FileCard = ({ item, index }) => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const directionX = index % 2 === 0 ? 300 : -300;

  return (
    <div className="col-12 col-md-6 d-flex justify-content-center mb-4 file-card-wrapper">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: directionX }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: directionX }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        className="file-card-motion"
      >
        <div className="file-card  p-3 rounded shadow">
          <h5 className="file-card-title mb-3 text-center">
            {item.title}
          </h5>
          <img
            src={`/storage/${item.image}`}
            alt={item.title}
            className="file-card-image img-fluid rounded"
          />
          <p className="file-card-description text-center" dangerouslySetInnerHTML={{ __html: item.description }}></p>
        </div>
      </motion.div>
    </div>
  );
};

export default FileCard;
