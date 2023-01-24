import { useRef } from 'react';
import Head from 'next/head';

import Navbar from '@/components/layout/navbar';
import Hero from '@/components/home/hero';
import HowTo from '@/components/home/how-to';
import WaitList from '@/components/home/wait-list';
import Footer from '@/components/layout/footer';

import styles from '@/styles/Home.module.css';
import SiteHeader from '@/components/layout/site-header';

export default function Home() {
  const waitlist = useRef<HTMLDivElement>(null);

  const executeScroll = () => {
    if (waitlist.current) {
      waitlist.current.scrollIntoView();
    }
  };

  return (
    <>
      <SiteHeader />
      <main className={styles.main}>
        <Navbar waitScroll={executeScroll} />
        <Hero waitScroll={executeScroll} />
        <HowTo />
        <div ref={waitlist}>
          <WaitList />
        </div>
        <Footer />
      </main>
    </>
  );
}
