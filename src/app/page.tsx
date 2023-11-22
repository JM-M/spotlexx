'use client';
import { useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import Nav from './ui/components/Nav';
import Hero from './ui/components/Hero';
import Gallery from './ui/components/Gallery';
import About from './ui/components/About';
import Footer from './ui/components/Footer';

const queryClient = new QueryClient();

export default function Home() {
  const [navOpaque, setNavOpaque] = useState<boolean>(false);

  return (
    <QueryClientProvider client={queryClient}>
      <Nav navOpaque={navOpaque} />
      <main className='flex min-h-screen max-w-full flex-col items-center'>
        <Hero setNavOpaque={setNavOpaque} />
        <Gallery />
        <About />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
