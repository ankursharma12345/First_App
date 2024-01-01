import { Alert, Box, Button, Grid, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import Image from "../images/thomas-heintz-0tgMnMIYQ9Y-unsplash.jpg";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Snackbar from "@mui/material/Snackbar";
import "../styles/Login.css";
import { useDispatch } from "react-redux";
import { setSnackbar } from "../Store/Reducers/Snackbar";

const Login = () => {
  const [data, setData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const handleChange = (e) => {
    setData((prevData) => {
      prevData[e.target.name] = e.target.value;
      return { ...prevData };
    });
  };

  const getData = JSON.parse(localStorage.getItem("Data"));
  const getName = getData?.Name;

  const getPassword = getData?.password;

  const navigate = useNavigate();

  const handleClick = () => {
    if (getName === data.Username && getPassword === data.password) {
      setTimeout(()=>{
        dispatch(setSnackbar(true,"success","Loggin Successfully!!",true))
      },10);
      // setOpenSnackbar(true);
      setTimeout(() => {
        navigate("/home"); // We can also use navigate with callback functions but we don't have to use Link with callback functions
      }, 400);
    }
  };
  const dispatch = useDispatch();
  const handleRegister = () => {
    // dispatch(setSnackbar(true,"success","Loggin Successfully!!"))
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
      <Grid
        container
        xs={12}
        sm={12}
        md={12}
        height="100vh"
        width="100vw"
        sx={{
          backgroundImage: `url(${Image})`,
        }}
      >
        {/* For fixing the scroll we use backgroundPositionY: 'fixed' */}
        {/* <CssBaseline /> */}
        <Grid item xs={12} md={12} sm={12} bgcolor="red">
          <Typography
            sx={{
              color: "green",
              fontSize: 30,
              fontWeight: "bold",
              textAlign: "center",
              bgcolor: "yellow",
            }}
          >
            Login Here!!
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Box
            sx={{
              width: { md: 400, xs: 330 },
              height: { md: 410, xs: 340 },
              backgroundColor: "grey",
              justifyContent: "center",
              marginLeft: "auto",
              marginRight: "auto",
              mt: "10px",
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
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Login;
