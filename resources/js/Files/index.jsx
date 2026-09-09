import React from 'react';
import FileSection from './FileSection';

export default function Committee({ props }) {
  const items = props?.data || [];

  return (
    <FileSection
      title={`ملف ${props?.name || ''}`}
      description={props?.description}
      icon={props?.icon}
      items={items}
    />
  );
}
