import { useRef } from 'react';
import Link from 'next/link';
import cx from 'classnames';
import useOutsideClick from '@/app/hooks/useOutsideClick';
import styles from '../styles/navLinks.module.css';

type Props = {
  isOpen: boolean;
  closeMenu: Function;
  navOpaque: boolean;
  activeSection: string;
};

const links = [
  {
    name: 'About me',
    hash: '#about',
  },
  {
    name: 'Gallery',
    hash: '#gallery',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
];

const NavLinks = ({ isOpen, closeMenu, navOpaque, activeSection }: Props) => {
  const ref = useRef(null);
  useOutsideClick({ onOutsideClick: closeMenu, elRef: ref });

  return (
    <ul
      ref={ref}
      className={cx(
        styles.list,
        {
          'bg-black/80': !navOpaque,
          'bg-neutral-800/70': navOpaque,
          [`${styles.listOpen}`]: isOpen,
        },
        'sm:bg-inherit'
      )}
    >
      {links.map((link) => {
        const { name, hash } = link;
        // console.log(`#${activeSection}`, hash);
        return (
          <li
            className={cx(styles.item, {
              [`${styles.itemActive}`]: `#${activeSection}` === hash,
            })}
          >
            <Link href={hash} className={styles.link}>
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
