import {
    mobile,
    arkx,
    alx,
    yosobox,
    odex,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Engineer",
      icon: web,
    },
    {
      title: "Web Developer",
      icon: mobile,
    },
    {
      title: "Junior Pentester",
      icon: backend,
    },
    {
      title: "Administrator of Systems and Networks",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "6-Month MERN Stack Bootcamp",
      company_name: "Ark X",
      icon: arkx,
      iconBg: "#383E56",
      date: "january 2024 - Present",
      points: [
        "Building full-stack web applications through an intensive MERN bootcamp.",
        "Mastering MongoDB for scalable database design and management.",
        "Developing high-performance server-side applications with Express.js.",
        "Creating interactive UI and responsive UX with React.",
        "Building powerful back-end systems with Node.js for real-time data processing.",
      ],
    },
    {
      title: "12-Month Software Engineering Bootcamp",
      company_name: "ALX Africa",
      icon: alx,
      iconBg: "#E6DEDD",
      date: "Feb 2023 - Apr 2024",
      points: [
        "Developed full-stack web applications using HTML, CSS, JavaScript, React, Next.js, Node.js, and Express.js.",
        "Built and deployed server-side applications with Python frameworks like Django and Flask.",
        "Designed and maintained relational databases using SQL, including schema design, query optimization, and performance tuning.",
        "Implemented NoSQL databases to handle unstructured and semi-structured data.",
        "Developed frontend app that communicate with RESTful APIs to fetch and manipulate data.",
        "Implemented GraphQL queries and mutations to optimize data fetching and management.",
        "Honed critical thinking, problem-solving, collaboration, communication, and independent learning skills.",
      ],
    },
    {
      title: "Internship : Junior Pentester",
      company_name: "YoSoBox",
      icon: yosobox,
      iconBg: "#383E56",
      date: "Apr 2023 - July 2023",
      points: [
        "Conducted penetration tests and vulnerability scans to identify weaknesses in security infrastructure.",
        "I actively participated in a project focused on building an IPS/IDS",
        "Implemented security best practices and recommended remediation measures based on findings from penetration tests and vulnerability assessments.",
      ],
    },
    {
      title: "Internship : Odoo Developer",
      company_name: "Odex Sarl au",
      icon: odex,
      iconBg: "#E6DEDD",
      date: "June 2021 - aug 2021",
      points: [
        "I spearheaded the creation of a school management website using Odoo, focusing on designing and optimizing its features to perfectly suit the institution's unique requirements.",
        "I got hands-on with Odoo modules, diving into database management.",
        "Working closely with stakeholders, I ensured that every feature implemented aligned perfectly with the institution's goals.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };