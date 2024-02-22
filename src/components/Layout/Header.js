import React, { Fragment, useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import "../../styles/HeaderStyles.css";
import Divider from "@mui/material/Divider";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  //handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component={"div"}
        sx={{ flexGrow: 1 }}
      >
        <FastfoodIcon />
        My Restaurant
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <Link to={"/"}>Home</Link>
        </li>

        <li>
          <Link to={"/about"}>About</Link>
        </li>

        <li>
          <Link to={"/menu"}>Menu</Link>
        </li>

        <li>
          <Link to={"/contact"}>Contact Us</Link>
        </li>

        <li>
          <Link to={"/rate"}>Rate Us</Link>
        </li>

        <li>
          <Link to={"/profile"}>
            <AccountCircleIcon />
          </Link>
        </li>
      </ul>
    </Box>
  );
  return (
    <Fragment>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit" // It will automatically takes the color from their parent
              aria-label="open drawer" // It is used because when a user read the code so he knows what it is
              edge="start" // It means it will start from beginning
              sx={{ display: { sm: "none", mr: 2 } }} // sm="none" means for small screen it can't be shown
              onClick={handleDrawerToggle}
            >
              {/* <MenuIcon /> */}
            </IconButton>
            {/* <FastfoodIcon /> */}
            <Typography
              color={"goldenrod"}
              variant="h6"
              component={"div"}
              sx={{ flexGrow: 1, my: 2 }}
            >
              <FastfoodIcon />
              My Restaurant
            </Typography>
            <Box sx={{ xs: "none", sm: "block" }}>
              <ul className="navigation-menu">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>

                <li>
                  <Link to={"/about"}>About</Link>
                </li>

                <li>
                  <Link to={"/menu"}>Menu</Link>
                </li>

                <li>
                  <Link to={"/contact"}>Contact Us</Link>
                </li>

                <li>
                  <Link to={"/rate"}>Rate Us</Link>
                </li>

                <li>
                  <Link to={"/profile"}>
                    <AccountCircleIcon />
                  </Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box>
          <Drawer
            variant="temporary" // We are using "temporary" because it shows on SMALL SCREEN. For big screen, we will use PERMANENT
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "&.MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "350px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </Fragment>
  );
};

export default Header;
