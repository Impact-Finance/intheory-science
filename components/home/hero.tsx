import { useState, useEffect, CSSProperties } from 'react';

import Image from 'next/image';

import ArtBanner from './art-banner';
import hexes from '@/public/hexagon-background.jpg';
import styles from './hero.module.css';

interface HeroProps {
  waitScroll: () => void;
}

interface ScrollStyle extends CSSProperties {
  '--scroll': number;
}

const Hero = ({ waitScroll }: HeroProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollStyle: ScrollStyle = { '--scroll': scrollPosition };

  return (
    <div
      className={styles.heroContainer}
      style={scrollStyle}>
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
