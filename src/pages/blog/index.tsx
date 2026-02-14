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
          'During week 1, we focused mainly on research and technical experimentation. Our goal was to understand the tools and overall architecture before building real production features.',
           'This foundation should help us move faster and with better quality in the coming weeks.',
        ],
        tags: ['Sprint 1', 'AI', 'RAG', 'MCP', 'Ollama', 'Azure DevOps'],
        sections: [
          {
            title: 'Exploring AI Technologies',
            points: [
              'We explored Semantic Kernel to understand how AI capabilities can be structured within an application.',
              'We also looked into MCP (Model Context Protocol) to see how context is exchanged between systems.',
              'To keep things manageable, we decided to start with a local LLM before moving to cloud-based models.',
            ],
          },
          {
            title: 'Working with a Local LLM',
            points: [
              'We began with a SQL database to store and retrieve data. After that, we configured a local model in Ollama and connected it to our data.',
              'We built small demo apps where users could ask questions based on the database. Using the same use cases, we tested different models and prompt strategies, comparing speed, accuracy, and response consistency.',
              'Main lesson: clear prompts improve answer quality, and local LLMs can be more limited than cloud LLMs.',
            ],
          },
          {
            title: 'Vectorization and RAG',
            points: [
              'We learned how text can be converted into embeddings (vectors) and how semantic search can retrieve the most relevant context for a query.',
              'We also explored how RAG combines an LLM with external knowledge. Once we started adding context to prompts, responses became clearer and more reliable. This helped us understand the difference between simple prompting and context-based prompting.',
            ],
          },
          {
            title: 'Agile Process and Collaboration',
            points: [
              'Every day at 9:00, we held a stand-up to discuss progress and blockers. Tasks were divided using a simple agile workflow.',
              'In Azure DevOps, we managed user stories, tasks, and repositories. We also started thinking ahead about integration and merging work between applications, which gave us a realistic view of team collaboration.',
            ],
          },
        ],
        reflectionTitle: 'Short reflection',
        reflectionPoints: [
          'The first week was intensive but very educational.',
          'We had the space to explore independently and received solid guidance whenever we were stuck. By the end of the week, we had built a strong foundation for the rest of the sprint.',
          'I’m really happy to be part of this team. The team is very helpful and professional, which makes it easier to learn, ask questions, and improve quickly. Let’s get started!'
        ],
      },
      {
        week: 2,
        title: 'Sprint 1 - Week 2: Implementation and First Integrations',
        date: 'February 2026',
        introPoints: [
          'In week 2, we moved from research into actual building. Step by step, we turned our demo apps into working components.',
          'After finishing the research phase, our goal was simple: get two working basic applications up and running.',
        ],
        tags: ['Sprint 1', 'SQL', 'Vectorization', 'API', 'LLM', 'Unit Tests', 'Dapper'],
        sections: [
          {
            title: 'Week 2 Focus',
            points: [
              'This week was mainly about improving the earlier demos and making them more stable. We also clarified how the frontend, backend, and AI workflow connect from end to end.',
              'At the same time, we aligned on the technical choices that will guide the next sprint.'
            ],
          },
          {
            title: 'Two Applications',
            points: [
              'We developed two applications with distinct goals:',
              'The first application used a traditional SQL database setup. The second application used a vectorized SQL setup for semantic search.',
              'This lets us compare classic querying with context-based retrieval.',
            ],
          },
          {
            title: 'What We Actually Built',
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
          'This week, we moved from demo experiments to solid building blocks, and the architecture is much clearer than in week 1.',
          'We did struggle with setting up unit testing. Our pipeline required at least 80% code coverage, which was harder than expected. It took extra time, but it pushed us to structure the code better and improve overall quality.',
          'I managed to complete my tasks for this sprint and built the full API, connecting the database and chat workflow end-to-end. Sprint 1 succesfull!'
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
