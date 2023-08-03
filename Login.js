import { Box, Button, Typography } from "@mui/material";
import React, { Fragment, forwardRef, useState } from "react";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import Image from "../images/isai-ramos-_3SFFsWqCVg-unsplash.jpg";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
// import {saveAs} from 'file-saver'

const Login = () => {
  const [data, setData] = useState({});
  // const darkTheme = createTheme({
  //   palette: {
  //     mode: "dark",
  //   }
  // });
  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      setOpenSnackbar(false);
    }
  };

  const handleChange = (e) => {
    setData((prevData) => {
      prevData[e.target.name] = e.target.value;
      return { ...prevData };
    });
  };

  const getData = JSON.parse(localStorage.getItem("Data"));
  // const dataBlob = new Blob([JSON.stringify(getData)]);
  // saveAs(dataBlob, 'server1.json');

  // const getDataItem = {...getData}

  const getName = getData.Name;
  // console.log(getName);

  const getPassword = getData.password;
  // console.log(getPassword);

  const navigate = useNavigate();

  const handleClick = () => {
    debugger;
    setOpenSnackbar(true);
    if (getName === data.Username && getPassword === data.password) {
      navigate("/home"); // We can also use navigate with callback functions but we don't have to use Link with callback functions
    } else {
      <Snackbar
        anchorOrigin={{ horizontal: "left", vertical: "top" }}
        open={openSnackbar}
        autoHideDuration={200}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error" SX={{ width: "100%" }}>
          Invalid User!!!!
        </Alert>
      </Snackbar>;
    }
  };
  const handleRegister = () => {
    setTimeout(() => {
      navigate("/register", { replace: true });
    }, 200);
  };
  return (
    <Fragment>
      {/* <ThemeProvider theme={darkTheme}> */}
      <Box
        sx={{
          backgroundImage: `url(${Image})`,
          height: "100vh",
          backgroundPositionY: "fixed",
        }}
      >
        {" "}
        {/* For fixing the scroll we use backgroundPositionY: 'fixed' */}
        {/* <CssBaseline /> */}
        <Typography
          sx={{ color: "green", fontSize: 30, ml: "42.5%", fontWeight: "bold" }}
        >
          Login Here!!
        </Typography>
        {/* <Box sx={{ backgroundColor: "goldenrod", height: "5rem" }}>
          <Typography
            sx={{
              color: "white",
              ml: "570px",
              fontSize: "30px",
              mt: "30px",
            }}
          >
            Login First!
          </Typography>
        </Box> */}
        <Box
          sx={{
            width: 400,
            height: 410,
            backgroundColor: "grey",
            justifyContent: "center",
            marginLeft: "34%",
            mt: "55px",
            // mb: "40px",
          }}
        >
          <TextField
            label="Username"
            variant="standard"
            name="Username"
            value={data.name}
            autoComplete="off" // It will not shown any hint
            onChange={handleChange}
            sx={{ justifyContent: "center", ml: 10, mt: 9 }}
          ></TextField>
          <br />
          <br />
          <TextField
            label="Password"
            variant="standard"
            name="password"
            value={data.name}
            type="password"
            onChange={handleChange}
            sx={{ justifyContent: "center", ml: 10 }}
          ></TextField>
          <Button
            variant="contained"
            sx={{ mt: 6, mr: 7, ml: 9.5 }}
            onClick={handleClick}
          >
            Sign in
          </Button>
          <Button
            variant="contained"
            sx={{ mr: 5, mt: -7.1, ml: 24.5 }}
            onClick={handleRegister}
          >
            Register
          </Button>
          <Typography sx={{ml:9, color:'white', mt:1}}>
            New User? <Link to={"/register"}>Register</Link> yourself first !!
          </Typography>
        </Box>
        {/* </ThemeProvider> */}
      </Box>
    </Fragment>
  );
};

export default Login;
