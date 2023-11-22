import React from 'react';
import { IoLogoWhatsapp, IoCallSharp } from 'react-icons/io5';

type Props = {};

const ContactLinks = (props: Props) => {
  const phoneNumber = '+2348104680095';
  const whatsAppLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    'Hello Sam, I can from your website and would like to enquire about your services.'
  )}`;

  return (
    <div className='flex justify-around gap-3'>
      <a
        href={`tel:${phoneNumber}`}
        target='_blank'
        className='w-full py-3 px-5 flex gap-3 items-center justify-center bg-neutral-800 rounded-lg'
      >
        <IoCallSharp size={24} />
        Call
      </a>
      <a
        href={whatsAppLink}
        target='_blank'
        className='w-full py-3 px-5 flex gap-3 items-center justify-center bg-green-700 rounded-lg text-white'
      >
        <IoLogoWhatsapp size={24} />
        WhatsApp
      </a>
    </div>
  );
};

export default ContactLinks;
