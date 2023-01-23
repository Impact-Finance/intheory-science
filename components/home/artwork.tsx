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
      />
    </div>
  );
};

export default Artwork;
