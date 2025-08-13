import React from 'react';
import FileSection from './FileSection';
import { GiMeditation } from 'react-icons/gi';
import { FaChalkboardTeacher } from 'react-icons/fa'; 
import { GiGraduateCap } from 'react-icons/gi'; 


function Leader() {
    const items = [
 
    {
      title: 'عيلة قدوه',
       image: "/Images/leader/Family (2).jpg",
      description: 'خليك واحد من العيلة',
    },
     {
      title: 'عيلة قدوه',
       image: "Images/leader/family.jpg",
      description: 'خليك واحد من العيلة',
    },
     {
      title: 'شرح مبسط ',
       image: 'public/Images/leader/learn.jpg',
      description: 'شرح مبسط لكل تفصيلة',
    },
     {
      title: 'شرح مبسط',
       image: 'public/Images/leader/learn (2).jpg',
      description: 'شرح مبسط لكل تفصيلة',
    },
     {
      title: 'شرح مبسط',
       image: 'public/Images/leader/learn (3).jpg',
      description: 'شرح مبسط لكل تفصيلة',
    },
       {
      title: 'شرح مبسط',
       image: 'public/Images/leader/learn (4).jpg',
      description: 'شرح مبسط لكل تفصيلة',
    },
       {
      title: 'شرح مبسط',
       image: 'public/Images/leader/learn (5).jpg',
      description: 'شرح مبسط لكل تفصيلة',
    },
     {
      title: 'شرح مبسط',
       image: 'public/Images/leader/learn (6).jpg',
      description: 'شرح مبسط لكل تفصيلة',
    },
     {
      title: 'أنشطة تفاعلية',
       image: 'public/Images/leader/activity.jpg',
      description: 'هنتعلم و هنطبق سوه',
    },
     {
      title: 'أنشطة تفاعلية',
       image: 'public/Images/leader/activity (2).jpg',
      description: 'هنتعلم و هنطبق سوه',
    },
     {
      title: 'أنشطة تفاعلية',
       image: 'public/Images/leader/activity (3).jpg',
      description: 'هنتعلم و هنطبق سوه',
    },
     {
      title: 'أنشطة تفاعلية',
       image: 'public/Images/leader/activity (4).jpg',
      description: 'هنتعلم و هنطبق سوه',
    },
   

  ];

  return (
    <FileSection
      title="ملف أحسن صاحب"
      description="ملف يهدف لدعم وتمكين ذوي الإعاقة من خلال التوعية، الدمج، وتوفير أنشطة تفاعلية تعزز من دورهم في المجتمع."

      icon={<GiMeditation />}
      items={items}
    />
  );
};



export default Leader
