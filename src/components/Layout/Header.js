// import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material";
// import React, { useRef } from "react";
// import { Fragment } from "react";
// import FastfoodIcon from "@mui/icons-material/Fastfood";
// import "../../styles/HeaderStyles.css";
// import { Link } from "react-router-dom";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import CloseIcon from "@mui/icons-material/Close";
// import MenuIcon from "@mui/icons-material/Menu";

// const Header = () => {
//   const navRef = useRef();
//   const showNav = () => {
//     navRef.current?.classList?.toggle("responsive_nav");
//   };
//   return (
//     <Fragment>
//       <AppBar>
//         <Toolbar className="navBar">
//           <Grid container className="leftitem">
//             <Grid item xs={12} sm={12} md={0.5}>
//               <FastfoodIcon />
//             </Grid>
//             <Grid item xs={12} sm={12} md={4}>
//               <Typography variant="h6">My Restaurant</Typography>
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item xs={12} sm={12} md={12} className="rightitem">
//               <ul className="list">
//                 <li>
//                   <Link to={"/home"}>Home</Link>
//                 </li>

//                 <li>
//                   <Link to={"/about"}>About</Link>
//                 </li>

//                 <li>
//                   <Link to={"/menu"}>Menu</Link>
//                 </li>

//                 <li>
//                   <Link to={"/contact"}>Contact Us</Link>
//                 </li>

//                 <li>
//                   <Link to={"/rate"}>Rate Us</Link>
//                 </li>

//                 <li>
//                   <Link to={"/profile"}>{<AccountCircleIcon />}</Link>
//                 </li>
//               </ul>
//             </Grid>
//           </Grid>
//         </Toolbar>
//       </AppBar>
//     </Fragment>
//   );
// };

// export default Header;

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Fragment, useState } from "react";
import "../../styles/HeaderStyles.css";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  const handleOpenNavMenu = (event) => {
    setOpenMenu(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setOpenMenu(false);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const calculateMenuWidth = () => {
    // Calculate the menu width based on the current screen size
    if (isMobile) {
      return "100%"; // Use full width for smaller screens
    } else {
      return "30ch"; // Use a fixed width for larger screens
    }
  };

  const openAbout = () => {
    debugger;
    document.getElementById("about")?.click();
  };

  const handleClick = React.useCallback((e) => {
    setOpenContact(true);
  }, []);
  const handleCloseContact = React.useCallback(() => {
    setOpenContact(false);
  }, []);

  const propsForContact = {
    open: openContact,
    handleClose: handleCloseContact,
    initialData: {},
  };

  return (
    <Fragment>
      <AppBar position="static" className="appbar">
        <Toolbar>
          <Grid container className="appbar">
            <Grid
              item
              md={12}
              sx={{
                display: { xs: "flex", md: "none" },
                flexDirection: "column",
              }}
            >
              <IconButton
                onClick={handleOpenNavMenu}
                sx={{ color: "white", padding: "0px" }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                // anchorOrigin is used to position the popup menu
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                open={openMenu}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                  "& .mobileview .list a": {
                    // & is used to target the element with className="mobileview" in the component
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center", // Center the items horizontally
                    justifyContent: "center", // Center the items vertically
                    textDecoration: "none",
                    margin: "10px 0px",
                  },
                }}
                PaperProps={{
                  style: {
                    maxHeight: "none", // Disable max height
                    width: calculateMenuWidth(), // Dynamically calculate width
                    backgroundColor: "#a4ace0",
                  },
                }}
              >
                <Grid item className="close-icon" onClick={handleCloseNavMenu}>
                  <CloseIcon />
                </Grid>
                <Grid item className="mobileview">
                  {/* <Button
                    sx={{ display: "block" }}
                    onClick={handleCloseNavMenu}
                  >
                    HOME
                  </Button>
                  <Button
                    sx={{ display: "block" }}
                    onClick={handleCloseNavMenu}
                  >
                    ABOUT
                  </Button>
                  <Button
                    sx={{ display: "block" }}
                    onClick={handleCloseNavMenu}
                  >
                    MENU
                  </Button>
                  <Button
                    sx={{ display: "block" }}
                    onClick={() => {
                      handleClick();
                      handleCloseNavMenu();
                    }}
                  >
                    CONTACT
                  </Button>
                  <Button
                    sx={{ display: "block" }}
                    onClick={() => {
                      handleClick();
                      handleCloseNavMenu();
                    }}
                  >
                    RATE
                  </Button> */}
                  <ul className="list">
                    <li>
                      <Link to={"/home"}>HOME</Link>
                    </li>
                    <li>
                      <Link to={"/about"}>ABOUT</Link>
                    </li>
                    <li>
                      <Link to={"/menu"}>MENU</Link>
                    </li>
                    <li>
                      <Link to={"/contact"}>CONTACT </Link>
                    </li>
                    <li>
                      <Link to={"/rate"}>RATE</Link>
                    </li>
                    <li>
                      <Link to={"/profile"}>{<AccountCircleIcon />}</Link>
                    </li>
                  </ul>
                </Grid>
              </Menu>
            </Grid>
            <Grid container justifyContent="space-evenly">
              <Grid
                item
                xs={12}
                sm={12}
                md={5}
                columnGap={1.5}
                className="item"
                sx={{
                  display: {
                    xs: "none",
                    md: "flex",
                  },
                }}
              >
                <Grid item xs={12} sm={12} md={0.5}>
                  <FastfoodIcon />
                </Grid>
                <Grid item xs={12} sm={12} md={4.5}>
                  <Typography variant="h6">My Restaurant</Typography>
                </Grid>
              </Grid>
              <Grid
                item
                className="rightitem"
                md={6}
                sx={{
                  display: {
                    xs: "none",
                    md: "flex",
                    justifyContent: "space-evenly",
                  },
                }}
              >
                {/* <Button id="home">HOME</Button>
                <Button id="about" onClick={openAbout}>
                  ABOUT
                </Button>
                <Button id="experience">MENU</Button>
                <Button id="contact" onClick={handleClick}>
                  CONTACT
                </Button>
                <Button id="contact" onClick={handleClick}>
                  RATE
                </Button> */}
                <ul className="list">
                  <li>
                    <Link to={"/home"}>HOME</Link>
                  </li>
                  <li>
                    <Link to={"/about"}>ABOUT</Link>
                  </li>
                  <li>
                    <Link to={"/menu"}>MENU</Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>CONTACT</Link>
                  </li>
                  <li>
                    <Link to={"/rate"}>RATE</Link>
                  </li>
                  <li>
                    <Link to={"/profile"}>{<AccountCircleIcon />}</Link>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};
export default Header;
