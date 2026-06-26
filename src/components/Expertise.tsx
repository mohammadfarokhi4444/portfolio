import React, { useState } from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";
import { useTranslation } from "react-i18next";
import { faLayerGroup, faPlug } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
  "TypeScript",
  "JavaScript",
  "React.js",
  "Next.js",
  "TanStack Router",
  "SSR",
  "SSG",
  "ISR",
  "Docker",
  "Performance Optimization",
  "Lazy Loading & Code Splitting",
  "Web Vitals",
];

const labelsSecond = [
  "Design Systems",
  "Component Architecture",
  "Reusable Components",
  "Tailwind CSS",
  "Shadcn UI",
  "Hero UI",
  "Material UI",
  "Ant Design",
  "AG Grid",
  "Storybook",
  "Responsive Design",
  "React Hook Form",
  "Zod",
  "Framer Motion",
];

const labelsThird = [
  "REST API",
  "GraphQL",
  "Axios",
  "Fetch API",
  "TanStack Query",
  "Zustand",
  "Context API",
  "Redux Toolkit",
  "Caching",
  "Data Synchronization",
  "Optimistic Updates",
  "Error Handling",
  "JWT",
  "NextAuth",
  "Postman",
  "Swagger",
  "WebSocket",
];

function Expertise({ parentToChild }: any) {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState<number | null>(null);
  const { mode } = parentToChild;
  const skills = [
    {
      icon: faReact,
      title: t("expertise.frontend"),
      desc: t("expertise.frontend_des"),
      animation: "spin",
      labels: labelsFirst,
    },
    {
      icon: faLayerGroup,
      title: t("expertise.ui_engineering"),
      desc: t("expertise.ui_engineering_des"),
      animation: "beat",
      labels: labelsSecond,
    },
    {
      icon: faPlug,
      title: t("expertise.api_integration"),
      desc: t("expertise.api_integration_des"),
      animation: "bounce",
      labels: labelsThird,
    },
  ];
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>{t("expertise.title")}</h1>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              className="skill"
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <FontAwesomeIcon
                icon={skill.icon}
                size="3x"
                style={{ color: mode === "dark" ? "#afef63" : "#01574a" }}
                spin={hovered === index && skill.animation === "spin"}
                beat={hovered === index && skill.animation === "beat"}
                bounce={hovered === index && skill.animation === "bounce"}
              />

              <h3 style={{ minHeight: "56px" }}>{skill.title}</h3>
              <p style={{ minHeight: "192px" }}>{skill.desc}</p>

              <div className="flex-chips">
                <span className="chip-title">{t("expertise.tech_stack")}</span>

                {skill.labels.map((label, i) => (
                  <Chip key={i} className="chip" label={label} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Expertise;
