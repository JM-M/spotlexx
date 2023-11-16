'use client';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/styles.css';

import NextJsImage from './NextJsImage';
import ImageGrid from './ImageGrid';

import useGalleryImages from '../../hooks/useGalleryImages';

type Props = {};

const GalleryPreview = (props: Props) => {
  const [index, setIndex] = useState<number>(-1);
  const images = useGalleryImages();

  const openLightbox = (i: number) => setIndex(i);

  return (
    <section className='container relative z-20'>
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
