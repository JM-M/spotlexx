import cx from 'classnames';
import { tangerine } from '../fonts';

type Props = { navOpaque: boolean };

const Nav = ({ navOpaque }: Props) => {
  return (
    <nav className='fixed top-5 left-1/2 -translate-x-1/2 z-40 container'>
      <div
        className={cx(
          'px-5 h-12 flex gap-5 items-center transition-colors ease-in-out bg-gray-100 border rounded-3xl',
          {
            'text-white bg-opacity-10 border-transparent': !navOpaque,
            'text-black backdrop-blur-md bg-white/60 border-gray-300':
              navOpaque,
          }
        )}
      >
        <span className={cx(tangerine.className, 'text-2xl font-medium')}>
          Spotlexx
        </span>
        <ul className='flex gap-3'>
          {/* <li>
          <span>Gallery</span>
        </li>
        <li>
          <span>About me</span>
        </li>
        <li>
          <span>Contact</span>
        </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
