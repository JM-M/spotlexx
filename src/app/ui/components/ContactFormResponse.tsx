import React from 'react';
import cx from 'classnames';
import styles from '../styles/contactForm.module.css';

type Props = {
  response: { message?: string; success: boolean };
  resetForm: Function;
};

const ContactFormResponse = ({
  response: { message, success },
  resetForm,
}: Props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center p-5 z-10 bg-neutral-900 rounded-lg'>
      <p className={cx('text-center', { 'text-red-400': !success })}>
        {message}
      </p>
      <button type='button' className={styles.btn} onClick={() => resetForm()}>
        OK
      </button>
    </div>
  );
};

export default ContactFormResponse;
