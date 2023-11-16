'use client';
import { useState, useLayoutEffect } from 'react';
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
        className='fixed z-0 max-h-screen overflow-y-hidden'
        style={{ opacity: `${opacity}%` }}
      >
        <Image src={heroImage} alt='Sam' />
        <div className='absolute top-0 left-0 h-full w-full bg-black bg-opacity-50'></div>
        <div className='absolute -bottom-1 left-0 w-full h-[200px] z-20 bg-gradient-to-t from-neutral-500'></div>
      </div>
      <div ref={ref} className='absolute opacity-0 h-1/2 w-full -z-50'></div>
      <section className='relative -top-[50px] w-full pt-52 pb-10 flex gap-10 md:pt-56 md:pb-14'>
        <div className='container relative z-10'>
          <h1
            className={cx(
              yesevaOne.className,
              'max-w-[600px] mx-auto mb-4 text-4xl text-center text-white font-extrabold capitalize md:text-5xl lg:leading-[60px]'
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
              className='inline-block min-h-[35px] min-w-[7ch] text-transparent bg-clip-text bg-gradient-to-r from-red-200 to-blue-200'
              cursor={false}
            />{' '}
            <span>captured</span>
          </h1>
        </div>
      </section>
    </>
  );
};

export default Hero;