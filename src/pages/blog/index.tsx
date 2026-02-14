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
          'During week 1, we focused on research and technical experimentation.',
          'Our goal was to understand the tools and architecture before implementing production features.',
          'This foundation will help us work faster and with better quality in the coming weeks.',
        ],
        tags: ['Sprint 1', 'AI', 'RAG', 'MCP', 'Ollama', 'Azure DevOps'],
        sections: [
          {
            title: 'Deep dive into AI technologies',
            points: [
              'We explored Semantic Kernel to understand how AI capabilities can be structured in an application.',
              'We also studied MCP (Model Context Protocol) to understand how context is exchanged between systems.',
              'We decided to begin with a local LLM before moving to cloud-based models.',
            ],
          },
          {
            title: 'Experimenting with a local LLM',
            points: [
              'We started with a SQL database to store and retrieve data.',
              'Next, we configured a local model in Ollama to use that data.',
              'We built small demo apps where users could ask questions.',
              'Using the same use cases, we evaluated multiple models and prompt strategies.',
              'We compared speed, accuracy and response consistency.',
              'Main lesson: clear prompts improve answer quality, and local LLMs can be more limited than cloud LLMs.',
            ],
          },
          {
            title: 'Introduction to vectorization and RAG',
            points: [
              'We learned how text can be transformed into embeddings (vectors).',
              'With semantic search, we retrieved the most relevant context for each query.',
              'We also studied how RAG combines an LLM with external knowledge.',
              'When context was added, responses were generally clearer and more reliable.',
              'This showed us the difference between normal prompting and context-based prompting.',
            ],
          },
          {
            title: 'Agile process and collaboration',
            points: [
              'Every day at 9:00, we held a stand-up to discuss progress and blockers.',
              'We split tasks using a simple agile workflow.',
              'In Azure DevOps, we managed user stories, tasks, and repositories.',
              'We also planned early for future integration and merge work between applications.',
              'This gave us a clear view of real team collaboration.',
            ],
          },
        ],
        reflectionTitle: 'Short reflection',
        reflectionPoints: [
          'The first week was intensive but highly educational.',
          'We had enough space to explore independently and received solid guidance whenever we were blocked.',
          'By the end of the week, we had built a strong foundation for the rest of the sprint.',
        ],
      },
      {
        week: 2,
        title: 'Sprint 1 - Week 2: Implementation and first integrations',
        date: 'February 2026',
        introPoints: [
          'In week 2, we shifted from research to implementation.',
          'Step by step, we turned our demo apps into functional components.',
          'After the research phase, our objective was to deliver two working applications.',
        ],
        tags: ['Sprint 1', 'SQL', 'Vectorization', 'API', 'LLM', 'Unit Tests', 'Dapper'],
        sections: [
          {
            title: 'Week 2 focus',
            points: [
              'We improved our earlier demo apps and made them more stable.',
              'We clarified how the frontend, backend, and AI workflow connect end-to-end.',
              'We aligned on technical choices for the next sprint.',
            ],
          },
          {
            title: 'Two apps after the research phase',
            points: [
              'After the research phase, we built two applications with different goals.',
              'The first application used a traditional SQL database setup.',
              'The second application used a vectorized SQL setup for semantic search.',
              'This allowed us to compare standard querying with context-based retrieval.',
            ],
          },
          {
            title: 'What we implemented concretely',
            points: [
              'For the first application, we created a stable SQL connection for the chat workflow.',
              'We provided the LLM with table and column context so it could generate better SQL queries.',
              'We started with a console prototype and then moved to a working API with database and chat logic.',
              'We added unit tests to keep this flow reliable.',
              'For the second application, we prepared data for vector search and tested semantic retrieval results.',
              'We compared both applications in terms of speed, accuracy, and error handling.',
              'In future sprints, we will choose which app direction to continue.',
            ],
          },
        ],
        reflectionTitle: 'Short reflection',
        reflectionPoints: [
          'We moved from loose demo apps to practical building blocks.',
          'The architecture is now much clearer than it was in week 1.',
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
              <h1 className="section__title">My Internship Journey</h1>
              <p className="section__subtitle">
                Objective: Developing a GenAI application for data analysis and visualization through an interactive chat interface.
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
