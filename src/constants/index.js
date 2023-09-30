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

  weather,
  inckthreads,
  cookies,
  michelangelo,
  watchmi,
  threejs,
  Komon,
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
    title: "Full Stack Developer",
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
    date: "March 2016 - March 2020",
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
    date: "Dec 2022 - Sept 2023",
    points: [
      "Web development course with a strong focus on active pedagogy.",
      "Developing and maintaining full-stack web applications using actual related frameworks and libraries.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback with other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Komon",
    icon: Komon,
    iconBg: "#E6DEDD",
    date: "June 2023 - Sept 2023",
    points: [
      "Developed and maintained a Full Stack application using TypeScript, Next.js, tRpc, Prisma, Planetscale, Saas-UI, and Chakra-UI to simplify tax deduction management for small businesses, freelancers, and company owners.",
      "Helped create a user-friendly platform that empowers users to manage various tax-friendly benefits, aligning with the company's mission of making tax deductions accessible and hassle-free.",
      "Worked closely with colleagues to innovate by streamlining variable salary declaration reporting and automating deduction management, reducing administrative tasks and ensuring compliance with payroll and accounting codes.",
      "Contributed to improving the pay experience by enabling users to easily access and utilize their entitled tax benefits, making pay day efficient and stress-free.",
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
  {
    name: "InckThreads",
    description:
      "InckThreads web application, a social media platform that allows users to share their thoughts. InckThreads is a full-stack web application built with TypeScript using Next.js 13 with Server Side Rendering. It uses MongoDB as a database, and Clerk as an authentication provider. It also uses UploadThing to upload images to the cloud. The application is styled with Tailwind CSS and Shadcn components.",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Clerk",
        color: "red-text-gradient",
      },
      {
        name: "NextJS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
    ],
    image: inckthreads,
    source_code_link: "https://github.com/Vdemike/InckThreads",
    live_demo_link: "https://inckthreads.vercel.app/"
  },
  {
    name: "WeatherInck",
    description:
      "WeatherInck allows you to use 12 search engines using shortcuts, create cards and check the weather for the next 5 days anywhere in the world using the OpenWeatherMap-API. You can also edit your own settings and change your background-image.",
    tags: [
      {
        name: "HTML / CSS / Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "OpenWeatherMapAPI",
        color: "green-text-gradient",
      },
      {
        name: "ReactJS",
        color: "green-text-gradient",
      },
      {
        name: "Styled-Components",
        color: "blue-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/Vdemike/WeatherInck",
    live_demo_link: "https://weatherinck.netlify.app/"
  },
];

export { services, technologies, experiences, projects };
