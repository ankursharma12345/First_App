import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  // const [openYoutube, setYoutube] = useState();
  const handleYoutube = ()=>{
    window.open("https://www.youtube.com/", "_blank", "noreferrer") // for opening the link in New Tab
  }
  const handleGit = ()=>{
    window.open("https://github.com/ankursharma12345", "_blank", "noreferrer")
  }
  return (
    <Fragment>
      <Box
        sx={{ textAlign: "center", color: "white", bgcolor: "#1A1A19", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              // we use svg here because Icons are in svg
              fontSize: "60px",
              cursor: "pointer", // cursor-> pointer means hyperlink aa jaayega
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)", // This helps in animation with x-axis because we use translateX. when we hover on the icons then it will be moved at the x-axis only 5px
              transition: "all 400ms", // it tells that when we hover on the icon then it will move x-axis only 5px and with the help of transition, it will apply on all and returns back after 400ms
            },
          }}
        >
          <InstagramIcon />
          <GitHubIcon onClick={handleGit} />
          <YouTubeIcon onClick={handleYoutube}/>
        </Box>
        <Typography
          variant="h5"
          sx={{
            "&media (max-width:600px)": {
              // We choose max-width as 600px because mobile devices width is less than 600px
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy; Ankur Sharma
        </Typography>
      </Box>
    </Fragment>
  );
};

export default Footer;
