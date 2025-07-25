import React from 'react';
import FileSection from './FileSection';
import { MdPermMedia } from 'react-icons/md'; 

function Media() {
   const items = [
 
    {
      title: 'عيلة الميديا',
       image: "public/Images/Media/family (1).jpg",
      description: 'خليك واحد من العيلة',
    },
     {
      title: 'عيلة الميديا',
       image: "public/Images/Media/family (2).jpg",
      description: 'خليك واحد من العيلة',
    },
     {
      title: 'ديزاين صنعاوي',
       image: 'public/Images/Media/design (1).jpg',
      description: 'بنصنع ديزين لكل مناسبة',
    },
       {
      title: 'ديزاين صنعاوي',
       image: 'public/Images/Media/design (2).jpg',
      description: 'بنصنع ديزين لكل مناسبة',
    },
        {
      title: 'ديزاين صنعاوي',
       image: 'public/Images/Media/design (3).jpg',
      description: 'بنصنع ديزين لكل مناسبة',
    },
          {
      title: 'ديزاين صنعاوي',
       image: 'public/Images/Media/design (4).jpg',
      description: 'بنصنع ديزين لكل مناسبة',
    },
           {
      title: 'ديزاين صنعاوي',
       image: 'public/Images/Media/design (5).jpg',
      description: 'بنصنع ديزين لكل مناسبة',
    },
         {
      title: 'ديزاين صنعاوي',
       image: 'public/Images/Media/design (6).jpg',
      description: 'بنصنع ديزين لكل مناسبة',
    },
         {
      title: 'ديزاين صنعاوي',
       image: 'public/Images/Media/design (7).jpg',
      description: 'بنصنع ديزين لكل مناسبة',
    },
         {
      title: 'ديزاين صنعاوي',
       image: 'public/Images/Media/design (8).jpg',
      description: 'بنصنع ديزين لكل مناسبة',
    },
      {
      title: 'ديزاين صنعاوي',
       image: 'public/Images/Media/design (9).jpg',
      description: 'بنصنع ديزين لكل مناسبة',
    },
     {
      title: 'ديزاين صنعاوي',
       image: 'public/Images/Media/design (10).jpg',
      description: 'بنصنع ديزين لكل مناسبة',
    },
      {
      title: 'ديزاين صنعاوي',
       image: 'public/Images/Media/design (11).jpg',
      description: 'بنصنع ديزين لكل مناسبة',
    },
      {
      title: 'ديزاين صنعاوي',
       image: 'public/Images/Media/design (12).jpg',
      description: 'بنصنع ديزين لكل مناسبة',
    },
      {
      title: 'ديزاين صنعاوي',
       image: 'public/Images/Media/design (13).jpg',
      description: 'بنصنع ديزين لكل مناسبة',
    },
      {
      title: 'ديزاين صنعاوي',
       image: 'public/Images/Media/design (14).jpg',
      description: 'بنصنع ديزين لكل مناسبة',
    },
      {
      title: 'ديزاين صنعاوي',
       image: 'public/Images/Media/design (15).jpg',
      description: 'بنصنع ديزين لكل مناسبة',
    },
      {
      title: 'ديزاين صنعاوي',
       image: 'public/Images/Media/design (16).jpg',
      description: 'بنصنع ديزين لكل مناسبة',
    },
   

  ];

  return (
 <FileSection
  icon={<MdPermMedia />}
  title="ملف الميديا"
  description="ملف مسؤول عن توثيق فعاليات صناع الحياة وتصميم المحتوى من صور،فيديوهات، و ديزينات ونشره على المنصات المختلفة"
/>
  );
}

export default Media
