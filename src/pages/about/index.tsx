import React from 'react';

const AboutPage = () => {
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
                <h2 className="bio-title">About Me</h2>
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
                    <strong>Location:</strong> Antwerp
                  </div>
                  <div className="bio-highlight">
                    <strong>Education:</strong> Graduate Programming (AP Hogeschool)
                  </div>
                  <div className="bio-highlight">
                    <strong>Focus:</strong> Full-stack Development
                  </div>
                </div>
              </div>
            </div>
          </div>





        </section>
      </main>
    </div >
  );
};

export default AboutPage;
