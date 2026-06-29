import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import List from "@mui/material/List";
import ListIcon from "@mui/icons-material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { useTranslation } from "react-i18next";
import { Switch } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const drawerWidth = 240;

function Navigation({ parentToChild, modeChange }: any) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();
  const { mode } = parentToChild;

  const navItems = [
    { label: "nav.expertise", id: "aboutMe" },
    { label: "nav.history", id: "history" },
    { label: "nav.projects", id: "projects" },
    { label: "nav.contact", id: "contact" },
  ];
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const toggleLanguage = () => {
    const newLang = lang === "fa" ? "en" : "fa";

    navigate(`/${newLang}`, {
      replace: true,
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        const scrolled = window.scrollY > navbar.clientHeight;
        setScrolled(scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (section: string) => {
    // console.log(section);
    const expertiseElement = document.getElementById(section);
    if (expertiseElement) {
      expertiseElement.scrollIntoView({ behavior: "smooth" });
      // console.log("Scrolling to:", expertiseElement); // Debugging: Ensure the element is found
    } else {
      // console.error('Element with id "expertise" not found'); // Debugging: Log error if element is not found
    }
  };

  const drawer = (
    <Box
      className="navigation-bar-responsive"
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
    >
      <p className="mobile-menu-top">
        <ListIcon />
        {t("nav.menu")}
      </p>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => scrollToSection(item.id)}
            >
              <ListItemText primary={t(item.label)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        id="navigation"
        className={`navbar-fixed-top${scrolled ? " scrolled" : ""}`}
      >
        <Toolbar className="navigation-bar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                sx={{ color: "#fff" }}
              >
                {t(item.label)}
              </Button>
            ))}
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={3}>
            <Box className="theme-switch">
              <Switch
                checked={mode === "dark"}
                onClick={() => modeChange()}
                icon={<LightModeIcon className="switch-icon" />}
                checkedIcon={<DarkModeIcon className="switch-icon" />}
              />
            </Box>
            {
              <div
                style={{ cursor: "pointer", fontWeight: 700 }}
                onClick={toggleLanguage}
              >
                <span>{i18n.language === "fa" ? "EN" : "FA"}</span>
              </div>
            }
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;
