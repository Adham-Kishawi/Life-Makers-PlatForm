import React from 'react';
import FileSection from './FileSection';
// import { GiThreeFriends } from 'react-icons/fa'


const Beast_friend = () => {
  const items = [
 
    {
      title: 'عيلة احسن صاحب',
       image: "/Images/Beast Friend/Family (2).jpg",
      description: 'خليك واحد من العيلة',
    },
     {
      title: 'عيلة احسن صاحب',
       image: "/Images/Beast Friend/family.jpg",
      description: 'خليك واحد من العيلة',
    },
     {
      title: 'نزولات ميدانية',
       image: '/Images/Beast Friend/Midany (2).jpg',
      description: 'هنجيلك لحد عندك',
    },
     {
      title: 'نزولات ميدانية',
       image: '/Images/Beast Friend/Midany.jpg',
      description: 'هنجيلك لحد عندك',
    },
     {
      title: 'توعية',
       image: '/Images/Beast Friend/street (2).jpg',
      description: 'بنوعي كل الناس عن ذوي الاعاقة',
    },
     {
      title: 'توعية',
       image: '/Images/Beast Friend/street (3).jpg',
      description: 'بنوعي كل الناس عن ذوي الاعاقة',
    },
     {
      title: 'توعية',
       image: '/Images/Beast Friend/street (4).jpg',
      description: 'بنوعي كل الناس عن ذوي الاعاقة',
    },
     {
      title: 'توعية',
      image: '/Images/Beast Friend/street.jpg',
      description: 'بنوعي كل الناس عن ذوي الاعاقة',
    },
   

  ];

  return (
    <FileSection
      title="ملف أحسن صاحب"
      description="ملف يهدف لدعم وتمكين ذوي الإعاقة من خلال التوعية، الدمج، وتوفير أنشطة تفاعلية تعزز من دورهم في المجتمع."

      // icon={<GiThreeFriends />}
      items={items}
    />
  );
};

export default Beast_friend;
