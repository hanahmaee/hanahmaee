import {
  FaFileSignature,
  FaLaptopCode,
  FaPalette,
} from "react-icons/fa";

import {
  SiVite,
  SiJavascript,
  SiTypescript,
  SiPhp,
} from "react-icons/si";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaJava,
  FaDatabase,
} from "react-icons/fa";

import { RiHomeGearFill } from "react-icons/ri";

export const skillCards = [
  {
    title: "UI/UX Design",
    desc: "Designing intuitive, accessible, and beautiful user interfaces with tools like Figma, Wix, and Canva.",
    icon: FaPalette,
  },
  {
    title: "Project Management",
    desc: "Leading teams, managing timelines, and delivering on goals using Agile, Scrum, and Kanban practices.",
    icon: FaFileSignature,
  },
  {
    title: "Web Development",
    desc: "Building responsive, performant, and scalable web apps with modern tech stacks (React, Python, Node, etc).",
    icon: FaLaptopCode,
  },
];

export const techStackRectangular = [
  { icon: SiVite, label: "Next.js" },
  { icon: FaReact, label: "React.js" },
  { icon: SiVite, label: "Vite" },
  { icon: FaGithub, label: "GitHub" },
  { icon: FaHtml5, label: "HTML" },
  { icon: FaCss3Alt, label: "CSS" },
  { icon: SiJavascript, label: "JavaScript" },
  { icon: SiPhp, label: "PHP" },
  { icon: FaDatabase, label: "SQL" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: FaJava, label: "Java" },
  { icon: RiHomeGearFill, label: "Testing" },
];

export const experienceData = [
  {
    date: "January 2025 – April 2025",
    position: "Project Manager & Front-End Developer Intern",
    company: "Results Marketing Partners",
    location: "Pennsylvania",
    description: [
      "Worked remotely and managed the project timeline, progress tracking, and software testing of the system.",
      "Developed a help center for the web-based high school management system using React JS Framework, Next JS, and Tailwind CSS with a user-friendly and responsive interface.",
    ],
  },
  {
    date: "2023",
    position: "Salesforce Admin Trainee",
    company: "Salesforce",
    location: "Bulacan State University",
    description: [
      "Successfully completed 15 Super badges demonstrating proficiency in key Salesforce admin skills. ",
    ],
  },
];

export const educationData = [
  {
    school: "Bulacan State University",
    level: "Bachelor of Science in Information Technology",
    year: "2021 – Present",
    major: "Major in Web and Mobile Development",
    awards: ["President’s Lister (2022 - 2025)", "Dean’s Lister (2021 - 2022)"],
  },
  {
    school: "Lord's Angels Montessori School",
    level: " ",
    year: "2019 – 2021",
    major: "Science, Technology, Engineering, and Mathematics",
    awards: ["With High Honors", "Consistent Honor"],
  },
  {
    school: "Malolos City High School - Santisima Trinidad",
    level: "Secondary Education",
    year: "2015 – 2019",
    major: " ",
    awards: [
      "Class Valedictorian",
      "Consistent Student Leader",
      "Leadership Awardee (Youth for Environment in Schools Organization)",
    ],
  },
];
