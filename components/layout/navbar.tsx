import Image from 'next/image';

import inTheory from '@/public/inTheory-logo-mark.png';
import styles from './navbar.module.css';

interface NavBarProps {
  waitScroll: () => void;
}

const Navbar = ({ waitScroll }: NavBarProps) => {
  const executeScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <nav className={styles.navbar}>
      <div
        className={styles.logoBox}
        onClick={executeScroll}>
        <Image
          className={styles.logo}
          src={inTheory}
          alt="inTheory logo"
          fill
          sizes="(max-width: 375px) 60vw, 
          (max-width: 425px) 60vw, 
          (max-width: 768px) 40vw, 
          (max-width: 999px) 30vw,
          (max-width: 1200px) 20vw,
          20vw"
        />
      </div>
      <div className={styles.access}>
        <p className={styles.note}>Launching Summer 2023</p>
        <a
          className={styles.accessLink}
          onClick={waitScroll}>
          Join Wait List
        </a>
        {/* <p className={styles.note}>● Private alpha access only</p> */}
        {/* <a
          className={styles.accessLink}
          href="#">
          Launch App
        </a> */}
      </div>
    </nav>
  );
};

export default Navbar;
