import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import { StaticImageData } from 'next/image';

import hexGroup from '@/public/hex-group.png';
import styles from './feature.module.css';
import AnimatedShapes from './animated-shapes';

interface FeatureProps {
  justify: string;
  images: StaticImageData[];
  text: string;
  span: string;
}

const Feature = ({ justify, images, text, span }: FeatureProps) => {
  return (
    <>
      {justify === 'left' ? (
        <div className={styles.feature}>
          <div className={styles.leftHexContainer}>
            <Image
              className={styles.hexes}
              src={hexGroup}
              alt="hexagons"
              fill
              sizes="(max-width: 375px) 90vw, 
              (max-width: 425px) 90vw, 
              (max-width: 768px) 90vw, 
              (max-width: 999px) 50vw,
              (max-width: 1200px) 30vw,
              20vw"
            />
          </div>
          <Fade
            className={styles.leftHeader}
            direction="up"
            triggerOnce={true}
            duration={2000}
            delay={250}>
            <h3>
              {text}
              <span className={styles.highlight}>{span}</span>
            </h3>
          </Fade>
          <AnimatedShapes
            images={images}
            direction="left"
          />
        </div>
      ) : (
        <div className={styles.feature}>
          <AnimatedShapes
            images={images}
            direction="right"
          />
          <Fade
            className={styles.rightHeader}
            direction="up"
            triggerOnce={true}
            duration={2000}
            delay={250}>
            <h3>
              {text}
              <span className={styles.highlight}>{span}</span>
            </h3>
          </Fade>
          <div className={styles.rightHexContainer}>
            <Image
              className={styles.hexes}
              src={hexGroup}
              alt="hexagons"
              fill
              sizes="(max-width: 375px) 90vw, 
              (max-width: 425px) 90vw, 
              (max-width: 768px) 90vw, 
              (max-width: 999px) 50vw,
              (max-width: 1200px) 30vw,
              20vw"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Feature;
