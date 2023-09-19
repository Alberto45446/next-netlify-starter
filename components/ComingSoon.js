// components/ComingSoon.js
import React from 'react';
import Countdown from 'react-countdown';
import styles from './ComingSoon.module.css';

const ComingSoon = () => {
  // Set your launch date here (in milliseconds)
  const launchDate = new Date('2023-12-31T00:00:00').getTime();

  // Renderer for the countdown timer
  const renderer = ({ days, hours, minutes, seconds }) => (
    <div className={styles.countdown}>
      <div className={styles.countdownItem}>
        <span>{days}</span> days
      </div>
      <div className={styles.countdownItem}>
        <span>{hours}</span> hours
      </div>
      <div className={styles.countdownItem}>
        <span>{minutes}</span> minutes
      </div>
      <div className={styles.countdownItem}>
        <span>{seconds}</span> seconds
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Coming Soon</h1>
      <p className={styles.description}>We are working on something amazing!</p>
      <Countdown date={launchDate} renderer={renderer} />
      <form className={styles.subscriptionForm}>
        <input
          type="email"
          placeholder="Enter your email"
          className={styles.emailInput}
        />
        <button type="submit" className={styles.subscribeButton}>
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default ComingSoon;
