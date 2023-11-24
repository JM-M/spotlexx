import { useRef, useLayoutEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import ContactForm from './ContactForm';

type Props = { onInView: Function };

const Footer = ({ onInView }: Props) => {
  const { ref, entry, inView } = useInView({
    /* Optional options */
    threshold: [...Array(100)].map((_, i) => i / 100),
  });

  const onInViewRef = useRef(onInView);

  useLayoutEffect(() => {
    if (inView && onInViewRef.current) onInViewRef.current();
  }, [inView]);

  return (
    <footer ref={ref} className='container pt-20 pb-10' id='contact'>
      <ContactForm />
      <div className='text-center'>
        <div className='pt-3'>
          &copy; {new Date().getFullYear()} Spotlexx. All rights reserved.
        </div>
        <div className='pt-3'>
          Made by{' '}
          <a href='http://github.com/JM-M' target='_blank'>
            Michael Jola-Moses
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
