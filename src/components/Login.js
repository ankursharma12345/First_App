import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Box, Button, Grid, Typography, createTheme } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setSnackbar } from "../Store/Reducers/Snackbar";
import "../styles/Login.css";
import Banner from "../images/joanna-kosinska-llLttk4TgT4-unsplash.jpg";
import { ThemeProvider } from "@emotion/react";
import debounce from "lodash/debounce";

const Login = () => {
  const [data, setData] = useState({});
  console.log(data);
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    document.getElementById("bigContainer").classList?.add("fadeInAnimation");
  }, []);

  const dispatch = useDispatch();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChange = (e) => {
    // Debouncing prevent to update my state(data) on each keypress, it will automatically invoke the handleChange function when 2seconds will completed
    setData((prevData) => {
      prevData[e?.target.id] = e?.target.value;
      return { ...prevData };
    });
  };
  const handleBlur = (e) => {
    setData((prev) => {
      prev[e.target.id] = e.target.value;
      return { ...prev };
    });
  };
  // const handleBlur = (e) => {
  //   debugger;
  //   const { id, value } = e.target;

  //   setData((prev) => {
  //     // Update the state only if the value is not an empty string
  //     if (value.trim() !== "") {
  //       prev[id] = value;
  //     }
  //     return { ...prev };
  //   });
  // };
  // const handleBlur = (e) => {
  //   debugger;
  //   const { id, value } = e.target;

  //   setData((prev) => {
  //     // Update the state only if the value is not an empty string
  //     if (value.trim() !== "") {
  //       prev[id] = value;
  //     }
  //     prev[id] = value;
  //     return { ...prev };
  //   });
  // };

  const getData = JSON.parse(localStorage.getItem("Data"));
  const getName = getData?.Name;
  const getPassword = getData?.password;

  const navigate = useNavigate();

  const handleClick = () => {
    if (getName) {
      if (getName === data.Username && getPassword === data.password) {
        dispatch(
          setSnackbar(
            true,
            "success",
            `${"Login Successfully!!"}${" " + getName}`
          )
        );
        setTimeout(() => {
          navigate("/home"); // We can also use navigate with callback functions but we don't have to use Link with callback functions
        }, 400);
        return;
      }
    }
    if (!data?.Username || !data?.password) {
      return dispatch(
        setSnackbar(true, "error", "Please! Fill your details first")
      );
    }
    if (getName !== data.Username || getPassword !== data.password) {
      // dispatch(setLoader("start"));
      dispatch(setSnackbar(true, "error", "Please! check your credentials"));
      const getData = document.getElementById("Username");
      getData?.focus();
      // Use the next event loop cycle to focus after updating the state
      setTimeout(() => {
        setData((prevData) => {
          return { ...prevData, Username: "", password: "" };
        });
      }, 10);

      return;
    }
    // if (getName !== data.Username || getPassword !== data.password) {
    //   debugger;
    //   // dispatch(setLoader("start"));
    //   dispatch(setSnackbar(true, "error", "Please! check your credentials"));
    //   const getData = document.getElementById("Username");
    //   setTimeout(() => {
    //     getData?.focus();
    //   }, 10);
    //     setData((prevData) => {
    //       return { ...prevData, Username: "", password: "" };
    //     });
    //   // setTimeout(() => {
    //   //   dispatch(setLoader("stop"));
    //   // }, 500);
    //   // setData((prevData) => {
    //   //   return { ...prevData, Username: "", password: "" };
    //   // });
    //   return;
    // }
  };
  const handleRegister = () => {
    setTimeout(() => {
      navigate("/register", { replace: true });
    }, 400);
  };
  const theme = createTheme({
    components: {
      MuiInputLabel: {
        styleOverrides: {
          root: {
            fontSize: "1.3rem",
            color: "yellow",
          },
        },
      },
    },
  });

  return (
    <Fragment>
      <Grid
        container
        className="container"
        id="bigContainer"
        height="100vh"
        minWidth="100vw"
        sx={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: "contained",
          backgroundRepeat: "no-repeat",
          overflowX: "hidden",
          overflowY: "hidden",
          // flexWrap: "wrap",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          // direction="column"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            className="box"
            sx={{
              width: { xs: 280, sm: 300, md: 400 },
              height: { xs: 340, sm: 380, md: 450 },
              // backgroundColor: "#598dc2",
              backgroundColor: "transparent",
              boxShadow: "rgba(0.3,0.3,0.3,0.3)",
              margin: "auto", // For centering the Box horizontally
              // mt: { xs: -12, sm: -12, md: -3 },
            }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              alignItems="center"
              justifyContent="center"
              display="flex"
              marginTop="1rem"
              // marginTop="auto"
            >
              <Typography variant="h4">Sign In</Typography>
            </Grid>
            <Grid item xs={10} sm={12} md={12}>
              {" "}
              <ThemeProvider theme={theme}>
                <TextField
                  className="textField1"
                  autoFocus={true} // autoFocus should be written like this else it throw error. we don't pass like autoFocus="true"
                  required={true} // required should be written like this else it throw error.we don't pass like required="true"
                  // color="secondary"
                  label="Username"
                  variant="standard"
                  id="Username"
                  // color="success"
                  // value={data?.Username}
                  value={data?.["Username"]}
                  autoComplete="off" // It will not show any hint
                  onChange={handleChange}
                  onBlur={handleBlur}
                  sx={{
                    justifyContent: "center",
                    ml: { xs: 5, sm: 4, md: 11 },
                    mt: { xs: 2, sm: 4, md: 4 },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircleIcon fontSize="medium" />
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
              </ThemeProvider>
            </Grid>
            <Grid item xs={10} sm={12} md={12}>
              {" "}
              <ThemeProvider theme={theme}>
                <TextField
                  className="textField2"
                  label="Password"
                  required={true}
                  variant="standard"
                  id="password"
                  value={data?.["password"]}
                  type={showPassword ? "password" : "text"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onClick={handleClickShowPassword}
                  sx={{
                    justifyContent: "center",
                    ml: { xs: 5, sm: 4, md: 11 },
                    mt: { xs: 2, sm: 4, md: 4 },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              {" "}
              <Button
                variant="contained"
                sx={{
                  mt: { xs: 5, sm: 4, md: 6 },
                  ml: { xs: 5, sm: 3, md: 10 },
                }}
                onClick={handleClick}
              >
                Sign in
              </Button>
              <Button
                variant="contained"
                sx={{
                  mt: { xs: 5, sm: 4, md: -7 },
                  ml: { xs: 3, sm: 4, md: 24.5 },
                }}
                onClick={handleRegister}
              >
                Register
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              justifyContent="center"
              alignItems="center"
              display="flex"
            >
              {" "}
              <Typography
                sx={{
                  // justifyContent: "center",
                  // alignItems: "center",
                  // display: "flex",
                  // ml: { xs: 2, sm: 2, md: 6.4 },
                  mt: { xs: 2, sm: 2, md: 1 },
                  color: "black",
                  fontWeight: "bold",
                  fontStyle: "italic",
                  // fontSize: "19px",
                }}
              >
                New User?{" "}
                <b>
                  <Link to={"/register"}> Register </Link>
                </b>{" "}
                yourself first !!
              </Typography>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      {/* </video> */}
    </Fragment>
  );
};

export default Login;
