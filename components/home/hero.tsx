import Image from 'next/image';

import ArtBanner from './art-banner';
import hexes from '@/public/hexagon-background.jpg';
import styles from './hero.module.css';

interface HeroProps {
  waitScroll: () => void;
}

const Hero = ({ waitScroll }: HeroProps) => {
  return (
    <div className={styles.heroContainer}>
      <Image
        className={styles.hexBg}
        src={hexes}
        alt="hexagon background"
        placeholder="blur"
        fill
        sizes="100vw"
        priority
      />
      <ArtBanner />
      <div className={styles.heroText}>
        <h1 className={styles.header}>
          <span className={styles.headerMain}>Collect Art</span>
          <span className={styles.headerSub}>to Fund Science</span>
        </h1>
        <h2 className={styles.subText}>
          The easiest way to support
          <br />
          <span>cutting edge</span> research
        </h2>
        <button
          onClick={waitScroll}
          className={styles.mainBtn}>
          Join Wait List
        </button>
      </div>
    </div>
  );
};

export default Hero;
