import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Footer.scss";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <div>
        {/* <a
          href="https://github.com/yujisatojr"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a> */}
        <a
          href="https://www.linkedin.com/in/mohammad-farokhi-2813a019a/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
      <p>
        {t("footer.portfolio_by")}
        <a
          href="https://www.linkedin.com/in/mohammad-farokhi-2813a019a/"
          target="_blank"
          rel="noreferrer"
          style={{ marginInline: "10px" }}
        >
          {t("footer.name")}
        </a>
      </p>
    </footer>
  );
}

export default Footer;
