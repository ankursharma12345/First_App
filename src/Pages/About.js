import React, { Fragment } from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import Banner from "../images/foto-sushi-6anudmpILw4-unsplash.jpg";
import "../../src/styles/Aboutstyles.css";

const About = () => {
  return (
    <Fragment>
      <Box className="box" sx={{ backgroundImage: `url(${Banner})` }}>
        <Layout>
          <Box
            sx={{
              my: 10,
              textAlign: "center",
              "& p": {
                // "& p:{}" means we can target p tag with the help of &
                textAlign: "justify",
                color: "black",
                fontSize: "1.3rem",
              },
              "& .p1": {
                color: "darkyellow",
              },
              "& .p2": {
                color: "darkyellow",
              },
              "& h4": {
                mb: 3,
                mt:3
              },
              "@media (max-width:600px)": {
                mt: 9,
              },
            }}
          >
            <Typography variant="h4" sx={{ color: "blue", fontWeight: "bold" }}>
              Welcome to My Restaurant
            </Typography>
            <p className="p1">
              Since our modest beginnings in 2005 with a little space in
              Toronto’s stylish Yorkville locale,{" "}
              <strong style={{ color: "black", fontSize: "1.4rem" }}>
                My Restaurant{" "}
              </strong>
              development has been enlivened with the energy to cook and serve
              solid, Indian-roused takeout food. In contrast to other Indian
              eateries,{" "}
              <strong style={{ color: "black", fontSize: "1.4rem" }}>
                My Restaurant{" "}
              </strong>{" "}
              was made with the explicit expectation to appear as something
              else. We realize numerous individuals love Indian sustenance, yet
              a large number of them loathe or are unconscious of the regularly
              unfortunate fixings that make run-of-the-mill Indian nourishment
              taste so great. Our menu highlights things that utilize the sound
              and fragrant flavors, however, forget the stuffing ghee, spread,
              oil, and overwhelming cream.
            </p>
            <br />
            <p className="p2">
              Since our modest beginnings in 2005 with a little space in
              Toronto’s stylish Yorkville locale,{" "}
              <strong style={{ color: "black", fontSize: "1.4rem" }}>
                My Restaurant{" "}
              </strong>
              development has been enlivened with the energy to cook and serve
              solid, Indian-roused takeout food. In contrast to other Indian
              eateries,{" "}
              <strong style={{ color: "black", fontSize: "1.4rem" }}>
                My Restaurant{" "}
              </strong>{" "}
              was made with the explicit expectation to appear as something
              else. We realize numerous individuals love Indian sustenance, yet
              a large number of them loathe or are unconscious of the regularly
              unfortunate fixings that make run-of-the-mill Indian nourishment
              taste so great. Our menu highlights things that utilize the sound
              and fragrant flavors, however, forget the stuffing ghee, spread,
              oil, and overwhelming cream.
            </p>
          </Box>
        </Layout>
      </Box>
    </Fragment>
  );
};

export default About;
