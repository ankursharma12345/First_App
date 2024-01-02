import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Box, Button, Grid, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setSnackbar } from "../Store/Reducers/Snackbar";
import Image from "../images/thomas-heintz-0tgMnMIYQ9Y-unsplash.jpg";
import "../styles/Login.css";

const Login = () => {
  const [data, setData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

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
      setTimeout(() => {
        dispatch(
          setSnackbar(
            true,
            "success",
            `${"Login Successfully!!"}${" " + getName}`
          )
        );
      }, 10);
      setTimeout(() => {
        navigate("/home"); // We can also use navigate with callback functions but we don't have to use Link with callback functions
      }, 400);
      return;
    }
    if (getName !== data.Username || getPassword !== data.password) {
      dispatch(setSnackbar(true, "error", "Please check your credentials"));
    }
    return;
  };
  const handleRegister = () => {
    setTimeout(() => {
      navigate("/register", { replace: true });
    }, 400);
  };
  return (
    <Fragment>
      <Grid
        container
        height="100vh"
        width="100vw"
        sx={{
          backgroundImage: `url(${Image})`,
        }}
      >
        {/* For fixing the scroll we use backgroundPositionY: 'fixed' */}
        {/* <CssBaseline /> */}
        <Grid item xs={12} md={12} sm={12}>
          <Typography
            sx={{
              color: "green",
              fontSize: 30,
              fontWeight: "bold",
              textAlign: "center",
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
