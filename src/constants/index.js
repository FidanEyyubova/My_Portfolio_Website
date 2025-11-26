import {
  api,
  bootstrap,
  code,
  css,
  figma,
  gameverse,
  html,
  icta,
  javascript,
  nextjs,
  react,
  reactjs,
  redux,
  responsive,
  rockvell,
  sass,
  tailwindcss,
  typescript,
  chitchat,
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
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  {
    title: "Front-End Developer",
    icon: code,
  },
  {
    title: "React Developer",
    icon: react,
  },
  {
    title: "Responsive Web Designer",
    icon: responsive,
  },
  {
    title: "API & Data Integration",
    icon: api,
  },
];
export const experiences = [
  {
    title: "Front-end Developer – Startup",
    company_name: "Rockvell Tech",
    place: "Baku, Azerbaijan",
    icon: rockvell,
    iconBg: "#cdd1ce",
    date: "Oct 2025 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front-end Developer Intern",
    company_name: "Information Communication Technologies Agency",
    place: "Baku, Azerbaijan",
    icon: icta,
    iconBg: "#cdd1ce",
    date: "July 2025 - Sep 2025",
    points: [
      "Contributed to the development and maintenance of dynamic and responsive web applications using React.js and related modern technologies.",
      "Collaborated with designers, product managers, and developers to build user-centric interfaces that align with project goals and design standards.",
      "Implemented responsive layouts and ensured cross-browser compatibility for consistent performance across all devices.",
      "Participated in code reviews, shared best practices, and provided constructive feedback to enhance code quality and maintainability.",
    ],
  },
];

export const education = [
  {
    title: "Front-end Development",
    institution: "Code-Camp UNEC & Matrix Academy",
    year: "Oct 2024 - Feb 2025",
    description:
      "Learned HTML, CSS, JS, and React fundamentals for modern web apps.",
  },
  {
    title: "Front-end Development",
    institution: "Matrix Academy",
    year: "July 2024 - Jan 2025",
    description:
      "Practiced frontend coding and built React-based web projects.",
  },
  {
    title: "BSc in Communication Systems Engineering",
    institution: "UNEC",
    year: "Sep 2021 - July 2025",
    description:
      "Studied networking, signal processing, and communication systems.",
  },
];

export const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "Cascading Style Sheets",
    icon: css,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Javascript",
    icon: javascript,
  },
  {
    name: "ReactJS",
    icon: reactjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Typescript",
    icon: typescript,
  },
  {
    name: "NextJS",
    icon: nextjs,
  },
  {
    name: "Figma",
    icon: figma,
  },

  {
    name: "Tailwind CSS",
    icon: tailwindcss,
  },
  {
    name: "SASS",
    icon: sass,
  },
];

export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

export const projects = [
  {
    name: "GameVerse",
    description:
      "E-commerce website that allows users to browse, purchase, and manage video games online, providing a convenient and engaging platform for digital game shopping.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: gameverse,
    source_code_link:
      "https://github.com/FidanEyyubova/Final-Project-GameVerse",
    live_code_link: "https://gameverse-ecommerce.netlify.app/",
  },
  {
    name: "Chitchat",
    description:
      "A modern, real-time chat app built with the MERN stack using Socket.io for real-time messaging, Tailwind CSS and Animate.css for UI, and React Hot Toast & Axios for frontend interactions.",
    tags: [
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
      {
        name: "socket.io",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwind.css",
        color: "pink-text-gradient",
      },
    ],
    image: chitchat,
    source_code_link:
      "https://github.com/FidanEyyubova/Real_Time_Chat_App_MERN",
    live_code_link: "https://real-time-chat-app-mern-frontend.onrender.com/",
  },
];

export const certificates = [
  {
    title: "Summer Internship Program",
    level: "Certificate",
    place: "Information Communication Technologies Agency",
  },
  {
    title: "Front-end Development",
    level: "Certificate",
    place: "Code-Camp UNEC & Matrix academy",
  },
  {
    title: "Front-end Development",
    level: "Diploma",
    place: "Matrix academy",
  },
  {
    title: "JavaScript Master Course",
    level: "Certificate",
    place: "Udemy",
  },
];
