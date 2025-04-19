import {
    mobile,
    backend,
    tesla,
    web,
    starbucks,
    meta,
    shopify,
    javascript,
    typescript,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    aspnet,
    csharp,
    django,
    mysql,
    python,
    nextjs,
    sql,
    github, 
    facebook,
    linkedin,
    x,
    resume,
  } from "../assets";

  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Learning",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "MERN Developer",
      icon: backend,
    },
    {
      title: "SQl Develeoper",
      icon: sql,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: aspnet,
    },
    {
      name: "CSS 3",
      icon: csharp,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },

    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
  ];
  
  const experiences = [
    {
      title: "HTML/CSS and JS",
      company_name: "",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Aug 2023 - Dec 2023",
      points: [
        "I started my development journey by learning the core building blocks of the web — HTML, CSS, and JavaScript. I focused on creating clean, responsive user interfaces, understanding the fundamentals of the DOM, events, and basic scripting.",
        "During this phase, I built several static and interactive pages and began grasping the logic behind client-side development.",
      ],
    },
    {
      title: "Java DSA",
      company_name: "",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - Aug 2024",
      points: [
        "To strengthen my problem-solving mindset, I dedicated several months to mastering core Java and Data Structures.",
        "I practiced algorithms regularly, working with arrays, linked lists, trees, recursion, and sorting techniques.",
        "This phase helped me develop logical thinking and a structured approach to coding problems — essential for interviews and writing clean code.",
      ],
    },
    {
      title: "React",
      company_name: "",
      icon: shopify,
      iconBg: "#383E56",
      date: "Sept 2024 - Nov 2024",
      points: [
        "Once comfortable with the frontend basics, I stepped into React to build dynamic, component-driven UIs",
        "CI learned about props, state, hooks, conditional rendering, lifecycle methods, and routing.",
        "I built multiple projects using React and started experimenting with tools like Framer Motion and Tailwind CSS to create smooth and stylish user experiences.",
      ],
    },
    {
      title: "Sql & PostgreSQL",
      company_name: "",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Dec 2024 - Jan 2024",
      points: [
        "I then focused on learning SQL and postgreSQL for managing and querying relational databases",
        "I explored data modeling, relationships (one-to-many, many-to-many), joins, aggregate functions, and built queries for real-world-like scenarios.",
        "This gave me a solid base for handling data in backend applications.",
      ],
    },
    {
      title: "MERN",
      company_name: "",
      icon: backend,
      iconBg: "#E6DEDD",
      date: "Jan 2025 - Present",
      points: [
        "Currently, I’m diving deep into full-stack development using the MERN stack — MongoDB, Express.js, React.js, and Node.js.",
        "I'm learning how to build complete web applications from frontend to backend, working with APIs, handling authentication, and managing state across the app.",
        "I'm also exploring deployment and version control to understand the full cycle of modern web development.",
      ],
    },
  ];
  
  

  const projects = [
    {
      name: "FaceRecognitionApp",
      description:
        "An interactive app that detects faces in uploaded images using advanced image processing. Uses login/logout feature.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "express/node/postgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "tachyons",
          color: "pink-text-gradient",
        },
      ],
      image: typescript,
      source_code_link: "https://github.com/SwarnabhaBiswas/Face_recognition",
    },
    {
      name: "Robofriends",
      description:
        "An interactive website for searching and managing friends using React. Users can manage their friends list, search for specific friends, and keep track of them.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "html/css",
          color: "green-text-gradient",
        },
        {
          name: "tachyons",
          color: "pink-text-gradient",
        },
      ],
      image: django,
      source_code_link: "https://github.com/SwarnabhaBiswas/Robofriends",
    },
    
    {
      name: "Simon Says",
      description:
        "A fun little game of simon says which remembers the last clicked colour and checks for the same sequence.This uses simple html/css and lot of javascript.",
      tags: [
        {
          name: "html/css",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        
      ],
      image: nextjs,
      source_code_link: "https://github.com/SwarnabhaBiswas/Simon-Says",
    },
  ];

  
  export const footerlinks = [
    
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/swarnabha-biswas-a4503730a",
      icon: linkedin,
    },
    {
      name: "Resume",
      link: resume,
      icon: "CV",
    },
    {
      name: "Github",
      link: "https://github.com/SwarnabhaBiswas",
      icon: github,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/swarnabha_biswas_/",
      icon: x,
    },
  ];
  
  export { services, technologies, experiences, projects};