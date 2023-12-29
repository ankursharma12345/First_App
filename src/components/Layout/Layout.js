import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Grid } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12} sm={12}>
          <Header />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={12}>
          {children}
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={12}>
          <Footer />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Layout;
