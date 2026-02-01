import React from 'react';
import Link from 'next/link';
import { FaFutbol, FaBasketballBall, FaGamepad, FaMapMarkedAlt, FaPlane } from 'react-icons/fa';

const AboutPage = () => {
  const hobbies = [
    { name: 'Football', icon: <FaFutbol size={20} /> },
    { name: 'Basketball', icon: <FaBasketballBall size={20} /> },
    { name: 'Video Games', icon: <FaGamepad size={20} /> },
    { name: 'Sightseeing', icon: <FaMapMarkedAlt size={20} /> },
    { name: 'Traveling', icon: <FaPlane size={20} /> },
  ];

  return (
    <div className="site">
      <main className="site-main">
        <section className="section">
          <div className="container">
            <div className="section__head">
              <p className="eyebrow">About</p>
              <h1 className="section__title">About Me</h1>
              <p className="section__subtitle">
                My journey in tech and what drives me.
              </p>
            </div>

            <div className="bio-section">
              <div className="bio-content">
                <h2 className="bio-title">Background</h2>
                <p className="bio-text">
                  I was six years old when I first played on a computer. Eighteen years later, 
                  the childish curiosity remains. What started as fascination evolved into 
                  a passion for computers and coding.
                </p>
                <p className="bio-text">
                  Currently finishing my Graduate in Programming at Artesis Plantijn, 
                  building on my Bachelor's in Applied Computer Sciences with a focus on Mixed Reality. 
                  I'm motivated to continue expanding my knowledge in the IT field.
                </p>
                
                <div className="bio-highlights">
                  <div className="bio-highlight">
                    <strong>Location</strong>
                    Antwerp
                  </div>
                  <div className="bio-highlight">
                    <strong>Education</strong>
                    Graduate Programming (AP Hogeschool)
                  </div>
                  <div className="bio-highlight">
                    <strong>Focus</strong>
                    Full-stack Development
                  </div>
                </div>
              </div>
            </div>

            {/* HOBBIES SECTIE */}
            <div className="hobbies-section">
              <h2 className="hobbies-title">Hobbies & Interests</h2>
              <p className="hobbies-subtitle">
                What I enjoy doing outside of coding.
              </p>
              
              <div className="hobbies-grid">
                {hobbies.map((hobby) => (
                  <div key={hobby.name} className="hobby-card">
                    <div className="hobby-card__icon">
                      {hobby.icon}
                    </div>
                    <span className="hobby-card__name">{hobby.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="skills-bottom">
              <Link href="/" className="btn btn--secondary">
                <span className="btn__icon">←</span>
                <span>Back to home</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;