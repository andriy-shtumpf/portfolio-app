const skillCategories = {
    "Backend Java Stream": [
        {
            imgSrc: "/images/java.svg",
            label: "Java",
            desc: "8, 11, 17+",
        },
        {
            imgSrc: "/images/spring.svg",
            label: "Spring Boot",
            desc: "Java Framework",
        },
        {
            imgSrc: "/images/spring-webflux.svg",
            label: "Spring WebFlux",
            desc: "Reactive Programming",
        },
        {
            imgSrc: "/images/jpa.svg",
            label: "Spring Data Repositories",
            desc: "JDBC, JPA, NOSQL",
        },
        {
            imgSrc: "/images/spring-security.svg",
            label: "Spring Security",
            desc: "Authentication & Authorization",
        },
        {
            imgSrc: "/images/spring-cloud.svg",
            label: "Spring Cloud",
            desc: "Microservices",
        },
        {
            imgSrc: "/images/hibernate.svg",
            label: "Hibernate",
            desc: "ORM",
        },
        {
            imgSrc: "/images/restful-apis.svg",
            label: "RESTful APIs",
            desc: "Web Services",
        },
        {
            imgSrc: "/images/maven.svg",
            label: "Maven",
            desc: "Build Tool",
        },
        {
            imgSrc: "/images/gradle.svg",
            label: "Gradle",
            desc: "Build Tool",
        },
        {
            imgSrc: "/images/mockito.svg",
            label: "Mockito",
            desc: "Java Mocking",
        },
        {
            imgSrc: "/images/oauth.svg",
            label: "OAuth 2.0",
            desc: "Authentication Protocol",
        },
        {
            imgSrc: "/images/junit.svg",
            label: "Cucumber",
            desc: "BDD Testing",
        },
        {
            imgSrc: "/images/event-driven.svg",
            label: "Event-Driven Architecture",
            desc: "Async Messaging",
        },
        {
            imgSrc: "/images/distributed-systems.svg",
            label: "Distributed Systems",
            desc: "Scalable Architecture",
        },
        {
            imgSrc: "/images/cloud-native.svg",
            label: "Cloud Native",
            desc: "Modern Deployment",
        },
        {
            imgSrc: "/images/jira.svg",
            label: "Jira",
            desc: "Project Management",
        },
        {
            imgSrc: "/images/confluence.svg",
            label: "Confluence",
            desc: "Documentation",
        },
        {
            imgSrc: "/images/restful-apis.svg",
            label: "GraphQL APIs",
            desc: "Query Language",
        },
        {
            imgSrc: "/images/event-driven.svg",
            label: "WebSockets",
            desc: "Real-time Communication",
        },
        {
            imgSrc: "/images/spring-webflux.svg",
            label: "Reactive Streams",
            desc: "Non-blocking I/O",
        },
    ],
    "Frontend React Stream": [
        {
            imgSrc: "/images/javascript.svg",
            label: "JavaScript",
            desc: "ES6+",
        },
        {
            imgSrc: "/images/react.svg",
            label: "React.js",
            desc: "React Framework",
        },
        {
            imgSrc: "/images/typescript.svg",
            label: "TypeScript",
            desc: "Type Safety",
        },
        {
            imgSrc: "/images/nextjs.svg",
            label: "Next.js",
            desc: "React Framework",
        },
        {
            imgSrc: "/images/redux.svg",
            label: "Redux",
            desc: "State Management",
        },
        {
            imgSrc: "/images/css3.svg",
            label: "CSS3",
            desc: "Styling",
        },
        {
            imgSrc: "/images/tailwindcss.svg",
            label: "Tailwind CSS",
            desc: "CSS Framework",
        },
        {
            imgSrc: "/images/nodejs.svg",
            label: "Node.js",
            desc: "JavaScript Runtime",
        },
        {
            imgSrc: "/images/expressjs.svg",
            label: "Express.js",
            desc: "Web Framework",
        },
        {
            imgSrc: "/images/figma.svg",
            label: "Figma",
            desc: "UI/UX Design",
        },
        {
            imgSrc: "/images/react.svg",
            label: "React Hooks",
            desc: "Modern React Patterns",
        },
        {
            imgSrc: "/images/redux.svg",
            label: "Zustand",
            desc: "Lightweight State Management",
        },
        {
            imgSrc: "/images/nodejs.svg",
            label: "Vite",
            desc: "Fast Build Tool",
        },
        {
            imgSrc: "/images/react.svg",
            label: "React Query",
            desc: "Data Fetching & Caching",
        },
        {
            imgSrc: "/images/css3.svg",
            label: "Material UI",
            desc: "React Component Library",
        },
        {
            imgSrc: "/images/javascript.svg",
            label: "React Hook Form",
            desc: "Form Management",
        },
        {
            imgSrc: "/images/css3.svg",
            label: "Framer Motion",
            desc: "Animation Library",
        },
        {
            imgSrc: "/images/junit.svg",
            label: "React Testing Library",
            desc: "Component Testing",
        },
        {
            imgSrc: "/images/react.svg",
            label: "Storybook",
            desc: "Component Development",
        },
        {
            imgSrc: "/images/react.svg",
            label: "React Router",
            desc: "Client-side Routing",
        },
    ],
    "General Programming & Frameworks": [
        {
            imgSrc: "/images/microservices.svg",
            label: "Microservices",
            desc: "Architecture",
        },
        {
            imgSrc: "/images/python.svg",
            label: "Python",
            desc: "Programming Language",
        },
        {
            imgSrc: "/images/micronaut.svg",
            label: "Micronaut",
            desc: "Java Framework",
        },
        {
            imgSrc: "/images/cloud-native.svg",
            label: "AWS",
            desc: "Cloud Platform",
        },
        {
            imgSrc: "/images/azure.svg",
            label: "Microsoft Azure",
            desc: "Cloud Platform",
        },
        {
            imgSrc: "/images/cloud-native.svg",
            label: "Vercel",
            desc: "Frontend Deployment",
        },
        {
            imgSrc: "/images/docker.svg",
            label: "Docker",
            desc: "Containerization",
        },
        {
            imgSrc: "/images/kubernetes.svg",
            label: "Kubernetes",
            desc: "Container Orchestration",
        },
        {
            imgSrc: "/images/gitlab.svg",
            label: "GitLab",
            desc: "CI/CD",
        },
        {
            imgSrc: "/images/jenkins.svg",
            label: "Jenkins",
            desc: "CI/CD Automation",
        },
        {
            imgSrc: "/images/terraform.svg",
            label: "Terraform",
            desc: "Infrastructure as Code",
        },
        {
            imgSrc: "/images/sql.svg",
            label: "SQL",
            desc: "Query Language",
        },
        {
            imgSrc: "/images/neo4j.svg",
            label: "Neo4j",
            desc: "Graph Database",
        },
        {
            imgSrc: "/images/postgresql.svg",
            label: "PostgreSQL",
            desc: "Relational Database",
        },
        {
            imgSrc: "/images/postgresql.svg",
            label: "Neon.tech",
            desc: "Serverless Postgres",
        },
        {
            imgSrc: "/images/mongodb.svg",
            label: "MongoDB",
            desc: "NoSQL Database",
        },
        {
            imgSrc: "/images/redis.svg",
            label: "Redis",
            desc: "In-Memory Database",
        },
        {
            imgSrc: "/images/apachekafka.svg",
            label: "Apache Kafka",
            desc: "Event Streaming",
        },
        {
            imgSrc: "/images/junit.svg",
            label: "JUnit",
            desc: "Java Testing",
        },
        {
            imgSrc: "/images/junit.svg",
            label: "Jest",
            desc: "JS Testing",
        },
        {
            imgSrc: "/images/selenium.svg",
            label: "Selenium",
            desc: "Web Automation",
        },
        {
            imgSrc: "/images/git.svg",
            label: "Git",
            desc: "Version Control",
        },
        {
            imgSrc: "/images/intellij.svg",
            label: "IntelliJ IDEA",
            desc: "IDE",
        },
        {
            imgSrc: "/images/vscode.svg",
            label: "VS Code",
            desc: "Editor",
        },
    ],
};

// Flatten all skills into a single array for backward compatibility
const skillItem = [
    ...skillCategories["Backend Java Stream"],
    ...skillCategories["Frontend React Stream"],
    ...skillCategories["General Programming & Frameworks"],
];

export { skillCategories, skillItem };
