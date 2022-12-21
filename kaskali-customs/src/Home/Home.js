import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <main className="hero-section">
        <section className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h2 className="hero-welcome-text">You Are The</h2>
              <h1 className="hero-country">ARTIST.</h1>
              <p clasNames="hero-text-description">
                Customize any bike to your liking.
              </p>
              <button className="explore-btn">
                <a className="explore-a" href="products">
                  SHOP
                </a>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
