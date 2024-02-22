import React, { Fragment } from "react";
import Layout from "../components/Layout/Layout";
import {
  Box,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
// import Banner from '../images/pavan-trikutam-71CjSSB83Wo-unsplash.jpg';

const Contact = () => {
  return (
    <Fragment>
      <Layout>
        <Box>
          <Box
            sx={{
              my: 5,
              ml: 2,
              "& h4": {
                color: "darkblue",
                fontWeight: "1.3rem bold"
              },
              "& p": {
                mt: 1,
                fontSize: "1.4rem",
                color: "grey",
              },
            }}
          >
            <Typography variant="h4">Contact with Us</Typography>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable.
            </p>
          </Box>
          <Box>
            <TableContainer component={Paper}>
              <Table aria-label="contact table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: "black" }}>
                      <SupportAgentIcon sx={{ color: "red", pt: 1 }} />{" "}
                      1800-512-213 (tollfree)
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>
                      <EmailIcon sx={{ color: "skyblue", pt: 1 }} />{" "}
                      ankurs@mytaxcafe.com (Owner's MailId)
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>
                      <CallIcon sx={{ color: "green", pt: 1 }} /> 8795988520
                      (Manager)
                    </TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Layout>
    </Fragment>
  );
};

export default Contact;
