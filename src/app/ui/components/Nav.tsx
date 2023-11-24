'use client';
import cx from 'classnames';
import NavLinks from './NavLinks';
import NavMenuIcon from './NavMenuIcon';
import { tangerine } from '../fonts';
import { useState } from 'react';

type Props = { navOpaque: boolean; activeSection: string };

const Nav = ({ navOpaque, activeSection }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className='fixed top-5 left-1/2 -translate-x-1/2 z-40 container before:content-[""] before:absolute before:h-full before:w-full before:l-0 before:top-0 before:backdrop-blur-sm'>
      <div
        className={cx(
          'relative px-5 h-12 flex gap-5 items-center justify-between transition-colors ease-in-out border border-gray-600 rounded-[200px] text-white',
          {
            'bg-black/50': !navOpaque,
            'bg-neutral-800/70': navOpaque,
          }
        )}
      >
        <span className={cx(tangerine.className, 'text-3xl font-medium')}>
          Spotlexx
        </span>
        <NavLinks
          isOpen={isOpen}
          closeMenu={closeMenu}
          navOpaque={navOpaque}
          activeSection={activeSection}
        />
        <NavMenuIcon isOpen={isOpen} openMenu={openMenu} />
      </div>
    </nav>
  );
};

export default Nav;
