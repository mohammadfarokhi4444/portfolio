import React from "react";
import ifaSite1 from "../assets/images/ifa-site1.png";
import ifaSite2 from "../assets/images/ifa-site2.png";
import ifaSite3 from "../assets/images/ifa-site3.png";
import ifaSite4 from "../assets/images/ifa-site4.png";
import ifaSite5 from "../assets/images/ifa-site5.png";
import ifaSite6 from "../assets/images/ifa-site6.png";
import ifaSite7 from "../assets/images/ifa-site7.png";
import ifaSite8 from "../assets/images/ifa-site8.png";
import ifaAdmin1 from "../assets/images/ifa-admin1.png";
import ifaAdmin2 from "../assets/images/ifa-admin2.png";
import ifaAdmin3 from "../assets/images/ifa-admin3.png";
import ifaAdmin4 from "../assets/images/ifa-admin4.png";
import ifaAdmin5 from "../assets/images/ifa-admin5.png";
import ifaAdmin6 from "../assets/images/ifa-admin6.png";
import ifaAdmin7 from "../assets/images/ifa-admin7.png";
import ifaAdmin8 from "../assets/images/ifa-admin8.png";
import ifaSitePanel1 from "../assets/images/ifa-site-panel1.png";
import ifaSitePanel2 from "../assets/images/ifa-site-panel2.png";
import ifaSitePanel3 from "../assets/images/ifa-site-panel3.png";
import ifaSitePanel4 from "../assets/images/ifa-site-panel4.png";
import ifaSitePanel5 from "../assets/images/ifa-site-panel5.png";
import karsazSite1 from "../assets/images/karsaz-site1.png";
import karsazSite2 from "../assets/images/karsaz-site2.png";
import karsazSite3 from "../assets/images/karsaz-site3.png";
import karsazAdmin1 from "../assets/images/karsaz-admin1.png";
import karsazAdmin2 from "../assets/images/karsaz-admin2.png";
import karsazAdmin3 from "../assets/images/karsaz-admin3.png";
import haghiniSite1 from "../assets/images/haghini-site1.png";
import haghiniSite2 from "../assets/images/haghini-site2.png";
import haghiniSite3 from "../assets/images/haghini-site3.png";
import haghiniSite4 from "../assets/images/haghini-site4.png";
import injast1 from "../assets/images/injast1.png";
import injast2 from "../assets/images/injast2.png";
import injast3 from "../assets/images/injast3.png";
import injast4 from "../assets/images/injast4.png";
import injast5 from "../assets/images/injast5.png";
import injast6 from "../assets/images/injast6.png";
import safarayaneh1 from "../assets/images/safarayaneh1.png";
import safarayaneh2 from "../assets/images/safarayaneh2.png";
import safarayaneh3 from "../assets/images/safarayaneh3.png";
import safarayaneh4 from "../assets/images/safarayaneh4.png";
import meyar1 from "../assets/images/meyar1.png";
import meyar2 from "../assets/images/meyar2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../assets/styles/Project.scss";

import { useTranslation } from "react-i18next";
import { Chip } from "@mui/material";

function Project() {
  const { t, i18n } = useTranslation();

  const projectList = [
    {
      link: "https://www.ifacrowd.fund/",
      image: [
        ifaSite1,
        ifaSite2,
        ifaSite3,
        ifaSite4,
        ifaSite5,
        ifaSite6,
        ifaSite7,
        ifaSite8,
        ifaSitePanel1,
        ifaSitePanel2,
        ifaSitePanel3,
        ifaSitePanel4,
        ifaSitePanel5,
      ],
      name: t("project.prj1.name"),
      des: t("project.prj1.des"),
      future: [
        "Authentication",
        "Google OAuth",
        "Wallet",
        "Shopping Cart",
        "Payment Gateway",
        "Investor Dashboard",
        "Dynamic Data Fetching",
        "Data Caching",
        "Server State Management",
        "Localization",
      ],
    },
    {
      link: "https://admin.ifacrowd.fund/",
      image: [
        ifaAdmin1,
        ifaAdmin2,
        ifaAdmin3,
        ifaAdmin4,
        ifaAdmin5,
        ifaAdmin6,
        ifaAdmin7,
        ifaAdmin8,
      ],
      name: t("project.prj3.name"),
      des: t("project.prj3.des"),
      future: [
        "Role-Based Access Control",
        "Complex Forms",
        "Custom Dashboards",
        "Advanced Filtering",
        "Conditional Forms",
        "Dynamic Workflow",
        "Payment Gateway",
      ],
    },
    {
      link: "https://tmhkarsaz.co.ir/",
      image: [karsazSite1, karsazSite2, karsazSite3],
      name: t("project.prj4.name"),
      des: t("project.prj4.des"),
      future: [
        "Role-Based Dashboard",
        "User Roles",
        "Authentication",
        "File Upload System",
      ],
    },
    {
      link: "https://admin.tmhkarsaz.co.ir/",
      image: [karsazAdmin1, karsazAdmin2, karsazAdmin3],
      name: t("project.prj5.name"),
      des: t("project.prj5.des"),
      future: [
        "File Upload System",
        "Course Management",
        "Ticketing System",
        "CMS",
      ],
    },
    {
      link: "",
      image: [haghiniSite1, haghiniSite2, haghiniSite3, haghiniSite4],
      name: t("project.prj6.name"),
      des: t("project.prj6.des"),
      future: [
        "Rich Text Editor",
        "CKEditor Integration",
        "PDF Viewer",
        "User Dashboard",
        "Digital Signature",
        "Authentication",
      ],
    },
    {
      link: "",
      image: [safarayaneh1, safarayaneh2, safarayaneh3, safarayaneh4],
      name: t("project.prj7.name"),
      des: t("project.prj7.des"),
      future: [
        "Form-Based Workflows",
        "Process Automation",
        "Enterprise Applications",
        "Large-Scale Systems",
        "Quasar Framework",
      ],
    },
    {
      link: "https://app.injast.life/",
      image: [injast1, injast2, injast3, injast4, injast5, injast6],
      name: t("project.prj8.name"),
      des: t("project.prj8.des"),
      future: [
        "digital signature",
        "insurance",
        "leasing",
        "Wallet",
        "Chart",
        "AI Chat Assistant",
        "Bank Card Management",
      ],
    },
    {
      link: "https://meyarcrowd.ir/",
      image: [meyar1, meyar2],
      name: t("project.prj9.name"),
      des: t("project.prj9.des"),
      future: [
        "Vue.js",
        "Nuxt.js",
        "SSR",
        "Crowdfunding Platform",
        "Localization",
      ],
    },
  ];
  const paginationConfig = {
    clickable: true,
    renderBullet: (index: number, className: any) => {
      return `<span class="${className}">${index + 1}</span>`;
    },
  };
  return (
    <div className="projects-container" id="projects">
      <h1>{t("project.title")}</h1>
      <div className="projects-grid">
        {projectList.map((prj) => (
          <div
            className="project"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Swiper
              key={i18n.language}
              modules={[Navigation, Pagination]}
              navigation
              pagination={paginationConfig}
              dir={i18n.language === "fa" ? "rtl" : "ltr"}
              slidesPerView={1}
              className="project-swiper"
            >
              {prj.image.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="project-image-wrapper">
                    <img
                      src={img}
                      className="project-image"
                      alt={`${prj.name}-${index}`}
                      width="100%"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <div>
                {prj.link ? (
                  <a href={prj.link} target="_blank" rel="noreferrer">
                    <h2>{prj.name}</h2>
                  </a>
                ) : (
                  <h2>{prj.name}</h2>
                )}
                <p>{prj.des}</p>
              </div>
              <div className="flex-chips">
                <span className="chip-title">{t("expertise.tech_stack")}</span>

                {prj.future.map((label, i) => (
                  <Chip key={i} className="chip" label={label} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
