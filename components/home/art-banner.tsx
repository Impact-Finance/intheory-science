import piece1 from '@/public/image-samples/structure.jpg';
import piece2 from '@/public/image-samples/controls.jpg';
import piece3 from '@/public/image-samples/saturn.jpg';
import piece4 from '@/public/image-samples/network.jpg';
import piece5 from '@/public/image-samples/lasers.jpg';
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
