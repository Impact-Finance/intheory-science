import Image from 'next/image';

import twitter from '@/public/twitter.svg';
import linkedin from '@/public/linkedin.svg';
import github from '@/public/github.svg';
import medium from '@/public/medium.svg';
import { Fade } from 'react-awesome-reveal';
import inTheory from '@/public/inTheory-logo-mark.png';
import styles from './footer.module.css';

const Footer = () => {
  const executeScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Fade
      className={styles.fader}
      triggerOnce={true}
      duration={2000}>
      <div className={styles.footer}>
        <div className={styles.company}>
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
          <p className={styles.copyright}>
            &copy; 2023{' '}
            <a
              href="https://www.impact-finance.io/"
              target="_blank"
              rel="noreferrer">
              Impact Finance
            </a>
            , Inc.
          </p>
        </div>
        <div className={styles.socials}>
          <a
            className={styles.social}
            href="https://twitter.com/DeSci_Impact"
            target="_blank"
            rel="noreferrer">
            <Image
              src={twitter}
              alt="twitter"
              fill
              sizes="(max-width: 375px) 25vw, 
              (max-width: 425px) 25vw, 
              (max-width: 768px) 25vw, 
              (max-width: 999px) 15vw,
              (max-width: 1200px) 15vw,
              15vw"
            />
          </a>
          <a
            className={styles.social}
            href="https://www.linkedin.com/company/impact-finance-desci/"
            target="_blank"
            rel="noreferrer">
            <Image
              src={linkedin}
              alt="linkedin"
              fill
              sizes="(max-width: 375px) 25vw, 
              (max-width: 425px) 25vw, 
              (max-width: 768px) 25vw, 
              (max-width: 999px) 15vw,
              (max-width: 1200px) 15vw,
              15vw"
            />
          </a>
          <a
            className={styles.social}
            href="https://github.com/Impact-Finance"
            target="_blank"
            rel="noreferrer">
            <Image
              src={github}
              alt="github"
              fill
              sizes="(max-width: 375px) 25vw, 
              (max-width: 425px) 25vw, 
              (max-width: 768px) 25vw, 
              (max-width: 999px) 15vw,
              (max-width: 1200px) 15vw,
              15vw"
            />
          </a>
          <a
            className={styles.social}
            href="https://medium.com/impact-finance"
            target="_blank"
            rel="noreferrer">
            <Image
              src={medium}
              alt="medium"
              fill
              sizes="(max-width: 375px) 25vw, 
              (max-width: 425px) 25vw, 
              (max-width: 768px) 25vw, 
              (max-width: 999px) 15vw,
              (max-width: 1200px) 15vw,
              15vw"
            />
          </a>
        </div>
      </div>
    </Fade>
  );
};

export default Footer;
