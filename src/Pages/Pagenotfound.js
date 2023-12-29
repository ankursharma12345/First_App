import React, { Fragment } from "react";
import Layout from "../components/Layout/Layout";
import { Grid, Typography } from "@mui/material";

const Pagenotfound = () => {
  return (
    <Fragment>
      <Layout>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} sx={{ mt: { xs: 6 } }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold" }}
              textAlign="center"
            >
              Page Not Found!!
            </Typography>
          </Grid>
        </Grid>
      </Layout>
    </Fragment>
  );
};

export default Pagenotfound;
