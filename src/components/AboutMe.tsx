import React from "react";
import "@fortawesome/free-regular-svg-icons";
import "../assets/styles/Expertise.scss";
import { useTranslation } from "react-i18next";


function AboutMe() {
  const { t } = useTranslation();
  
  return (
    <div className="container" id="aboutMe">
      <div className="about-me-container">
        <h1>{t("aboutMe.title")}</h1>

        <p>{t("aboutMe.des")}</p>
      </div>
    </div>
  );
}

export default AboutMe;
