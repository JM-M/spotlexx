'use client';
import { useState } from 'react';
import Nav from './ui/components/Nav';
import Hero from './ui/components/Hero';
import Gallery from './ui/components/Gallery';

export default function Home() {
  const [navOpaque, setNavOpaque] = useState<boolean>(false);

  return (
    <>
      <Nav navOpaque={navOpaque} />
      <main className='flex min-h-screen max-w-full flex-col items-center'>
        <Hero setNavOpaque={setNavOpaque} />
        <Gallery />
      </main>
    </>
  );
}
