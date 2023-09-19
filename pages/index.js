// pages/index.js

import Link from 'next/link'

export default function Home() {

  return (
    <div>

      <div className="hero">
        <h1>Vivere Audere</h1>

        <p>An exciting new clothing brand launching soon!</p>

        <div className="email-signup">
          <h2>Get notified when we launch</h2>
          
          <form>
            <input placeholder="Email address" />
            <button>Submit</button>
          </form>
        </div>
        
        <Link href="/about">
          <a>Learn more</a> 
        </Link>
      </div>

      <section>
        <div className="brand">
          <h2>Vivere Audere</h2>
          <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit amet mattis quam.</p>
        </div>
        
        <div className="vision">
          <h3>Our Vision</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>

    </div>
  )
}

// Styles

.hero {
  background-image: url('/images/hero-bg.jpg');
  background-size: cover;
  padding: 100px;
  text-align: center;
  color: white; 
}

h1 {
  font-size: 42px; 
}

p {
  font-size: 18px;
}

// New styles

section {
  padding: 60px;
}

.brand {
  font-size: 24px; 
}

// etc...