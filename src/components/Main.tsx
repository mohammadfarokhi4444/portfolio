import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import { useTranslation } from "react-i18next";
import { Telegram } from "@mui/icons-material";

function Main() {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src={`${process.env.PUBLIC_URL}/avatar.jpg`}
            alt="Avatar"
            onError={(e) => console.log("image failed", e)}
            onLoad={() => console.log("image loaded")}
          />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://t.me/@Supernatural4444" target="_blank" rel="noreferrer">
              <Telegram />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad-farokhi-2813a019a/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
          <h1>{t("main.name")}</h1>
          <p>{t("main.field")}</p>

          <div className="mobile_social_icons">
            <a href="https://t.me/@Supernatural4444" target="_blank" rel="noreferrer">
              <Telegram />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad-farokhi-2813a019a/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
