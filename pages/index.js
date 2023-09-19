// pages/index.js

import Link from 'next/link';

import styles from './index.css';

export default function Home() {

  return (
    <div className={styles.hero}>

      <h1 className={styles.title}>Vivere Audere</h1>

      <p className={styles.text}>An exciting new clothing brand launching soon!</p>
      
      <div className={styles.emailSignup}>
        <h2>Get notified when we launch</h2>

        <form>
          <input placeholder="Email address" />
          <button>Submit</button> 
        </form>
      </div>

      <Link href="/about">
        <a>Learn more</a>
      </Link>

      <section className={styles.section}>

        <div className={styles.brand}>
          
          <h2>Vivere Audere</h2>
          
          <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit amet mattis quam.</p>

        </div>

        <div className={styles.vision}>

          <h3>Our Vision</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  
          </p>

        </div>

      </section>

    </div>
  )
}