import frontend from "../assets/frontend.png";
import backend from "../assets/backend.png";
import tools from "../assets/tools.png";
import soft from "../assets/soft.png";

export const SkILLS = [
  {
    title: "Frontend",
    iconUrl: frontend,
    skills: [
      { skill: "Html", percentage: "90%" },
      { skill: "CSS", percentage: "85%" },
      { skill: "JavaScript", percentage: "75%" },
      { skill: "React Js", percentage: "75%" },
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
