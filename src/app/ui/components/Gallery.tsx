'use client';
import { useState, useRef, useLayoutEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/styles.css';

import NextJsImage from './NextJsImage';
import ImageGrid from './ImageGrid';

import useGalleryImages from '../../hooks/useGalleryImages';

type Props = { onInView: Function };

const GalleryPreview = ({ onInView }: Props) => {
  const [index, setIndex] = useState<number>(-1);
  const images = useGalleryImages();

  const { ref, entry, inView } = useInView({
    /* Optional options */
    threshold: [...Array(100)].map((_, i) => i / 100),
  });

  const onInViewRef = useRef(onInView);

  useLayoutEffect(() => {
    if (inView && onInViewRef.current) onInViewRef.current();
  }, [inView]);

  const openLightbox = (i: number) => setIndex(i);

  return (
    <section
      ref={ref}
      className='container relative pt-20 pb-10 z-20'
      id='gallery'
    >
      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={images}
        render={{ slide: NextJsImage, thumbnail: NextJsImage }}
        plugins={[Thumbnails, Zoom]}
      />
      <ImageGrid images={images} openLightbox={openLightbox} />
    </section>
  );
};

export default GalleryPreview;
