'use client';
import Image, { StaticImageData } from 'next/image';
import { useMemo } from 'react';

type Props = { images: StaticImageData[]; openLightbox: Function };

const ImageGrid = ({ images, openLightbox }: Props) => {
  return (
    <div className='relative leading-[0] columns-1 md:columns-2 lg:columns-3'>
      {images.map((image, i) => {
        return (
          <Image
            key={i}
            src={image}
            className={`inline-block w-full h-auto mb-5 rounded-md overflow-hidden`}
            alt={`${i + 1}`}
            onClick={() => openLightbox(i)}
          />
        );
      })}
    </div>
  );
};

export default ImageGrid;
