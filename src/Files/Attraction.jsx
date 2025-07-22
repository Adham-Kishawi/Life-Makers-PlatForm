import React from 'react';
import FileSection from './FileSection';
import { FaUsers } from 'react-icons/fa';

const Attraction = () => {
  const items = [
 
    {
      title: 'عيلة الجذب',
       image: "Images/Attraction/Family.jpg",
      description: 'خليك واحد من العيلة',
    },
     {
      title: 'عيلة الجذب',
       image: "Images/Attraction/family (2).jpg",
      description: 'خليك واحد من العيلة',
    },
     {
      title: ' استقبال المتطوعين',
       image: 'Images/Attraction/explain (2).jpg',
      description: 'شرح واضح لكل الملفات',
    },
     {
      title: ' استقبال المتطوعين',
       image: 'Images/Attraction/explain.jpg',
      description: 'شرح واضح لكل الملفات',
    },
     {
      title: 'جذب ميداني',
       image: '/Images/Attraction/ground (2).jpg',
      description: 'هنجيلك لحد عندك',
    },
     {
      title: 'جذب ميداني',
       image: '/Images/Attraction/ground.jpg',
      description: 'هنجيلك لحد عندك',
    },
   

  ];

  return (
    <FileSection
      title="ملف الجذب"
      description="ملف مسؤول عن جذب واستقبال المتطوعين في صناع الحياة."
      icon={<FaUsers />}
      items={items}
    />
  );
};

export default Attraction;
