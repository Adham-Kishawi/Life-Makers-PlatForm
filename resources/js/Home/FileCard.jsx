// FileCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";

const FileCard = ({ title, Icon, path, index }) => {

  return (
    <Link href={`/committee/${path}`} style={{ textDecoration: "none" }}>
      <motion.div
        className="home-file-card p-3 text-center rounded shadow-sm"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1,
        }}
        whileHover={{ scale: 1.05 }}
        viewport={{ once: false }}
      >
        {/* <Icon size={36} className="home-file-icon mb-2" /> */}
        <div dangerouslySetInnerHTML={{ __html: Icon }}></div>
        <h5 className="home-file-title font-weight-bold m-0">{title}</h5>
      </motion.div>
    </Link>
  );
};

export default FileCard;
