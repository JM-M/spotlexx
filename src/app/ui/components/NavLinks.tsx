import React from 'react';

type Props = { open: boolean };

const NavLinks = ({ open }: Props) => {
  if (!open) return null;
  return (
    <ul className='absolute left-0 top-16 w-full flex flex-col gap-3 p-5 text-[inherit] text-center rounded-[inherit] bg-[inherit] bg-opacity-[inherit] border border-[inherit] background-blur-[inherit]'>
      <li className='h-12 w-full flex items-center'>
        <span className='w-full'>Gallery</span>
      </li>
      <li className='h-12 w-full flex items-center'>
        <span className='w-full'>About me</span>
      </li>
      <li className='h-12 w-full flex items-center'>
        <span className='w-full'>Contact</span>
      </li>
    </ul>
  );
};

export default NavLinks;
