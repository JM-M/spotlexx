'use client';
import { TypeAnimation } from 'react-type-animation';

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className='container py-20 text-center'>
      <h2 className='leading-[40px]'>
        Beautiful{' '}
        <TypeAnimation
          sequence={[
            'moments',
            2500,
            'memories',
            2500,
            'stories',
            2500,
            'journeys',
            2500,
            'emotions',
            2500,
            'expressions',
            2500,
            'portraits',
            2500,
          ]}
          wrapper='span'
          speed={50}
          className='inline-block min-w-[11ch] font-medium'
          repeat={Infinity}
          cursor={false}
        />{' '}
        captured
      </h2>
    </section>
  );
};

export default Hero;
