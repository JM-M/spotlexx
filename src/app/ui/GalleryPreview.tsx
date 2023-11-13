import React from 'react';
import ImageGrid from './ImageGrid';

type Props = {};

const GalleryPreview = (props: Props) => {
  return (
    <section className='container'>
      <ImageGrid />
    </section>
  );
};

export default GalleryPreview;
