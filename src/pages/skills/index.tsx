import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { FaReact, FaCode, FaShieldAlt, FaTools, FaPlus, FaMinus } from 'react-icons/fa';

type Skill = { name: string; details: string[] };
type SkillCategory = { title: string; icon: React.ReactNode; description: string; skills: Skill[] };

const SkillsPage = () => {
  const categories: SkillCategory[] = useMemo(
    () => [
      {
        title: 'Frontend',
        icon: <FaReact size={18} />,
        description: 'Clean UI with consistent spacing and responsive layout.',
        skills: [
          { name: 'React / Next.js', details: ['Components', 'Routing', 'Data fetching basics'] },
          { name: 'TypeScript', details: ['Types', 'Interfaces', 'Safer refactors'] },
          { name: 'CSS', details: ['Responsive design', 'Reusable classes'] },
        ],
      },
      {
        title: 'Backend',
        icon: <FaCode size={18} />,
        description: 'APIs with clear structure, validation and data handling.',
        skills: [
          { name: '.NET', details: ['ASP.NET Core', 'Entity Framework'] },
          { name: 'Node.js', details: ['REST', 'JWT basics'] },
          { name: 'Databases', details: ['MongoDB', 'SQL'] },
        ],
      },
      {
        title: 'Security',
        icon: <FaShieldAlt size={18} />,
        description: 'Building with safe defaults and common risks in mind.',
        skills: [
          { name: 'App security', details: ['Input validation', 'XSS/Injection awareness'] },
          { name: 'Auth', details: ['JWT', 'Sessions/Cookies'] },
        ],
      },
      {
        title: 'Tools',
        icon: <FaTools size={18} />,
        description: 'Workflow tools to keep projects stable and repeatable.',
        skills: [
          { name: 'Git', details: ['Branches', 'PR workflow'] },
          { name: 'Docker', details: ['Containers', 'Compose basics'] },
          { name: 'Testing', details: ['Unit tests', 'Mocks basics'] },
        ],
      },
    ],
    []
  );

  const [open, setOpen] = useState<Record<number, boolean>>({});

  const toggle = (index: number) => {
    setOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="site">
      <main className="site-main">
        <section className="section">
          <div className="container">
            <div className="section__head">
              <p className="eyebrow">Skills</p>
              <h1 className="section__title">Technical Skills</h1>
              <p className="section__subtitle">
                A short overview of what I use most when building web apps.
              </p>
            </div>

            <div className="skills-grid">
              {categories.map((cat, index) => {
                const isOpen = !!open[index];

                return (
                  <article key={cat.title} className="card skills-card">
                    <header className="skills-card__head">
                      <div className="skills-card__titleRow">
                        <span className="skills-icon" aria-hidden="true">
                          {cat.icon}
                        </span>

                        <div>
                          <h2 className="card__title skills-card__title">{cat.title}</h2>
                          <p className="skills-card__desc">{cat.description}</p>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="skills-toggle"
                        onClick={() => toggle(index)}
                        aria-expanded={isOpen}
                        aria-controls={`panel-${index}`}
                      >
                        {isOpen ? (
                          <>
                            <FaMinus size={14} />
                            <span>Hide</span>
                          </>
                        ) : (
                          <>
                            <FaPlus size={14} />
                            <span>Show</span>
                          </>
                        )}
                      </button>
                    </header>

                    <div
                      id={`panel-${index}`}
                      className={`skills-panel ${isOpen ? 'skills-panel--open' : ''}`}
                    >
                      <div className="skills-list">
                        {cat.skills.map((skill) => (
                          <div key={skill.name} className="skills-item">
                            <h3 className="skills-item__name">{skill.name}</h3>
                            <ul className="skills-bullets">
                              {skill.details.map((d) => (
                                <li key={d}>{d}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
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

export default SkillsPage;
