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
          Hi, I{"'"}m Sam
        </h2>
        <p className='leading-8 max-w-[500px] mx-auto'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut doloribus
          consequatur sunt architecto atque voluptatibus quas dolores quidem
          reprehenderit pariatur quam aspernatur quaerat, aliquid veniam
          distinctio eveniet repudiandae similique amet?
        </p>
      </div>
    </section>
  );
};

export default About;
