import Feature from './feature';
import vortex from '@/public/vortex.png';
import star from '@/public/star.png';
import triangle from '@/public/triangle.png';
import isotope from '@/public/isotope.png';
import arcs from '@/public/arcs.png';
import portal from '@/public/portal.png';
import styles from './how-to.module.css';

const HowTo = () => {
  return (
    <div className={styles.howContainer}>
      <Feature
        justify="left"
        images={[arcs, star, arcs, vortex]}
        text="Transform complex science into "
        span="beautiful artwork"
      />
      <Feature
        justify="right"
        images={[isotope, arcs, arcs, vortex]}
        text="Discover research on the "
        span="scientific frontier"
      />
      <Feature
        justify="left"
        images={[triangle, arcs, triangle, vortex]}
        text="Support projects based on "
        span="your unique interests"
      />
      <Feature
        justify="right"
        images={[portal, triangle, portal, star]}
        text="Showcase your art in real life and "
        span="the metaverse"
      />
    </div>
  );
};

export default HowTo;
