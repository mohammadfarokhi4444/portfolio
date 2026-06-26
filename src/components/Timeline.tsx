import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcaseRolling } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";
import { useTranslation } from "react-i18next";

function Timeline({ parentToChild }: any) {
  const { t } = useTranslation();
  const { mode } = parentToChild;

  const experiences = [
    {
      date: t("history.exp6.date"),
      role: t("history.exp6.role"),
      company: t("history.exp6.company"),
      desc: t("history.exp6.desc"),
    },
    {
      date: t("history.exp5.date"),
      role: t("history.exp5.role"),
      company: t("history.exp5.company"),
      desc: t("history.exp5.desc"),
    },
    {
      date: t("history.exp4.date"),
      role: t("history.exp4.role"),
      company: t("history.exp4.company"),
      desc: t("history.exp4.desc"),
    },
    {
      date: t("history.exp3.date"),
      role: t("history.exp3.role"),
      company: t("history.exp3.company"),
      desc: t("history.exp3.desc"),
    },
    {
      date: t("history.exp2.date"),
      role: t("history.exp2.role"),
      company: t("history.exp2.company"),
      desc: t("history.exp2.desc"),
    },
    {
      date: t("history.exp1.date"),
      role: t("history.exp1.role"),
      company: t("history.exp1.company"),
      desc: t("history.exp1.desc"),
    },
  ];

  return (
    <div id="history">
      <div className="items-container">
        <h1>{t("history.title")}</h1>

        <VerticalTimeline className="custom-timeline">
          {experiences.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              date={item.date}
              iconStyle={{
                background: mode === "dark" ? "#00806a" : "#01574a",
                color: "rgb(39, 40, 34)",
              }}
              icon={<FontAwesomeIcon icon={faSuitcaseRolling} />}
            >
              <h3 className="vertical-timeline-element-title">{item.role}</h3>

              <h4 className="vertical-timeline-element-subtitle">
                {item.company}
              </h4>

              <p>{item.desc}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
