'use client';
import { useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import Nav from './ui/components/Nav';
import Hero from './ui/components/Hero';
import Gallery from './ui/components/Gallery';
import About from './ui/components/About';
import Footer from './ui/components/Footer';

const queryClient = new QueryClient();

type activeSectionType = 'about' | 'gallery' | 'contact';

export default function Home() {
  const [activeSection, setActiveSection] =
    useState<activeSectionType>('about');
  const [navOpaque, setNavOpaque] = useState<boolean>(false);

  return (
    <QueryClientProvider client={queryClient}>
      <Nav navOpaque={navOpaque} activeSection={activeSection} />
      <main className='flex min-h-screen max-w-full flex-col items-center'>
        <Hero setNavOpaque={setNavOpaque} />
        <About onInView={() => setActiveSection('about')} />
        <Gallery onInView={() => setActiveSection('gallery')} />
      </main>
      <Footer onInView={() => setActiveSection('contact')} />
    </QueryClientProvider>
  );
}
