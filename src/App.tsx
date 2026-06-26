import React, { useState, useEffect } from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
} from "./components";
import FadeIn from "./components/FadeIn";
import { useNavigate, useParams } from "react-router-dom";
import "./index.scss";
import "./i18n";
import { useTranslation } from "react-i18next";

function getInitialTheme(): string {
  if (typeof window === "undefined") return "dark";

  const saved = localStorage.getItem("theme");
  if (saved) return saved;

  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  return systemPrefersDark ? "dark" : "light";
}
function App() {
  const { i18n } = useTranslation();

  const navigate = useNavigate();
  const { lang } = useParams();
  const validLang = lang && ["fa", "en"].includes(lang) ? lang : null;
  const [mode, setMode] = useState<string>(() => getInitialTheme());

  const handleModeChange = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };
  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handler = () => {
      if (!localStorage.getItem("theme")) {
        setMode(media.matches ? "dark" : "light");
      }
    };

    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!validLang) {
      const browserLang = navigator.language.toLowerCase().startsWith("fa")
        ? "fa"
        : "en";

      navigate(`/${browserLang}`, { replace: true });
      return;
    }

    // sync i18n
    if (i18n.language !== validLang) {
      i18n.changeLanguage(validLang);
    }
  }, [validLang]);

  return (
    <div
      dir={i18n.language === "fa" ? "rtl" : "ltr"}
      className={`main-container ${
        mode === "dark" ? "dark-mode" : "light-mode"
      }`}
    >
      <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />

      <FadeIn transitionDuration={700}>
        <Main />

        <Expertise parentToChild={{ mode }} />

        <Timeline parentToChild={{ mode }} />

        <Project />

        <Contact parentToChild={{ mode }} />
      </FadeIn>
    </div>
  );
}

export default App;
