// HomeFilesSection.jsx
import React from "react";
import FileCard from "./FileCard";
import {
  FaHandshake, FaMagnet, FaCar, FaVideo,
  FaBaby, FaShoppingBag, FaLaptopCode,
  FaStar, FaSeedling, FaUniversity, FaClipboard,
  FaMoneyBillWave, FaTools, FaBullhorn
} from "react-icons/fa";

// const files = [
//   { title: "الدعم والتواصل", icon: FaHandshake, path: "/files/support" },
//   { title: "الجذب", icon: FaMagnet, path: "/Attraction" },
//   { title: "هنوصلك", icon: FaCar, path: "/files/delivery" },
//   { title: "الميديا", icon: FaVideo, path: "/files/media" },
//   { title: "أنشطة الأطفال", icon: FaBaby, path: "/files/kids" },
//   { title: "المعارض", icon: FaShoppingBag, path: "/files/exhibitions" },
//   { title: "IT و ضبط العضوية", icon: FaLaptopCode, path: "/files/it" },
//   { title: "قدوة", icon: FaStar, path: "/files/qodwa" },
//   { title: "تنمية", icon: FaSeedling, path: "/files/development" },
//   { title: "المنح والشراكات", icon: FaUniversity, path: "/files/grants" },
//   { title: "إدارة حالة", icon: FaClipboard, path: "/files/case" },
//   { title: "تمويل", icon: FaMoneyBillWave, path: "/files/funding" },
//   { title: "تنفيذ", icon: FaTools, path: "/files/implementation" },
//   { title: "التوعية", icon: FaBullhorn, path: "/files/awareness" },
// ];

const HomeFilesSection = ({ files }) => {
  return (
    <div className="container my-5">
      <h3 className="home-file-title text-center mb-4">ملفات صناع الحياة</h3>
      <div className="row">
        {files.map((file, index) => (
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
            <FileCard
              title={file.name}
              Icon={file.icon}
              path={file.name}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeFilesSection;
