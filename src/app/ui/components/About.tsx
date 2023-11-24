import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import cx from 'classnames';
import samImage from '../../../../public/images/SAVE_20231112_193013.png';
import { yesevaOne } from '../fonts';

type Props = { onInView: Function };

const About = ({ onInView }: Props) => {
  const { ref, entry, inView } = useInView({
    /* Optional options */
    threshold: [...Array(100)].map((_, i) => i / 100),
  });

  const onInViewRef = useRef(onInView);

  useLayoutEffect(() => {
    if (inView && onInViewRef.current) onInViewRef.current();
  }, [inView]);

  return (
    <section ref={ref} className='container pt-20 pb-10' id='about'>
      <div className='relative rounded-1/2'>
        <Image src={samImage} alt='Sam' fill />
      </div>
      <div className='text-center'>
        <h2 className={cx(yesevaOne.className, 'mb-2 text-2xl font-bold')}>
          Hi, I{"'"}m Sam, I{"'"}m SPOTLEXX
        </h2>
        <div className='leading-8 max-w-[500px] mx-auto'>
          <p className='mb-2'>
            SPOTLEXX means SPOTLESS. SPOTLEXX is a photography brand that deals
            with the aim of giving a true reflection of how beauty can be
            portrayed in jpegs.
          </p>
          <p className='mb-2'>
            SPOTLEXX creatively shows you how well you should appreciate your
            creation and existence after seeing beautiful jpegs of you.
          </p>
          <p className='mb-2'>
            SPOTLEXX helps you create moments and keep memories via beautiful
            pictorial documentations.
          </p>
          <p className='mb-2'>SPOTLEXX breathes life into your pictures </p>
          <p className='mb-2'>SPOTLEXX is SPOTLESS</p>
        </div>
      </div>
    </section>
  );
};

export default About;
