import Image from 'next/image';
import cx from 'classnames';
import samImage from '../../../../public/images/SAVE_20231112_193013.png';
import { yesevaOne } from '../fonts';

type Props = {};

const About = (props: Props) => {
  return (
    <section className='container py-10'>
      <div className='relative rounded-1/2'>
        <Image src={samImage} alt='Sam' fill />
      </div>
      <div className='text-center'>
        <h2 className={cx(yesevaOne.className, 'mb-2 text-2xl font-bold')}>
          Hi, I{"'"}m Sam
        </h2>
        <p className='leading-8'>
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
