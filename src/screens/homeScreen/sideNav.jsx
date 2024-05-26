import { Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PublicIcon from "@mui/icons-material/Public";
import DescriptionIcon from "@mui/icons-material/Description";
import HailIcon from "@mui/icons-material/Hail";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import { useNavigate } from "react-router-dom";

const SideNav = ({ value, open }) => {
  const icons = {
    home: <HomeIcon />,
    browseCourse: <PublicIcon />,
    notes: <DescriptionIcon />,
    mentor: <HailIcon />,
    achievements: <MilitaryTechIcon />,
  };

  const title = {
    home: "Home",
    browseCourse: "Catalog",
    notes: "Notes",
    mentor: "Mentor",
    achievements: "Achievements",
  };

  const routes = {
    home: "/home",
    browseCourse: "/home/catalog",
    notes: "/home/notes",
    mentor: "/home/mentor",
    achievements: "/home/achievements",
  };

  const navigate = useNavigate()
  return (
    <ListItem key={value} disablePadding sx={{ display: "block" }}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
        }}
        onClick={()=>navigate(routes[value])}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
          }}
        >
          {icons[value] ?? <AutoAwesomeMosaicIcon/>}
        </ListItemIcon>
        <ListItemText primary={title[value] ?? value} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  );
};

export default SideNav;
