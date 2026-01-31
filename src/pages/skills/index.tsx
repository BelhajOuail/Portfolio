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

  const [open, setOpen] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    categories.forEach((c) => (initial[c.title] = false));
    if (categories[0]) initial[categories[0].title] = true; // first open
    return initial;
  });

  const toggle = (key: string) => setOpen((p) => ({ ...p, [key]: !p[key] }));

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
              {categories.map((cat) => {
                const isOpen = !!open[cat.title];

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
                        onClick={() => toggle(cat.title)}
                        aria-expanded={isOpen}
                        aria-controls={`panel-${cat.title}`}
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

                    <div id={`panel-${cat.title}`} className={`skills-panel ${isOpen ? 'skills-panel--open' : ''}`}>
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
                Back to home
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SkillsPage;
