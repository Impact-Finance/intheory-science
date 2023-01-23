import piece1 from '@/public/image-samples/prisms.jpg';
import piece2 from '@/public/image-samples/chamber.jpg';
import piece3 from '@/public/image-samples/lab.jpg';
import piece4 from '@/public/image-samples/glyph.jpg';
import piece5 from '@/public/image-samples/machine.jpg';
import Artwork from './artwork';
import styles from './art-banner.module.css';

const ArtBanner = () => {
  return (
    <div className={styles.artBanner}>
      <Artwork image={piece1} />
      <Artwork image={piece2} />
      <Artwork image={piece3} />
      <Artwork image={piece4} />
      <Artwork image={piece5} />
    </div>
  );
};

export default ArtBanner;
