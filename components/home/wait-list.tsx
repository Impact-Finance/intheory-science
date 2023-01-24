import Image from 'next/image';
import { useState } from 'react';
import { ChangeEvent, MouseEvent } from 'react';

import { Fade } from 'react-awesome-reveal';
import background from '@/public/hexagon-background.png';
import triangle from '@/public/triangle.png';
import arcs from '@/public/arcs.png';
import arrow from '@/public/arrow.svg';
import check from '@/public/check.svg';
import errorIcon from '@/public/error.svg';
import pendingIcon from '@/public/pending.svg';
import styles from './wait-list.module.css';
import AnimatedShapes from './animated-shapes';

const WaitList = () => {
  const [email, setEmail] = useState('');
  const [valid, setValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (
      !email ||
      !email.includes('@') ||
      !email.includes('.') ||
      email.includes(' ') ||
      email.includes(',')
    ) {
      setValid(false);
    } else {
      setValid(true);
    }
  };

  const handleSubmit = async (e: MouseEvent) => {
    e.preventDefault();
    setPending(true);

    const response = await fetch('/api/waitlist', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      setSubmitted(true);
      setError(false);
      setEmail('');
    } else {
      setError(true);
    }

    setPending(false);
  };

  return (
    <div className={styles.formContainer}>
      <Fade
        triggerOnce={true}
        duration={4000}>
        <Image
          className={styles.background}
          src={background}
          alt="hexagon background"
          fill
          sizes="100vw"
        />
        <Fade
          triggerOnce={true}
          duration={1500}>
          <div className={styles.submitBox}>
            <div className={styles.shapes}>
              <AnimatedShapes
                images={[arcs, triangle]}
                direction="right"
              />
            </div>
            <div className={styles.shapes}>
              <AnimatedShapes
                images={[arcs, triangle]}
                direction="left"
              />
            </div>
            <div className={styles.textBox}>
              <h3 className={styles.waitHeader}>Get first access.</h3>
              <p className={styles.description}>
                Join the list to sign up for exclusive access to our launch
                platform.
              </p>
            </div>
            <form className={styles.form}>
              <div>
                <input
                  type="email"
                  name="email"
                  className={
                    error
                      ? `${styles.emailInput} ${styles.errorInput}`
                      : styles.emailInput
                  }
                  value={email}
                  onChange={handleChange}
                />
                <label
                  htmlFor="email"
                  className={email ? 'transparent' : ''}>
                  Email address
                </label>
                <button
                  className={
                    error
                      ? `${styles.submitBtn} ${styles.errorBtn}`
                      : styles.submitBtn
                  }
                  onClick={handleSubmit}
                  disabled={!email || !valid || submitted || pending}>
                  {!submitted && !error && !pending && (
                    <Image
                      className={styles.arrow}
                      src={arrow}
                      alt="submit arrow"
                      fill
                    />
                  )}
                  {submitted && !error && (
                    <Image
                      className={styles.check}
                      src={check}
                      alt="success"
                      fill
                    />
                  )}
                  {error && !pending && (
                    <Image
                      className={styles.error}
                      src={errorIcon}
                      alt="success"
                      fill
                    />
                  )}
                  {pending && (
                    <Image
                      className={styles.pending}
                      src={pendingIcon}
                      alt="success"
                      fill
                    />
                  )}
                  GO
                </button>
              </div>
            </form>
          </div>
        </Fade>
      </Fade>
    </div>
  );
};

export default WaitList;
