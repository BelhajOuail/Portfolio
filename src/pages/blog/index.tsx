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
              'This lets us compare classic querying with context-based retrieval. We also continued working with a cloud-based LLM instead of only using a local model.',
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
  {
    id: 'sprint-2',
    label: 'Sprint 2',
    weeks: [
      {
        week: 1,
        title: 'Sprint 2 - Week 1: Design, Validation, and Stronger Delivery Flow',
        date: 'March 2026',
        introPoints: [
          'In the first week of sprint 2, the application started to come together more clearly as one product instead of separate technical experiments.',
          'My main focus was on improving the design of the app, strengthening our development workflow, and making the LLM flow more reliable when query generation fails.',
        ],
        tags: ['Sprint 2', 'Design', 'CI/CD', 'PR Pipeline', 'LLM', 'SQL Server', 'Backend Architecture'],
        sections: [
          {
            title: 'Designing the Application',
            points: [
              'A large part of this week was focused on the design of the application so the product feels more structured and usable.',
              'Instead of only building technical features, we also worked on how the app should look and how users will move through the experience.',
              'This helped translate the backend work from sprint 1 into a clearer and more complete application.',
            ],
          },
          {
            title: 'Pipeline and Pull Request Validation',
            points: [
              'I set up a pipeline that automatically triggers the test pipeline for every pull request.',
              'This gives us faster feedback on new changes and helps protect the quality of the code before anything is merged.',
              'As the project grows, this kind of automated validation becomes important to keep development stable and collaborative.',
            ],
          },
          {
            title: 'LLM Auto Validation',
            points: [
              'I also worked on an additional feature where the LLM can validate its own generated query flow.',
              'When the model receives an error after generating a query, it can use that feedback to correct itself and generate a better query automatically.',
              'This makes the system more robust and reduces the number of manual retries needed when something goes wrong.',
            ],
          },
          {
            title: 'Architecture and Data Source Direction',
            points: [
              'The backend is now structured in a modular way, with responsibilities split clearly across the application.',
              'That structure made it easier to compare the different technical directions we had explored earlier.',
              'During this sprint, we decided not to continue with the vectorized approach. The non-vectorized project setup was already working reliably from end to end, so it was the more practical foundation to continue with.',
              'As a result, our current focus stays on SQL Server so we can keep the scope controlled and build the application on a stable base.',
              'At the same time, the way the backend is organised should still make it easier to add other data sources later on.',
            ],
          },
        ],
        reflectionTitle: 'Short reflection',
        reflectionPoints: [
          'This week felt like an important step because the application is starting to feel more like one coherent product.',
          'The combination of design improvements, automated PR validation, and smarter LLM error recovery added both usability and technical maturity.',
          'The architecture is also becoming cleaner, which should make future extensions easier once we move beyond SQL Server.'
        ],
      },
      {
        week: 2,
        title: 'Sprint 2 - Week 2: From Basic Frontend to Interactive Chat Experience',
        date: 'March 2026',
        introPoints: [
          'In the second week of sprint 2, we continued improving the design of the application, with a strong focus on the chat experience.',
          'What started as a basic React frontend is now evolving into a more interactive application where LLM results are presented in a much clearer and more attractive way.',
        ],
        tags: ['Sprint 2', 'Frontend', 'Chat UI', 'LLM', 'UX', 'Data Visualization', 'Charts'],
        sections: [
          {
            title: 'Improving the Chat Design',
            points: [
              'We continued working on the design of the chat interface to make the application feel more polished and intuitive.',
              'The earlier frontend was still quite basic, so this week was about turning it into something that feels more like a real product.',
              'A lot of attention went to the layout, interaction flow, and how responses should be displayed to the user.',
            ],
          },
          {
            title: 'Better Presentation of LLM Results',
            points: [
              'We built a more interactive experience where the output of the LLM is shown in a much more visually appealing way.',
              'Instead of only returning plain text, the application now presents the response more clearly so the result is easier to understand and more pleasant to use.',
              'This makes the overall user experience stronger and helps connect the technical backend to a more accessible frontend.',
            ],
          },
          {
            title: 'Starting Data Visualization Features',
            points: [
              'We also started the first steps toward a feature where results can be shown in a chart.',
              'This is an important direction for the application, because it moves us from only answering questions toward actually visualizing data in a meaningful way.',
              'Although this feature is still in an early stage, the first implementation work has already started.',
            ],
          },
        ],
        reflectionTitle: 'Short reflection',
        reflectionPoints: [
          'This week clearly showed how the application is evolving from a technical prototype into an interactive product, and our focus on the basic chat MVP is now complete so we can move forward into sprint 4.',
          'One of the more difficult parts was working for the first time with a dependency bot that checks packages daily and creates automatic pull requests at the end of the week. That process was useful, but it also showed that package updates do not always work smoothly because some versions are not compatible with others.',
          'A clear lesson for me was that dependency management is not only about updating packages, but also about testing carefully and understanding how changes in one library can affect the stability of the full application.'
        ],
      },
    ],
  },
  {
    id: 'sprint-3',
    label: 'Sprint 3',
    weeks: [
      {
        week: 1,
        title: 'Sprint 3 - Week 1: Authentication and Completing the Chart Experience',
        date: 'April 2026',
        introPoints: [
          'In the first week of sprint 3, we continued building on the basic chat MVP that was already able to return data and show it in charts.',
          'This week, our focus was on making that foundation more complete and more realistic by improving security, refining the frontend, and moving toward a more professional LLM setup.',
        ],
        tags: ['Sprint 3', 'Authentication', 'Entra ID', 'PrimeReact', 'Charts', 'Frontend', 'Security', 'LLM'],
        sections: [
          {
            title: 'Building on the Existing MVP',
            points: [
              'By this point, we already had a basic chat MVP that could return data and also show results in charts.',
              'That gave us a solid foundation to build on, so this week we could focus less on core chat functionality and more on turning the application into a more complete product.',
              'The next logical step was to improve security and make the full user flow feel more realistic.',
            ],
          },
          {
            title: 'Working with Entra ID',
            points: [
              'For the login flow, we decided to work with Entra ID.',
              'This gives us a professional and widely used authentication solution that fits well in a company environment.',
              'We implemented this across both the frontend and backend, including login, logout, token handling, and protected routes so only authenticated users can access the application.',
            ],
          },
          {
            title: 'Completing the Chart Feature',
            points: [
              'Alongside the authentication work, we also finished and refined the chart implementation in the frontend.',
              'We decided to use PrimeReact for components such as icons and charts, which helped us move faster and keep the frontend consistent.',
              'The application can now explicitly respond to prompts where the user asks the LLM to present data in a chart, after which that chart is shown directly in the interface.',
            ],
          },
          {
            title: 'Moving Away from Local Models',
            points: [
              'Another important change was that the company set us up to move away from running local LLMs for this project.',
              'Instead, we received API keys for an external LLM, which we now store and use in a secure way inside the application.',
              'This gives us a setup that is better aligned with how the product is expected to be used in a professional environment, where security and reliability matter more than local experimentation.',
            ],
          },
          {
            title: 'Why This Week Matters',
            points: [
              'Together, these changes improved both the technical and user-facing side of the application.',
              'Authentication makes the product more realistic and secure, the chart feature makes the results of the LLM easier to understand, and the external LLM setup brings the project closer to a professional working environment.',
              'It is another clear step away from a prototype and closer to a usable internal product.',
            ],
          },
        ],
        reflectionTitle: 'Short reflection',
        reflectionPoints: [
          'This week brought together several important parts of the application: secure access, clearer data presentation, and a more realistic technical setup.',
          'Working with React itself was not too difficult because we already had a strong foundation from school, which made it easier to focus on the implementation details instead of the basics.',
          'What was especially new for me was working with Entra ID. I had already built login and registration systems before, but not in this setup, so it was a good opportunity to learn how authentication works in a more enterprise-oriented environment.',
          'It also became clear that moving from local models to a securely managed external LLM is a more realistic direction for the application, especially in a company context where security and reliability matter more.'
        ],
      },
      {
        week: 2,
        title: 'Sprint 3 - Week 2: Completing the Login Flow and Defining Roles',
        date: 'April 2026',
        introPoints: [
          'In the second week of sprint 3, we completed the full login flow for the application.',
          'With authentication in place, the next step was to define a clear role structure on top of Entra ID so different users can access the app in the right way within an organisation.',
        ],
        tags: ['Sprint 3', 'Authentication', 'Entra ID', 'Roles', 'Authorization', 'Security', 'Admin'],
        sections: [
          {
            title: 'Finalising the Login Flow',
            points: [
              'This week, we finished the login flow that we started in the previous week.',
              'The authentication setup with Entra ID is now fully connected and ready to support the rest of the application.',
              'With that base in place, we could move from simply authenticating users to deciding what different users are allowed to do inside the app.',
            ],
          },
          {
            title: 'Working with Roles in Entra ID',
            points: [
              'The purpose of this setup is to assign roles to users coming from Entra ID.',
              'We defined two main roles in the application: data stewards and data analysts.',
              'Data stewards act as the more administrative users, while data analysts are the regular users of the app within an organisation.',
            ],
          },
          {
            title: 'Why This Foundation Matters',
            points: [
              'This role-based foundation is important because not every user should have access to the same actions or settings.',
              'Data stewards need more control inside the application so they can configure and manage important parts of the system.',
              'We also reflect this visually and functionally in the app by hiding or blocking certain admin endpoints and interface options for data analysts.',
              'By separating those permissions now, we create a stronger base for future features and a more realistic enterprise setup.',
            ],
          },
        ],
        reflectionTitle: 'Short reflection',
        reflectionPoints: [
          'This week was important because the authentication work is no longer only about logging in, but also about structuring access inside the application.',
          'The distinction between data stewards and data analysts makes the app much more realistic for use within an organisation.',
          'It also gives us a solid foundation for future work, because administrative features can now be developed separately from the normal user flow.'
        ],
      },
    ],
  },
  {
    id: 'sprint-4',
    label: 'Sprint 4',
    weeks: [
      {
        week: 1,
        title: 'Sprint 4 - Week 1: Exploring Row-Level and Column-Level Security',
        date: 'April 2026',
        introPoints: [
          'In the first week of sprint 4, we started working on what was probably the most difficult task of the entire internship project.',
          'The company had already indicated that this part would be especially challenging, because it requires us to apply flexible security rules to external data sources inside the application.',
        ],
        tags: ['Sprint 4', 'Security', 'Row-Level Security', 'Column-Level Security', 'SQL Server', 'Research', 'Architecture'],
        sections: [
          {
            title: 'A Difficult but Important Challenge',
            points: [
              'The goal of this week was to understand how we can apply security rules to the data shown in the app.',
              'More specifically, we focused on row-level security and column-level security.',
              'This is important because different users should not always be allowed to see the same data, even when they work in the same application.',
            ],
          },
          {
            title: 'What We Want to Achieve',
            points: [
              'The idea is that a data steward should be able to configure rules on the database side by creating a role with specific restrictions and then assigning one or more data analysts to that role.',
              'For example, we could create a production role that only returns employees linked to production-related records. That is an example of row-level security.',
              'In the same way, it should also be possible to completely hide certain columns when users are not allowed to see that information.',
            ],
          },
          {
            title: 'Evaluating Possible Approaches',
            points: [
              'There are many different ways to solve this kind of problem, so a large part of this week was spent exploring and comparing options.',
              'We did not want to rely on creating database views or policies as the main solution for this use case, because our goal was to make the setup as dynamic as possible.',
              'Using EF Core was also not a good option here, because it does not add much value for external data sources and is more useful for our own internal application data.',
            ],
          },
          {
            title: 'Focus of the Week',
            points: [
              'Because of that, this week was mainly about learning the concept in depth and testing different technical directions.',
              'The goal was not just to build something quickly, but to understand which approach would be the most practical and maintainable for our application.',
              'That made this week less about feature completion and more about careful technical investigation.',
            ],
          },
        ],
        reflectionTitle: 'Short reflection',
        reflectionPoints: [
          'This was one of the hardest weeks of the internship so far, mainly because the problem is quite complex and there is no obvious solution.',
          'A big part of this week was going through different options and figuring out which ones actually fit our architecture and the way we work with external data sources.',
          'Even though we do not have the final solution yet, this week did help us understand the security challenge much better and gave us a clearer direction for the next steps.'
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
