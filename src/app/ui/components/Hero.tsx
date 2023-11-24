'use client';
import { useLayoutEffect } from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { useInView } from 'react-intersection-observer';
import cx from 'classnames';
import { yesevaOne } from '../fonts';
import heroImage from '../../../../public/images/SAVE_20231112_193013.png';

type Props = { setNavOpaque: Function };

const Hero = ({ setNavOpaque }: Props) => {
  const { ref, entry, inView } = useInView({
    /* Optional options */
    threshold: [...Array(100)].map((_, i) => i / 100),
  });

  useLayoutEffect(() => {
    setNavOpaque(!inView);
  }, [inView]);

  let opacity = 100;
  if (!isNaN(entry?.intersectionRatio!))
    opacity = Math.floor(entry?.intersectionRatio! * 100);

  return (
    <>
      <div
        className='fixed -z-10 max-h-screen overflow-y-hidden'
        style={{ opacity: `${opacity}%` }}
      >
        <Image src={heroImage} alt='Sam' className='to-transparent' />
        <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-b from-black via-neutral-900/40 via-70% to-neutral-700 z-10'></div>
      </div>
      <div ref={ref} className='absolute opacity-0 h-1/2 w-full -z-50'></div>
      <section className='relative -top-[50px] w-full pt-52 pb-10 flex gap-10 md:pt-56 md:pb-14'>
        <div className='container relative z-10'>
          <h1
            className={cx(
              yesevaOne.className,
              'max-w-[260px] mx-auto mb-4 text-4xl text-center font-extrabold capitalize md:max-w-[400px] md:text-6xl lg:leading-[60px]'
            )}
          >
            <span>Beautiful </span>
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
              repeat={Infinity}
              className='inline-block min-w-[11ch] pr-[1ch] text-transparent text-center bg-clip-text bg-gradient-to-r from-red-200 to-blue-200'
              cursor={false}
            />
            <span>captured</span>
          </h1>
        </div>
      </section>
    </>
  );
};

export default Hero;
