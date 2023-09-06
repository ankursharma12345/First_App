import { Alert, Box, Button, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import Image from "../images/thomas-heintz-0tgMnMIYQ9Y-unsplash.jpg";
// import {saveAs} from 'file-saver'
import Snackbar from "@mui/material/Snackbar";
import "../styles/Login.css";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const [data, setData] = useState({});
  // const darkTheme = createTheme({
  //   palette: {
  //     mode: "dark",
  //   }
  // });
  const [showPassword, setShowPassword] = useState(false);
  // const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [openSnackbar, setOpenSnackbar] = useState(false);
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

  const getName = getData?.Name;
  // console.log(getName);

  const getPassword = getData?.password;
  // console.log(getPassword);

  const navigate = useNavigate();

  const handleClick = () => {
    if (getName === data.Username && getPassword === data.password) {
      setOpenSnackbar(true);
      setTimeout(() => {
        navigate("/home"); // We can also use navigate with callback functions but we don't have to use Link with callback functions
      }, 400);
    }
  };
  const handleRegister = () => {
    setTimeout(() => {
      navigate("/register", { replace: true });
    }, 400);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
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
            autoFocus="true"
            label="Username"
            variant="standard"
            name="Username"
            color="success"
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
            type={showPassword ? "text" : "password"}
            onChange={handleChange}
            sx={{ justifyContent: "center", ml: 10 }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          ></TextField>
          <Button
            variant="contained"
            sx={{ mt: 6, mr: 7, ml: 9.5 }}
            onClick={handleClick}
          >
            Sign in
          </Button>
          <Snackbar
            className="snack"
            open={openSnackbar}
            autoHideDuration={3000}
            onClose={handleClose}
            // sx={{backgroundColor:'green'}}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%", backgroundColor: "green", color: "white" }}
            >
              Logged In!!
            </Alert>
          </Snackbar>
          <Button
            variant="contained"
            sx={{ mr: 5, mt: -7.1, ml: 24.5 }}
            onClick={handleRegister}
          >
            Register
          </Button>
          <Typography sx={{ ml: 9, color: "white", mt: 1 }}>
            New User? <Link to={"/register"}>Register</Link> yourself first !!
          </Typography>
        </Box>
        {/* </ThemeProvider> */}
      </Box>
    </Fragment>
  );
};

export default Login;
