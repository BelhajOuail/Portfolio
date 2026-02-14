import React, { useMemo, useState } from 'react';
import Link from 'next/link';

type PostSection = {
  title: string;
  points: string[];
};

type SprintWeekPost = {
  week: 1 | 2;
  title: string;
  date: string;
  introPoints: string[];
  tags: string[];
  sections: PostSection[];
  reflectionTitle: string;
  reflectionPoints: string[];
};

type Sprint = {
  id: string;
  label: string;
  weeks: SprintWeekPost[];
};

const sprints: Sprint[] = [
  {
    id: 'sprint-1',
    label: 'Sprint 1',
    weeks: [
      {
        week: 1,
        title: 'Sprint 1 - Week 1: Learning and testing new AI, Data, and .NET tools',
        date: 'February 2026',
        introPoints: [
          'In week 1, we mainly researched and tested new tools.',
          'We wanted to understand everything first before building real features.',
          'This helps us work faster and better in the next weeks.',
        ],
        tags: ['Sprint 1', 'AI', 'RAG', 'MCP', 'Ollama', 'Azure DevOps'],
        sections: [
          {
            title: 'Deep dive into AI technologies',
            points: [
              'We looked at Semantic Kernel to learn how to organize AI features in an app.',
              'We also studied MCP (Model Context Protocol) to understand how context moves between systems.',
              'We chose to start with a local LLM instead of going straight to a cloud model.',
            ],
          },
          {
            title: 'Experimenting with a local LLM',
            points: [
              'We started with a SQL database to store and retrieve data.',
              'Then we set up a local model with Ollama to use that data.',
              'We built small test apps where users could ask questions.',
              'We tested different models and prompts with the same test cases.',
              'We compared speed, accuracy, and consistency.',
              'Main lesson: clear prompts give better answers, and local LLMs can be more limited than cloud LLMs.',
            ],
          },
          {
            title: 'Introduction to vectorization and RAG',
            points: [
              'We learned how text can be turned into embeddings (vectors).',
              'With semantic search, we found the most relevant context.',
              'We also learned how RAG works: combining an LLM with external data.',
              'When we added context, answers were usually clearer and more stable.',
              'This showed us the difference between normal prompting and context-based prompting.',
            ],
          },
          {
            title: 'Agile process and collaboration',
            points: [
              'Every day at 9:00, we had a stand-up to discuss progress and blockers.',
              'We split tasks using a simple agile workflow.',
              'In Azure DevOps, we managed user stories, tasks, and repositories.',
              'We also planned early for future merges between apps.',
              'This gave us a clear view of real team collaboration.',
            ],
          },
        ],
        reflectionTitle: 'Short reflection',
        reflectionPoints: [
          'The first week was intense, but very educational. We had enough room to research and test things ourselves, and we received good guidance whenever we got stuck.',
          'We built a strong foundation for the rest of the sprint.',
        ],
      },
      {
        week: 2,
        title: 'Sprint 1 - Week 2: Implementation and first integrations',
        date: 'February 2026',
        introPoints: [
          'In week 2, we moved from research to building.',
          'We turned our tests into working parts step by step.',
          'After the research phase, we had to deliver two apps.',
        ],
        tags: ['Sprint 1', 'SQL', 'Vectorization', 'API', 'LLM', 'Unit Tests', 'Dapper'],
        sections: [
          {
            title: 'Week 2 focus',
            points: [
              'We improved earlier tests and made them more stable.',
              'We defined how frontend, backend, and AI flow connect.',
              'We agreed on technical choices for the next sprint.',
            ],
          },
          {
            title: 'Two apps after the research phase',
            points: [
              'After the research phase, we built two apps with different goals.',
              'The first app used a regular SQL database.',
              'The second app used a vectorized SQL setup for semantic search.',
              'This helped us compare normal queries with context-based retrieval.',
            ],
          },
          {
            title: 'What we implemented concretely',
            points: [
              'For the first app, we created a stable SQL connection for our chat app.',
              'We gave the LLM table and column context so it could create better SQL queries.',
              'We started with a console app and then moved it to a working API with database and chat logic.',
              'We added unit tests to keep this flow reliable.',
              'For the second app, we prepared data for vector search and tested semantic results.',
              'We compared both apps on speed, accuracy, and error handling.',
              'In future sprints, we will choose which app direction to continue.',
            ],
          },
        ],
        reflectionTitle: 'Short reflection',
        reflectionPoints: [
          'We moved from loose tests to real building blocks.',
          'The architecture is now clearer than in week 1.',
        ],
      },
    ],
  },
];

const BlogsPage = () => {
  const [selectedSprintId, setSelectedSprintId] = useState(sprints[0].id);
  const [selectedWeek, setSelectedWeek] = useState<1 | 2>(1);

  const selectedSprint = useMemo(
    () => sprints.find((sprint) => sprint.id === selectedSprintId) ?? sprints[0],
    [selectedSprintId]
  );

  const selectedPost = useMemo(
    () => selectedSprint.weeks.find((weekPost) => weekPost.week === selectedWeek) ?? selectedSprint.weeks[0],
    [selectedSprint, selectedWeek]
  );

  const availableWeeks = useMemo(() => selectedSprint.weeks.map((weekPost) => weekPost.week), [selectedSprint]);

  return (
    <div className="site">
      <main className="site-main">
        <section className="section">
          <div className="container">
            <div className="section__head">
              <p className="eyebrow">Blog</p>
              <h1 className="section__title">Latest Blog Posts</h1>
              <p className="section__subtitle">
                Project updates, sprint reflections, and technical insights from my learning process.
              </p>
            </div>

            <div className="blog-filters">
              <label className="blog-filter">
                <span className="blog-filter__label">Sprint</span>
                <select
                  className="blog-filter__select"
                  value={selectedSprintId}
                  onChange={(event) => {
                    const nextSprintId = event.target.value;
                    const nextSprint = sprints.find((sprint) => sprint.id === nextSprintId);
                    setSelectedSprintId(nextSprintId);

                    if (nextSprint && !nextSprint.weeks.some((weekPost) => weekPost.week === selectedWeek)) {
                      setSelectedWeek(nextSprint.weeks[0]?.week ?? 1);
                    }
                  }}
                >
                  {sprints.map((sprint) => (
                    <option key={sprint.id} value={sprint.id}>
                      {sprint.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="blog-filter">
                <span className="blog-filter__label">Week</span>
                <select
                  className="blog-filter__select"
                  value={selectedWeek}
                  onChange={(event) => setSelectedWeek(Number(event.target.value) as 1 | 2)}
                >
                  {availableWeeks.map((week) => (
                    <option key={week} value={week}>
                      Week {week}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="blog-layout">
              <article className="card blog-featured">
                <div className="blog-card__meta">
                  <span>{selectedPost.date}</span>
                </div>

                <h2 className="card__title blog-featured__title">{selectedPost.title}</h2>
                <ul className="blog-featured__list blog-featured__introList">
                  {selectedPost.introPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="blog-card__tags">
                  {selectedPost.tags.map((tag) => (
                    <span key={tag} className="blog-card__tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="blog-featured__content">
                  {selectedPost.sections.map((section) => (
                    <section key={section.title} className="blog-featured__section">
                      <h3 className="blog-featured__sectionTitle">{section.title}</h3>
                      <ul className="blog-featured__list">
                        {section.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </article>

              <aside className="blog-aside">
                <article className="card blog-aside__card">
                  <h3 className="card__title">{selectedPost.reflectionTitle}</h3>
                  <ul className="blog-featured__list">
                    {selectedPost.reflectionPoints.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              </aside>
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

export default BlogsPage;
