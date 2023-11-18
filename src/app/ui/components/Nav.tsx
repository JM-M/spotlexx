'use client';
import cx from 'classnames';
import NavLinks from './NavLinks';
import NavMenuIcon from './NavMenuIcon';
import { tangerine } from '../fonts';
import { useState } from 'react';

type Props = { navOpaque: boolean };

const Nav = ({ navOpaque }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

  return (
    <nav className='fixed top-5 left-1/2 -translate-x-1/2 z-40 container'>
      <div
        className={cx(
          'relative px-5 h-12 flex gap-5 items-center justify-between transition-colors ease-in-out border border-gray-500 rounded-3xl',
          {
            'text-white  backdrop-blur-md bg-neutral-800': !navOpaque,
            'text-black backdrop-blur-md bg-white/60': navOpaque,
          }
        )}
      >
        <span className={cx(tangerine.className, 'text-3xl font-medium')}>
          Spotlexx
        </span>
        <NavLinks open={open} />
        <NavMenuIcon open={open} openMenu={openMenu} closeMenu={closeMenu} />
      </div>
    </nav>
  );
};

export default Nav;
