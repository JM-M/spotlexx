import Image from 'next/image';

export default function Home() {
  return (
    <>
      <nav className='container h-12 w-full flex gap-5 items-center '>
        <h1 className='text-xl font-medium'>Spotlexx</h1>
        <ul className='flex gap-3'>
          <li>
            <span>Gallery</span>
          </li>
          <li>
            <span>About me</span>
          </li>
          <li>
            <span>Contact</span>
          </li>
        </ul>
      </nav>
      <main className='flex min-h-screen flex-col items-center'>
        <section className='py-20 text-center'>
          <h2 className='text-3xl'>Beautiful moments captured</h2>
        </section>
      </main>
    </>
  );
}
