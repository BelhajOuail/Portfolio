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
          'The company had already indicated that this part would be especially challenging, since it requires us to apply flexible security rules to external data sources inside the application.',
        ],
        tags: ['Sprint 4', 'Security', 'Row-Level Security', 'Column-Level Security', 'SQL Server', 'Research', 'Architecture'],
        sections: [
          {
            title: 'A Difficult but Important Challenge',
            points: [
              'The goal of this week was to understand how we can apply security rules to the data shown in the app.',
              'More specifically, we focused on row-level security and column-level security.',
              'That matters because users working in the same application should not automatically have access to the same data.',
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
              'As a result, this week was less about feature completion and more about careful technical investigation.',
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
      {
        week: 2,
        title: 'Sprint 4 - Week 2: Implementing CLS and RLS with Dynamic Query Logic',
        date: 'April 2026',
        introPoints: [
          'In the second week of sprint 4, we moved from exploration into implementation and started building the actual CLS and RLS flow.',
          'It remained the most difficult task in the project, because the solution had to stay dynamic and could not be designed around only one specific data source.',
        ],
        tags: ['Sprint 4', 'Security', 'RLS', 'CLS', 'Dynamic Queries', 'Architecture', 'External Data Sources'],
        sections: [
          {
            title: 'From Research to Implementation',
            points: [
              'After the first week of comparing approaches, we now had to turn those ideas into something that could actually work inside the application.',
              'Our first layer of security already existed in the LLM flow itself, where the model is guided to respect the configured rules when generating queries.',
              'That first layer is useful, but not safe enough on its own, so we also needed a second and harder layer that can enforce row-level security and column-level security regardless of LLM behaviour.',
              'That meant the implementation had to remain flexible enough for multiple external data sources instead of being tightly coupled to one database-specific feature.',
            ],
          },
          {
            title: 'Choosing a Logic-Driven Solution',
            points: [
              'We ended up with an approach where the values of the security rules are stored and then added back into the generated query flow as a hard security layer.',
              'More specifically, those rule values are applied through a view that sits on top of the generated query.',
              'This way, we no longer rely only on the LLM to behave correctly, because the final query result is still filtered by logic that we control ourselves.',
            ],
          },
          {
            title: 'Why This Approach Fits Better',
            points: [
              'This solution gives us more control over how restrictions are applied, which is important because the application is meant to work with external data sources in a reusable way.',
              'It also creates a clearer separation between a softer first layer, where the LLM tries to generate the right query, and a harder second layer, where the application enforces the final restrictions.',
              'If we had focused too heavily on one database-specific mechanism, we would have solved the problem locally but weakened the long-term architecture.',
              'Using logic on top of the generated query makes the security model easier to adapt when the data source or query structure changes later on.',
            ],
          },
        ],
        reflectionTitle: 'Short reflection',
        reflectionPoints: [
          'This week confirmed that sprint 4 is still the hardest part of the internship, because every technical choice has architectural consequences.',
          'What made this work difficult was not only implementing security itself, but also making sure we do not trust the LLM as the only protection layer.',
          'We needed a version of security that stays dynamic and reusable beyond one specific database setup, while still being strict enough to enforce the final result.',
          'Even so, it felt like an important step forward, because we now have a solution direction that is based on logic and flexibility rather than on a rigid external dependency.'
        ],
      },
    ],
  },
  {
    id: 'sprint-5',
    label: 'Sprint 5',
    weeks: [
      {
        week: 1,
        title: 'Sprint 5 - Week 1: Building Reports from Chat Results',
        date: 'May 2026',
        introPoints: [
          'In the first week of sprint 5, we moved toward a feature that makes the application more valuable beyond a single question-and-answer moment.',
          'Users can already receive data in a table or in different kinds of charts, and this week our focus was on turning those outputs into reusable report building blocks.',
        ],
        tags: ['Sprint 5', 'Reports', 'Charts', 'Tables', 'Frontend', 'UX', 'Data Presentation'],
        sections: [
          {
            title: 'From Single Results to Broader Insight',
            points: [
              'Until now, the application was mainly focused on returning one result at a time through the chat flow.',
              'That already worked well for exploring data, but the next logical step was to make those results easier to collect and compare.',
              'A single answer can be useful in the moment, but a report becomes much more valuable when different outputs can be brought together in one place.',
            ],
          },
          {
            title: 'Adding Results to a Report',
            points: [
              'The main idea of this feature is simple: when a user asks for data and receives it as a table or as any kind of graph, that result can be added to a report.',
              'At the moment, a report can contain up to seven separate result components.',
              'This makes it possible to save multiple result blocks instead of losing them after each separate prompt, while gradually building a report that combines different perspectives on the same dataset or on related datasets.',
            ],
          },
          {
            title: 'Validation and Sharing',
            points: [
              'The purpose is not only to collect results, but also to prepare them for sharing inside the organisation.',
              'After a report has been validated, it should be possible to share it with other employees so the generated insights can be used more broadly.',
              'That makes this feature especially relevant, because it turns separate chat results into something that can support communication and decision-making across a team.',
            ],
          },
        ],
        reflectionTitle: 'Short reflection',
        reflectionPoints: [
          'This week felt like an important product step because the application is becoming more practical for real use instead of only answering isolated prompts.',
          'What I found interesting is that the value is not only in generating a result, but in giving users a way to keep and combine those results in a structured way.',
          'Even though the feature itself is relatively simple, it makes the application much more valuable in a real workflow, because validated insights can be grouped and shared with other employees.'
        ],
      },
      {
        week: 2,
        title: 'Sprint 5 - Week 2: Managing and Sharing Reports',
        date: 'May 2026',
        introPoints: [
          'In the second week of sprint 5, we continued building on the reporting feature by making reports easier to manage after they have been created.',
          'The focus was no longer only on collecting results in a report, but also on giving users more control over those reports and making them easier to share inside the organisation.',
        ],
        tags: ['Sprint 5', 'Reports', 'Sharing', 'Frontend', 'UX', 'Collaboration'],
        sections: [
          {
            title: 'Improving Report Management',
            points: [
              'After building the first version of the reporting feature, the next step was to make it more practical to use in a real workflow.',
              'Users can now manage their reports more easily after creation instead of treating them as fixed output.',
              'This makes the feature feel less like a temporary storage place for results and more like a real part of the application.',
            ],
          },
          {
            title: 'Editing and Removing Reports',
            points: [
              'We added the ability to rename reports, which makes it easier for users to organise their work and keep a clear overview.',
              'Reports can now also be deleted when they are no longer needed.',
              'These are relatively simple actions, but they are important because they make the report flow much more usable in practice.',
            ],
          },
          {
            title: 'Sharing Inside the Organisation',
            points: [
              'Another important step was that reports can now be shared with the internal organisation.',
              'This means the feature is no longer only about creating personal report collections, but also about distributing validated insights to other employees.',
              'As a result, the reporting functionality becomes more collaborative and more aligned with how such a product would be used in a company setting.',
            ],
          },
        ],
        reflectionTitle: 'Short reflection',
        reflectionPoints: [
          'This week showed that relatively small product features can still have a strong impact on the usefulness of the application.',
          'Being able to rename, remove, and share reports makes the feature feel much more complete and practical for day-to-day use.',
          'It also strengthens the collaborative side of the app, because reports are now becoming something that can move beyond the individual user and be shared within the organisation.',
          'We also had a Tillit Friday, where everyone in the company came together around midday to look at the overall progress and discuss the past quarter. It was the first time I saw the whole company sitting together like that, and it was interesting to see how people from different roles, such as data engineering, business consulting, and development, all contribute to the bigger picture. Seeing everything together made it much clearer what we are all working toward and what the company has achieved as a whole.'
        ],
      },
    ],
  },
  {
    id: 'sprint-6',
    label: 'Sprint 6',
    weeks: [
      {
        week: 1,
        title: 'Sprint 6 - Week 1: Adding Endorsement Requests Before Sharing Reports',
        date: 'May 2026',
        introPoints: [
          'Once the reporting feature was working, the next step was to build the process around controlled sharing.',
          'A report may be ready from the perspective of its creator, but before it can be shared inside the organisation, it first has to be validated by a data steward.',
        ],
        tags: ['Sprint 6', 'Reports', 'Validation', 'Data Steward', 'Endorsement Request', 'Governance'],
        sections: [
          {
            title: 'Why an Extra Validation Step Is Needed',
            points: [
              'If every user could immediately share any report, there would be too much risk that incorrect or incomplete information gets distributed inside the organisation.',
              'Because of that, we introduced an extra control step before sharing is allowed.',
              'This makes the reporting flow not only more collaborative, but also more reliable and better aligned with how information should be handled in a company environment.',
            ],
          },
          {
            title: 'The Endorsement Request Flow',
            points: [
              'We call this process the endorsement request.',
              'When a report is created and ready to be shared, the maker first sends an endorsement request instead of sharing it directly.',
              'That request is then received by a data steward, who reviews the report and validates whether it is ready for wider use.',
            ],
          },
          {
            title: 'From Approval to Sharing',
            points: [
              'Only after the data steward approves the endorsement request can the creator of the report actually share it with the organisation.',
              'This creates a clear separation between creating content and authorising distribution.',
              'As a result, the feature becomes more trustworthy, because shared reports are no longer just user-generated output but validated information that passed an internal control step.',
            ],
          },
        ],
        reflectionTitle: 'Short reflection',
        reflectionPoints: [
          'This week showed that building a useful feature is only one part of the work; defining the right control flow around it is just as important.',
          'The endorsement request may feel like an extra step, but it makes the reporting feature much stronger because it prevents uncontrolled sharing.',
          'From a coding perspective, this was not one of the most difficult features, because the main work was in backend logic.',
          'The part that can take much more time is the frontend around such a flow, but in terms of the core feature itself we were able to get it working within a relatively short period.'
        ],
      },
      {
        week: 2,
        title: 'Sprint 6 - Week 2: Managing Endorsement Requests',
        date: 'May 2026',
        introPoints: [
          'After implementing the first version of the endorsement request flow, we continued with the next logical step: making those requests manageable.',
          'Week 1 was mainly about approval itself, while this week focused on editing, updating, and removing endorsement requests when needed.',
        ],
        tags: ['Sprint 6', 'Reports', 'Validation', 'Endorsement Request', 'Backend', 'Data Steward'],
        sections: [
          {
            title: 'Building on the Approval Flow',
            points: [
              'The first implementation already allowed a report to be submitted for approval before sharing.',
              'That gave us the base workflow, but in practice a request flow also needs management features around it.',
              'Without those actions, the process would work, but it would still feel too limited in daily use.',
            ],
          },
          {
            title: 'Editing and Updating Requests',
            points: [
              'This week, we added the ability to edit and update endorsement requests.',
              'That means the flow is no longer only about sending a request once, but also about adjusting it when something changes.',
              'It makes the feature more realistic, because approval processes rarely stay completely static from start to finish.',
            ],
          },
          {
            title: 'Removing Requests',
            points: [
              'We also added the ability to remove endorsement requests when they are no longer relevant.',
              'Just like with the reporting features, this is not very complex on a technical level, but it improves the usability of the flow considerably.',
              'Together, these management actions make the endorsement request process feel much more complete.',
            ],
          },
        ],
        reflectionTitle: 'Short reflection',
        reflectionPoints: [
          'This week was a natural continuation of the previous one: first the approval flow itself, then the practical actions around it.',
          'The work was still mostly backend-focused, which is why we could move through it relatively quickly.',
          'Just like in the previous week, the coding itself was not especially difficult, but a more elaborate frontend around these actions could easily take much more time.',
          'Even though these additions are not the most complex part of the project, they make the endorsement request feature much more usable in a real workflow.'
        ],
      },
    ],
  },
  {
    id: 'sprint-7',
    label: 'Sprint 7',
    weeks: [
      {
        week: 1,
        title: 'Sprint 7 - Week 1: Realising the Limits of a SQL-Only Application',
        date: 'June 2026',
        introPoints: [
          'By this point, we had a working application with a solid flow from data retrieval to reporting and validation.',
          'At the same time, it became clear that the current setup was still strongly shaped by one important architectural choice: the application was built entirely around SQL-based data access.',
        ],
        tags: ['Sprint 7', 'Architecture', 'SQL', 'SqlClient', 'Data Sources', 'Scalability'],
        sections: [
          {
            title: 'A Working App with a Clear Limitation',
            points: [
              'Functionally, the application was already doing what it needed to do: users could retrieve data, view results, create reports, and move those reports through a validation flow.',
              'Still, the backend was built around SQL as the only real data access path.',
              'That meant the product worked well, but only within a fairly narrow technical scope.',
            ],
          },
          {
            title: 'How the Current Connection Layer Works',
            points: [
              'At the moment, the Microsoft.Data.SqlClient package in .NET is the part that opens the connection to the database.',
              'The application builds a connection string, SqlClient uses that to create and open a SqlConnection, and once that connection is active, the app can send SQL queries and receive the results.',
              'In practice, this means SqlClient is the layer that really communicates with SQL Server, and we discovered that the same package could also be used to connect to Fabric, which was very convenient.',
            ],
          },
          {
            title: 'Why This Became the Next Challenge',
            points: [
              'That discovery changed the discussion a bit, because it showed that we did not necessarily need a completely different connection approach to start supporting other platforms.',
              'One of the first practical steps was to create a connection page where users can fill in variables such as the server name, database name, and password.',
              'For security reasons, the password is then stored in Azure Key Vault instead of being handled as plain application data.',
              'By doing that, we can configure the connection much more dynamically instead of hardcoding everything into one fixed setup.',
              'We tested this approach with multiple demo databases, and the connections worked successfully.',
              'We also set up a demo Fabric environment to validate the same flow there, and that worked without problems as well.',
              'From there, we started looking at how the same idea could also be extended toward other platforms, possibly depending on how much time would still be left in our internship.',
            ],
          },
          {
            title: 'Testing a Databricks Connection',
            points: [
              'Alongside the work on SQL Server and Fabric, we were also exploring how to connect the application to Databricks.',
              'We set up a Databricks test environment and used statement execution to retrieve data.',
              'In simple terms, statement execution means that the application sends a SQL statement to Databricks through its API, Databricks executes that statement on the configured warehouse or compute environment, and the returned result can then be read back into the application. This allowed us to test whether our app could also retrieve data from Databricks in a structured way, without relying on the exact same connection flow as SQL Server.',
            ],
          },
        ],
        reflectionTitle: 'Short reflection',
        reflectionPoints: [
          'This week was less about adding a visible feature and more about recognising an architectural boundary in the current system.',
          'The application is already usable, but it was valuable to realise that the existing connection layer could be stretched further than we first expected.',
          'It was also reassuring to see that this was not only a theoretical idea, because both the demo databases and the demo Fabric setup worked as expected.',
          'What made this sprint relevant is that it shifted the discussion from only building features to thinking more seriously about portability and future extensibility.',
          'That makes this a valuable sprint as well, because understanding the limitation is the first step toward designing a more flexible solution.'
        ],
      },
      {
        week: 2,
        title: 'Sprint 7 - Week 2: Moving the Connection Flow to Managed Identity',
        date: 'June 2026',
        introPoints: [
          'After getting the dynamic connection flow working, the next step was to move further toward a more secure setup with managed identity.',
          'Conceptually, this was a good next step, but in practice it turned out to be much harder to validate than the earlier connection work.',
          'At the same time, this was also one of the final weeks of the internship, so we started testing the application much more aggressively to expose weak spots before the end.',
        ],
        tags: ['Sprint 7', 'Managed Identity', 'Azure', 'Security', 'Web API', 'Backend'],
        sections: [
          {
            title: 'Why Managed Identity Matters',
            points: [
              'The goal was to let the application connect in a more secure and managed way, without relying on the same kind of direct credential flow everywhere.',
              'That fits better with how enterprise systems are expected to handle access to services and data sources.',
              'So even though the app was already working, this was an important step in making the architecture more mature.',
            ],
          },
          {
            title: 'Difficult to Test Locally',
            points: [
              'The difficult part was not only the code itself, but especially the testing setup.',
              'Our local Web API does not automatically have the same managed identity configuration and permissions as the deployed environment.',
              'To make this work, the identity behind the API needs the correct permissions in the right places, which made local verification much harder than usual.',
            ],
          },
          {
            title: 'Working Through Trial and Error',
            points: [
              'Because of that, our only realistic way of validating this feature was through trial and error.',
              'We created pull requests, deployed changes, tested the result, and reverted when something was still wrong.',
              'It was not the cleanest development flow, but it was the only practical way to gain certainty until we fully understood what configuration was required for it to work correctly.',
              'During that same period, we were also stress-testing the application more broadly, with the clear intention of making it break so we could uncover vulnerabilities and inconsistencies while there was still time to fix them.',
            ],
          },
        ],
        reflectionTitle: 'Short reflection',
        reflectionPoints: [
          'This week was a good reminder that some features are difficult not because the code is complicated, but because the environment around them is.',
          'The managed identity flow was something we were able to investigate and push forward ourselves, but it required much more patience than a normal local development cycle.',
          'The intensive testing was just as valuable, because trying to break the app on purpose helped us expose weak spots that would have been much harder to find through normal usage alone.',
          'Even though the process involved a lot of trial and error, it was still valuable because it helped us understand much better how identity, permissions, deployment context, and application robustness all interact.'
        ],
      },
    ],
  },
  {
    id: 'sprint-8',
    label: 'Sprint 8',
    weeks: [
      {
        week: 1,
        title: 'Sprint 8 - Week 1: Refining the Chat Flow and Preparing the Final Presentation',
        date: 'June 2026',
        introPoints: [
          'In the final week, the focus shifted away from major new features and more toward refinement and preparation.',
          'We spent time improving the chat experience itself, cleaning up the codebase, and preparing the final presentation of everything we had built during the internship.',
        ],
        tags: ['Sprint 8', 'LLM', 'Chat Flow', 'Code Cleanup', 'Presentation', 'Final Delivery'],
        sections: [
          {
            title: 'Improving the LLM Rules',
            points: [
              'One part of this week was focused on improving the rules and guidance around the LLM so the chat flow would behave more consistently.',
              'These adjustments helped the interaction feel smoother and made the responses align better with what we wanted the product to do.',
              'Even small improvements here can have a visible effect, because the chat experience is such a central part of the application.',
            ],
          },
          {
            title: 'Cleaning Up the Codebase',
            points: [
              'We also removed some dead code that was no longer needed.',
              'That kind of cleanup may not be very visible from the outside, but it makes the codebase easier to understand and maintain.',
              'It was a good moment to do that, because by then the overall structure of the application was already much clearer.',
            ],
          },
          {
            title: 'Preparing for the Final Presentation',
            points: [
              'A large part of the week was also about preparing for the final presentation.',
              'Naturally, everyone at Tillit was curious to see what we had been working on during the past months.',
              'That made this final preparation important, because we were not only finishing technical work but also shaping how we would present the full story of the project to the company.',
            ],
          },
        ],
        reflectionTitle: 'Short reflection',
        reflectionPoints: [
          'This week felt like a natural closing phase of the internship.',
          'Instead of building something entirely new, we focused on making the existing application cleaner, smoother, and better prepared for presentation.',
          'It also made the progress of the past months feel very real, because we had to step back and translate all that work into a story that others in the company could understand and appreciate.'
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
