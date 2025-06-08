/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('jobs').del();
  await knex('jobs')
    .insert([
      // 15 backend-related jobs
      {
        id: 1,
        role: 'backend engineer',
        description: `As a Backend Engineer, you will design, develop, and maintain scalable server-side applications. You will collaborate with frontend engineers and product managers to deliver robust APIs and backend services that power our platform.

Required skills include proficiency in Node.js, experience with relational databases, and a strong understanding of RESTful API design. You will be expected to build high-performance payment systems and ensure the reliability and security of backend processes. Experience in payment processing or fintech is highly desirable.`,
        embedding_vector: null,
      },
      {
        id: 2,
        role: 'senior backend developer (golang)',
        description: `The Senior Backend Developer (Golang) will architect and implement complex backend systems using Go. You will lead backend projects, mentor junior developers, and collaborate with cross-functional teams to deliver mission-critical features.

Expertise in Golang, microservices architecture, and cloud platforms is required. You will be responsible for optimizing system performance, ensuring code quality, and driving best practices in backend development. Experience with distributed systems and high-availability services is a plus.`,
        embedding_vector: null,
      },
      {
        id: 3,
        role: 'backend architect',
        description: `As a Backend Architect, you will design the overall structure of backend systems, ensuring scalability, security, and maintainability. You will set technical direction, review code, and work with stakeholders to align backend solutions with business goals.

Strong experience in system architecture, database design, and cloud infrastructure is essential. You will guide teams in adopting best practices and new technologies, and play a key role in technical decision-making for backend projects.`,
        embedding_vector: null,
      },
      {
        id: 4,
        role: 'backend developer',
        description: `The Backend Developer will be responsible for building and maintaining the core logic, databases, and APIs of our applications. You will work closely with other engineers to ensure seamless integration and high performance.

Skills required include experience with Python or Java, RESTful API development, and familiarity with cloud services. You will help build robust systems that support millions of users and ensure data integrity and security.`,
        embedding_vector: null,
      },
      {
        id: 5,
        role: 'senior backend engineer',
        description: `As a Senior Backend Engineer, you will lead the development of backend services and mentor junior engineers. You will be responsible for designing scalable architectures and ensuring the reliability of our systems.

Expertise in distributed systems, database optimization, and cloud infrastructure is required. You will drive technical excellence and help shape the future of our backend technology stack.`,
        embedding_vector: null,
      },
      {
        id: 6,
        role: 'backend API developer',
        description: `The Backend API Developer will design and implement robust APIs for our platform. You will ensure that APIs are well-documented, secure, and scalable, supporting both internal and external integrations.

Required skills include experience with REST and GraphQL, API security best practices, and proficiency in at least one backend language such as Node.js or Go. You will work closely with frontend and mobile teams to deliver seamless user experiences.`,
        embedding_vector: null,
      },
      {
        id: 7,
        role: 'cloud backend engineer',
        description: `As a Cloud Backend Engineer, you will develop and maintain backend services deployed on cloud platforms. You will focus on scalability, reliability, and cost-efficiency of cloud-based solutions.

Experience with AWS, GCP, or Azure, containerization (Docker/Kubernetes), and CI/CD pipelines is essential. You will help automate deployments and monitor system health in production environments.`,
        embedding_vector: null,
      },
      {
        id: 8,
        role: 'backend systems engineer',
        description: `The Backend Systems Engineer will be responsible for the design and maintenance of core backend infrastructure. You will ensure high availability and performance of mission-critical systems.

Skills required include Linux system administration, scripting, and experience with monitoring and alerting tools. You will collaborate with DevOps and security teams to maintain a robust backend environment.`,
        embedding_vector: null,
      },
      {
        id: 9,
        role: 'database backend engineer',
        description: `As a Database Backend Engineer, you will design, implement, and optimize database solutions for our applications. You will ensure data consistency, security, and high performance across all backend systems.

Expertise in SQL and NoSQL databases, data modeling, and query optimization is required. You will work closely with application developers to support new features and business requirements.`,
        embedding_vector: null,
      },
      {
        id: 10,
        role: 'backend integration engineer',
        description: `The Backend Integration Engineer will develop and maintain integrations between our platform and third-party services. You will ensure data flows smoothly and securely between systems.

Required skills include experience with API integration, message queues, and data transformation. You will troubleshoot integration issues and work with partners to deliver reliable solutions.`,
        embedding_vector: null,
      },
      {
        id: 11,
        role: 'microservices backend engineer',
        description: `As a Microservices Backend Engineer, you will design and implement microservices architectures for scalable and maintainable systems. You will break down monolithic applications into independent services.

Experience with Docker, Kubernetes, and service discovery is essential. You will ensure that microservices communicate efficiently and are resilient to failures.`,
        embedding_vector: null,
      },
      {
        id: 12,
        role: 'backend devops engineer',
        description: `The Backend DevOps Engineer will automate and streamline backend deployments and operations. You will build CI/CD pipelines, monitor system health, and ensure rapid recovery from failures.

Skills required include scripting, infrastructure as code (Terraform/Ansible), and experience with cloud platforms. You will collaborate with developers to improve deployment processes and system reliability.`,
        embedding_vector: null,
      },
      {
        id: 13,
        role: 'backend security engineer',
        description: `As a Backend Security Engineer, you will ensure the security of backend systems and data. You will conduct security audits, implement best practices, and respond to incidents.

Experience with authentication, authorization, encryption, and vulnerability management is required. You will work with development teams to build secure applications from the ground up.`,
        embedding_vector: null,
      },
      {
        id: 14,
        role: 'backend analytics engineer',
        description: `The Backend Analytics Engineer will design and implement data pipelines and analytics solutions. You will enable data-driven decision-making by ensuring data is collected, processed, and made available for analysis.

Skills required include ETL development, data warehousing, and experience with analytics tools. You will collaborate with data scientists and analysts to deliver actionable insights.`,
        embedding_vector: null,
      },
      {
        id: 15,
        role: 'backend platform engineer',
        description: `As a Backend Platform Engineer, you will build and maintain the core platform services that support all applications. You will focus on scalability, reliability, and developer productivity.

Experience with platform engineering, automation, and developer tooling is required. You will work with multiple teams to ensure the platform meets business and technical needs.`,
        embedding_vector: null,
      },
      // 10 non-backend jobs
      {
        id: 16,
        role: 'frontend engineer',
        description: `The Frontend Engineer will develop and maintain user-facing features, ensuring seamless integration with backend services. You will collaborate with designers and backend engineers to deliver high-quality web applications.

Proficiency in modern JavaScript frameworks (such as React or Vue), strong UI/UX sensibility, and experience with responsive design are required. You will be responsible for optimizing application performance and ensuring a smooth user experience across devices.`,
        embedding_vector: null,
      },
      {
        id: 17,
        role: 'ui/ux designer',
        description: `As a UI/UX Designer, you will create intuitive and visually appealing user interfaces for our products. You will conduct user research, develop wireframes and prototypes, and work closely with engineers to implement your designs.

Strong skills in design tools (Figma, Sketch, Adobe XD), a deep understanding of user-centered design principles, and experience in usability testing are required. You will play a key role in shaping the look and feel of our applications, ensuring they are both functional and delightful to use.`,
        embedding_vector: null,
      },
      {
        id: 18,
        role: 'qa engineer',
        description: `The QA Engineer will be responsible for testing and ensuring the quality of our software products. You will design test cases, automate testing processes, and work closely with developers to resolve issues.

Skills required include experience with automated testing frameworks, bug tracking, and a keen attention to detail. You will help maintain high standards for product reliability and user satisfaction.`,
        embedding_vector: null,
      },
      {
        id: 19,
        role: 'mobile developer',
        description: `As a Mobile Developer, you will build and maintain mobile applications for iOS and Android platforms. You will work with designers and backend engineers to deliver seamless mobile experiences.

Proficiency in Swift, Kotlin, or React Native, and experience with mobile app deployment and performance optimization are required. You will ensure that our mobile apps are robust, user-friendly, and performant.`,
        embedding_vector: null,
      },
      {
        id: 20,
        role: 'product manager',
        description: `The Product Manager will define product vision, gather requirements, and work with engineering teams to deliver features that delight users. You will prioritize the product roadmap and ensure alignment with business goals.

Skills required include strong communication, project management, and analytical thinking. You will collaborate with stakeholders across the company to drive product success.`,
        embedding_vector: null,
      },
      {
        id: 21,
        role: 'devops engineer',
        description: `As a DevOps Engineer, you will automate infrastructure, manage deployments, and monitor system health. You will work with development teams to ensure smooth and reliable software delivery.

Experience with CI/CD pipelines, cloud platforms, and infrastructure as code is required. You will help improve system reliability and deployment speed.`,
        embedding_vector: null,
      },
      {
        id: 22,
        role: 'data analyst',
        description: `The Data Analyst will collect, process, and analyze data to support business decisions. You will create reports, dashboards, and visualizations to communicate insights to stakeholders.

Skills required include SQL, data visualization tools, and statistical analysis. You will work closely with product and engineering teams to drive data-driven strategies.`,
        embedding_vector: null,
      },
      {
        id: 23,
        role: 'project manager',
        description: `As a Project Manager, you will plan, execute, and deliver projects on time and within budget. You will coordinate cross-functional teams and manage project risks and issues.

Strong organizational and leadership skills are required. You will ensure that project goals are met and stakeholders are kept informed throughout the project lifecycle.`,
        embedding_vector: null,
      },
      {
        id: 24,
        role: 'scrum master',
        description: `The Scrum Master will facilitate agile ceremonies, remove impediments, and help teams adopt agile best practices. You will work closely with product owners and development teams to ensure successful sprint delivery.

Experience with agile methodologies, servant leadership, and team coaching is required. You will foster a culture of continuous improvement and collaboration.`,
        embedding_vector: null,
      },
      {
        id: 25,
        role: 'customer support specialist',
        description: `As a Customer Support Specialist, you will assist users with product issues, answer questions, and ensure a positive customer experience. You will document common issues and work with engineering teams to resolve bugs.

Excellent communication skills, empathy, and problem-solving abilities are required. You will play a key role in maintaining customer satisfaction and loyalty.`,
        embedding_vector: null,
      },
    ])
    .onConflict('id')
    .merge();
};
