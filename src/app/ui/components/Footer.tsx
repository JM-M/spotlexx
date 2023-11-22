import cx from 'classnames';
import ContactForm from './ContactForm';
import { tangerine } from '../fonts';

const Footer = () => {
  return (
    <footer className='container py-10'>
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
