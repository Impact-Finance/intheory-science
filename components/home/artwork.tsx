import Image, { StaticImageData } from 'next/image';

import styles from './artwork.module.css';

interface ArtworkProps {
  image: StaticImageData;
}

const Artwork = ({ image }: ArtworkProps) => {
  return (
    <div className={styles.artBox}>
      <Image
        className={styles.artwork}
        src={image}
        alt="example image"
        placeholder="blur"
        fill
        sizes="(max-width: 375px) 50vw, 
        (max-width: 425px) 40vw, 
        (max-width: 768px) 40vw, 
        (max-width: 999px) 20vw,
        (max-width: 1200px) 20vw,
        20vw"
      />
    </div>
  );
};

export default Artwork;
