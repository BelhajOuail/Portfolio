import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const HomePage = () => {
  return (
    <div id="top">
      {/* Hero */}
      <section className="section hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <p className="eyebrow">Junior Developer • Belgium</p>
            <h1 className="hero__title">
              Hi, I’m <span className="accent">Ouail</span>.
              <br />
              I build clean web apps.
            </h1>
            <p className="hero__subtitle">
              This portfolio uses a clean and professional layout. Additional pages will be added later, 
              along with updates about my internship @ Tillit.
            </p>
            <div className="hero__cta">
              <Link href="/about" className="btn btn--primary">
                About me
              </Link>
              <a href="#contact" className="btn btn--secondary">
                Contact
              </a>
            </div>

            <div className="socials" aria-label="Social links">
              <a className="socials__link" href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub size={18} />
                <span>GitHub</span>
              </a>
              <a className="socials__link" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn size={18} />
                <span>LinkedIn</span>
              </a>
              <a className="socials__link" href="mailto:example@email.com">
                <IoMdMail size={18} />
                <span>Email</span>
              </a>
            </div>
          </div>

          <div className="hero__media" aria-hidden="true">
            <div className="profile">
              <img className="profile__img" src="/placeholder.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section">
        <div className="container">
          <div className="section__head">
            <h2 className="section__title">What you’ll find here</h2>
            <p className="section__subtitle">
              A clear navigation, consistent spacing, and a responsive layout.
            </p>
          </div>

          <div className="cards">
            <article className="card">
              <h3 className="card__title">About</h3>
              <p className="card__text">Short bio, education, and what I’m working on right now.</p>
              <Link href="/about" className="card__link">
                Go to About →
              </Link>
            </article>

            <article className="card">
              <h3 className="card__title">Skills</h3>
              <p className="card__text">A clean overview of my tools, frameworks, and strengths.</p>
              <Link href="/skills" className="card__link">
                Go to Skills →
              </Link>
            </article>

            <article className="card">
              <h3 className="card__title">Blog</h3>
              <p className="card__text">Optional: posts about projects, learnings, and internship updates.</p>
              <Link href="/blog" className="card__link">
                Go to Blog →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section section--muted">
        <div className="container">
          <div className="section__head">
            <h2 className="section__title">Contact</h2>
            <p className="section__subtitle">Want to reach out? Send a mail and I’ll reply as soon as possible.</p>
          </div>

          <div className="contact">
            <div className="contact__card">
              <p className="contact__label">Email</p>
              <a className="contact__value" href="mailto:example@email.com">
                example@email.com
              </a>
              <p className="contact__hint">Tip: we can replace this with your real email later.</p>
            </div>
            <div className="contact__card">
              <p className="contact__label">Location</p>
              <p className="contact__value">Belgium</p>
              <p className="contact__hint">Optional: add your city (Antwerpen, Brussel, ...)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
