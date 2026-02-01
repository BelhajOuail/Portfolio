import React, { useState } from 'react';
import Link from 'next/link';
import { FaReact, FaCode, FaShieldAlt, FaTools, FaGamepad, FaWallet, FaPlus, FaMinus, FaExternalLinkAlt } from 'react-icons/fa';



const SkillsPage = () => {
  const categories = [
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
  ];

const projects = [
  {
    title: 'Zonkytown',
    url: 'https://zonkytown.koyeb.app',
    icon: <FaGamepad size={24} />,
    description: 'A Fortnite character viewer where you can browse characters, save favorites, add items, and track scores.',
    tech: ['React', 'Node.js', 'MongoDB', 'Auth'],
  },
  {
    title: 'Terminal',
    url: 'https://terminal.koyeb.app',
    icon: <FaWallet size={24} />,
    description: 'A banking app to log and track your expenses with secure login and registration.',
    tech: ['React', 'Node.js', 'Database', 'JWT'],
  }
];

  const [openCategories, setOpenCategories] = useState(new Set());

  // Functie om een categorie te openen/sluiten
  const toggleCategory = (index: number) => {
    const newOpenCategories = new Set(openCategories);

    if (newOpenCategories.has(index)) {
      newOpenCategories.delete(index);
    } else {
      newOpenCategories.add(index);
    }

    setOpenCategories(newOpenCategories);
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
              {categories.map((category, index) => {
                const isOpen = openCategories.has(index);

                return (
                  <article key={category.title} className="card skills-card">
                    <header className="skills-card__head">
                      <div className="skills-card__titleRow">
                        <span className="skills-icon">{category.icon}</span>
                        <div>
                          <h2 className="card__title skills-card__title">{category.title}</h2>
                          <p className="skills-card__desc">{category.description}</p>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="skills-toggle"
                        onClick={() => toggleCategory(index)}
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

                    {isOpen && (
                      <div className="skills-panel skills-panel--open">
                        <div className="skills-list">
                          {category.skills.map((skill) => (
                            <div key={skill.name} className="skills-item">
                              <h3 className="skills-item__name">{skill.name}</h3>
                              <ul className="skills-bullets">
                                {skill.details.map((detail) => (
                                  <li key={detail}>{detail}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>

            {/* PROJECTS SECTIE */}
            <div className="projects-section">
              <h2 className="projects-title">Projects</h2>
              <p className="projects-subtitle">
                Web applications I've built with authentication and interactive features.
              </p>

              <div className="projects-grid">
                {projects.map((project) => (
                  <article key={project.title} className="project-card card">
                    <div className="project-card__icon">
                      {project.icon}
                    </div>

                    <h3 className="project-card__title">{project.title}</h3>
                    <p className="project-card__desc">{project.description}</p>

                    <div className="project-tech">
                      {project.tech.map((tech) => (
                        <span key={tech} className="project-tech__tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--primary project-card__btn"
                    >
                      <span>Visit Project</span>
                      <FaExternalLinkAlt size={14} />
                    </a>
                  </article>
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
    </div >
  );
};

export default SkillsPage;