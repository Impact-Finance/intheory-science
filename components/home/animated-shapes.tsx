import Image from 'next/image';
import { StaticImageData } from 'next/image';

import styles from './animated-shapes.module.css';

interface AnimatedShapesProps {
  images: StaticImageData[];
  direction: 'right' | 'left';
}

const AnimatedShapes = ({ images, direction }: AnimatedShapesProps) => {
  return (
    <>
      {images.map((image, i) => (
        <figure
          key={i}
          className={
            direction === 'right' ? styles.imageBoxRight : styles.imageBoxLeft
          }>
          <Image
            className={styles.featureImage}
            src={image}
            alt="feature image"
            placeholder="blur"
            fill
            sizes="(max-width: 375px) 90vw, 
            (max-width: 425px) 90vw, 
            (max-width: 768px) 50vw, 
            (max-width: 999px) 50vw,
            (max-width: 1200px) 40vw,
            40vw"
          />
        </figure>
      ))}
    </>
  );
};

export default AnimatedShapes;
