import Image from 'next/image';
import Nav from './ui/Nav';
import Hero from './ui/Hero';
import GalleryPreview from './ui/GalleryPreview';

export default function Home() {
  return (
    <>
      <Nav />
      <main className='flex min-h-screen flex-col items-center'>
        <Hero />
        <GalleryPreview />
      </main>
    </>
  );
}
