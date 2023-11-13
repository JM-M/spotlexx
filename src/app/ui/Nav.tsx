import React from 'react';

type Props = {};

const Nav = (props: Props) => {
  return (
    <nav className='container h-12 w-full flex gap-5 items-center '>
      <h1 className='text-xl font-medium'>Spotlexx</h1>
      <ul className='flex gap-3'>
        <li>
          <span>Gallery</span>
        </li>
        <li>
          <span>About me</span>
        </li>
        <li>
          <span>Contact</span>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
