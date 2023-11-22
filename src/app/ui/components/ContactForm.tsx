import React from 'react';
import { object, string, InferType } from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import cx from 'classnames';

import Textarea from './Textarea';
import ContactLinks from './ContactLinks';
import ErrorText from './ErrorText';

import { yesevaOne } from '../fonts';
import styles from '../styles/contactForm.module.css';
import useContactForm from '@/app/hooks/useContactForm';

const schema = object({
  name: string().required('Full name is required'),
  email: string()
    .required('Email is required')
    .email('Not a valid email address'),
  phone: string(),
  message: string().required('A message is required'),
});

type FormValuesType = InferType<typeof schema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { sendMessageMutation } = useContactForm();
  const { isLoading, mutate: sendMessage } = sendMessageMutation;

  const submit = (values: FormValuesType) => {
    console.log(values);
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit(submit)}>
        <h2 className={cx(yesevaOne.className, 'mb-10 text-2xl text-center')}>
          Lets talk
        </h2>
        <ContactLinks />
        <div className='flex gap-2 items-center my-5 text-neutral-500'>
          <div className='w-full h-[1px] bg-neutral-500'></div>OR
          <div className='w-full h-[1px] bg-neutral-500'></div>
        </div>
        <div className={styles.fieldWrapper}>
          <label className={styles.label} htmlFor='name'>
            Full name<span className='text-red-400'>*</span>
          </label>
          <input {...register('name')} id='name' className={styles.input} />
          <ErrorText text={errors.name?.message} />
        </div>
        <div className={styles.fieldWrapper}>
          <label className={styles.label} htmlFor='email'>
            Email<span className='text-red-400'>*</span>
          </label>
          <input
            {...register('email')}
            type='email'
            id='email'
            className={styles.input}
          />
          <ErrorText text={errors.email?.message} />
        </div>

        <div className={styles.fieldWrapper}>
          <label className={styles.label} htmlFor='phone'>
            Phone number (optional)
          </label>
          <input {...register('phone')} id='phone' className={styles.input} />
          <ErrorText text={errors.phone?.message} />
        </div>
        <div className={styles.fieldWrapper}>
          <label className={styles.label} htmlFor='message'>
            Message<span className='text-red-400'>*</span>
          </label>
          <Controller
            control={control}
            name='message'
            render={({ field: { value, onChange } }) => {
              return (
                <Textarea
                  value={value}
                  onChange={onChange}
                  id='message'
                  className={styles.textarea}
                  autogrow
                />
              );
            }}
          />
          <ErrorText text={errors.message?.message} />
        </div>
        <button className={styles.btn}>Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
