import React, { Fragment } from "react";
import Layout from "../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
// import "../../src/styles/Menustyles.css";
import { Menulist } from "../data/data";

const Menu = () => {
  return (
    <Fragment>
      <Layout>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }} // With the help of FLEXWRAP, it will wrap the content according the width
        >
          {Menulist.map((menu) => (
            <Card sx={{ maxWidth: "390px", m: 1 }}>
              <CardActionArea>
                {" "}
                {/* cardActionArea is like if we click on the image then some animation is done */}{" "}
                {/* It defines the area of the image */}
                <CardMedia
                  sx={{ minHeight: "400px" }}
                  component={"img"} // component={'img'} means "ye CardMedia ek img ke jaise kaam krega"
                  src={menu.image}
                  alt={menu.name}
                />
                <CardContent>
                  {/* We are using cardContent for BODY of the card */}
                  <Typography
                    variant="h5"
                    color={"blue"}
                    fontWeight={"bold"}
                    gutterBottom
                    component={"div"}
                  >
                    {menu.name}
                  </Typography>
                  <Typography variant="body2" color={"green"}>
                    {menu.description}
                  </Typography>
                </CardContent>
                {/* It helps to show the image */}
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Layout>
    </Fragment>
  );
};

export default Menu;
