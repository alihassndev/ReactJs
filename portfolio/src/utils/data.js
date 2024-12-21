import frontend from "../assets/frontend.png";
import backend from "../assets/backend.png";
import tools from "../assets/tools.png";
import soft from "../assets/soft.png";
import profile1 from "../assets/test1.png";
import profile2 from "../assets/test2.png";
import profile3 from "../assets/test3.png";
import profile4 from "../assets/test4.png";

export const SkILLS = [
  {
    title: "Frontend",
    iconUrl: frontend,
    skills: [
      { skill: "Html", percentage: "90%" },
      { skill: "CSS", percentage: "85%" },
      { skill: "JavaScript", percentage: "75%" },
      { skill: "React Js", percentage: "75%" },
      { skill: "TypeScript", percentage: "70%" },
    ],
  },
  {
    title: "Backend",
    iconUrl: backend,
    skills: [
      { skill: "Node Js", percentage: "70%" },
      { skill: "Express Js", percentage: "65%" },
    ],
  },
  {
    title: "Tools",
    iconUrl: tools,
    skills: [
      { skill: "Git & Github", percentage: "70%" },
      { skill: "Visual Studio Code", percentage: "75%" },
      { skill: "Webpack", percentage: "60%" },
      { skill: "Responsive Design", percentage: "75%" },
    ],
  },
  {
    title: "Soft Skills",
    iconUrl: soft,
    skills: [
      { skill: "Problem Solving", percentage: "80%" },
      { skill: "Collaboration", percentage: "85%" },
      { skill: "Attention to Detail", percentage: "75%" },
    ],
  },
];

export const WORK = [
  {
    title: "Frontend Developer on fiverr",
    date: "Feb 2024 - Present",
    responsibilities: [
      "Build responsive and visually appealing user interfaces.",
      "Ensure cross-browser and device compatibility.",
      "Collaborate with designers and backend developers.",
    ],
  },
  {
    title: "Backend Developer on fiverr",
    date: "Aug 2024 - Present",
    responsibilities: [
      "Develop and maintain server-side logic and APIs.",
      "Manage databases and ensure data integrity.",
      "Optimize application performance and scalability.",
      "Implement security measures to protect data and systems.",
    ],
  },
  {
    title: "Fullstack Developer on fiverr",
    date: "Dec 2024 - Present",
    responsibilities: [
      "Develop both client-side (frontend) and server-side (backend) applications.",
      "Design and manage databases for efficient data storage.",
      "Ensure seamless integration of frontend and backend systems.",
      "Troubleshoot and optimize performance across the full stack.",
    ],
  },
];

export const TEST = [
  {
    name: "James Miller",
    imgUrl: profile1,
    review:
      "Your work as a frontend developer was exceptional. The UI is visually stunning, responsive, and highly functional. Your attention to detail, adherence to best practices, and seamless collaboration made the project a success. Highly recommended!",
  },
  {
    name: "Emma Davis",
    imgUrl: profile3,
    review:
      "Excellent work! The interface is clean, responsive, and user-friendly. Your expertise in modern frameworks and attention to detail ensured a polished final product. Truly a professional job!",
  },
  {
    name: "William Taylor",
    imgUrl: profile2,
    review:
      "Outstanding job! The backend is robust, efficient, and seamlessly integrated with the frontend. Your attention to scalability and security demonstrates true expertise. Highly recommend your work!",
  },
  {
    name: "Charlotte Moore",
    imgUrl: profile4,
    review:
      "Impressive work! You delivered a seamless full-stack solution with a polished frontend and a reliable, efficient backend. Your ability to manage both ends with such expertise is remarkable. Highly recommended!",
  },
];
