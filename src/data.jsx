import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaAws } from "react-icons/fa6";
import next_match from "./assets/next_match.png";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences. Proficient in various CSS frameworks.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Nextjs",
    icon: <TbBrandNextjs className="h-16 w-16 text-emerald-500" />,
    text: "Capable in building modern full stack production ready application with advanced server components, lightning fast data fetching techniques.",
  },
  {
    id: nanoid(),
    title: "Nodejs",
    icon: <FaNodeJs className="h-16 w-16 text-emerald-500" />,
    text: "Aware of backend framework like express and database queries with ORM like prisma for API creating and integration with frontend.",
  },
  {
    id: nanoid(),
    title: "AWS",
    icon: <FaAws className="h-16 w-16 text-emerald-500" />,
    text: "Familiarity with Cloud platform and aware of AWS CDK to construct safer and money efficient servers which provides scalability at its best for any application.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: next_match,
    url: "https://next-match-coral.vercel.app/",
    github: "https://github.com/avijit-wd/next_match",
    title: "Next Match",
    content: (
      <p class="text-base">
        A robust social app for dating and chatting with people. Built with
        Next.js fullstack framework. ( UI -{" "}
        <span class="font-bold">HeroUI</span>, Authentication -{" "}
        <span class="font-bold">Next-Auth</span>, Real time technology -{" "}
        <span class="font-bold">Pusher</span>, API -{" "}
        <span class="font-bold">Server actions</span>, DB -{" "}
        <span class="font-bold">Postgres</span>, Storage -{" "}
        <span class="font-bold">Cloudinary</span>, CI/CD -{" "}
        <span class="font-bold">Github Actions</span>, Deployment -{" "}
        <span className="font-bold">Vercel</span>)
      </p>
    ),
  },
];
