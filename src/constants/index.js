import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  php,
  java,
  spring,

  html,
  css,
  reactjs,
  
  tailwind,
  nodejs,
  mongodb,
  githu,
  
  
  volunteer,
  adobe,
  becode,
  aed,

  cookies,
  michelangelo,
  watchmi,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Java Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Creative Soul",
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
    name: "React JS",
    icon: reactjs,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Github",
    icon: githu,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring",
    icon: spring,
  },
  {
    name: "PHP",
    icon: php,
  },
];

const experiences = [
  {
    title: "Volunteering jobs",
    company_name: "Volunteer",
    icon: volunteer,
    iconBg: "#E6DEDD",
    date: "March 2008 - April 2018",
    points: [
      "Working with refugees for social integration and organizing events.",
      "Member of the KrotRock organization to organize our yearly music festival.",
      "Member of our youth organization Den Droes to organize social events.",
      "Volunteer at the PukkelPop Music Festival.",
      "Giving painting and drawing classes.",
    ],
  },
  {
    title: "Freelance Graphic Designer",
    company_name: "Freelance",
    icon: adobe,
    iconBg: "#FFFFFF",
    date: "June 2012 - March 2016",
    points: [
      "Experienced graphic designer with expertise in creating visually appealing designs for both print and digital media.",
      "Proficient in Adobe Photoshop, Illustrator and InDesign.",
      "Skilled in creating layouts and other design elements that effectively communicate the desired message.",
      "Strong attention to details, ability to work independently and dedication to meeting deadlines.",
    ],
  },
  {
    title: "Customer Service Coordinator",
    company_name: "AED Group",
    icon: aed,
    iconBg: "#FFFFFF",
    date: "March 2016 - March 2022",
    points: [
      "Team leader for one of the biggest event company in Europe.",
      "Managing professional technicians, repairing installations under tight deadlines.",
      "Developed strong leadership skills and expertise in repair processes and Customer Service Management.",
      "Communicating with customers and suppliers in a solution-oriented environment.",
    ],
  },
  {
    title: "Full stack & Java Developer Trainee",
    company_name: "BeCode",
    icon: becode,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - ...",
    points: [
      "Web development course with a strong focus on active pedagogy.",
      "Developing and maintaining full-stack web applications using actual related frameworks and libraries.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback with other developers.",
    ],
  },
];


const projects = [
  {
    name: "Chez Michelangelo",
    description:
      "One of my first projects made in PHP and a SQL-database. A restaurant website where customers can check the menu, give reviews/stars, book a table and an admin section to add content to the menu, view messages and delete users.",
    tags: [
      {
        name: "SQL",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
    ],
    image: michelangelo,
    source_code_link: "https://github.com/Vdemike/Resto-2.0",
    live_demo_link: "https://github.com/Vdemike/Resto-2.0"
  },
  {
    name: "WatchMi",
    description:
      "Movie website made in ReactJS using the TMDB-api. This website lets you browse through movies, TV-shows, actors, genres and add your favorites to a list where they will be saved for later.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TMDB-api",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: watchmi,
    source_code_link: "https://github.com/Vdemike/WatchMi",
    live_demo_link: "https://watchmi.netlify.app"
  },
  {
    name: "BeCookies",
    description:
      "A quick little Cookie-clicker project meant as a fun game. Created using Javascript, HTML and Tailwind CSS",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
    ],
    image: cookies,
    source_code_link: "https://github.com/Vdemike/BeCookies/tree/main",
    live_demo_link: "https://becookies.netlify.app/"
  },
];

export { services, technologies, experiences, projects };
