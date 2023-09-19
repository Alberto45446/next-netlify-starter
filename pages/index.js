// pages/index.js

import Link from 'next/link'

export default function Home() {
  return (
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
      
      <style jsx>{`
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
        
        .email-signup {
          max-width: 400px;
          margin: 20px auto;
        }
        
        input {
          padding: 10px;
          width: 100%;
          margin-bottom: 10px;
        }
        
        button {
          background: #f26a2e;
          color: white;
          padding: 10px 15px;
          border: 0; 
        }
      `}</style>
    </div>
  )
}