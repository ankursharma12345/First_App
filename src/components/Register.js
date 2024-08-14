import { ThemeProvider } from "@emotion/react";
import { Button, Grid, Stack, TextField, createTheme } from "@mui/material";
import { useFormik } from "formik";
import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { setSnackbar } from "../Store/Reducers/Snackbar";
import Banner from "../images/austin-distel-VvAcrVa56fc-unsplash.jpg";
import BackImage from "../images/lucas-k-wQLAGv4_OYs-unsplash.jpg";
import "../styles/Register.css";

const Register = () => {
  const reg = "^[a-zA-Z0-9]*$"; // For allowing to enter only alphanumeric characters
  const [data, setData] = useState({
    Name: "",
    password: "",
    confirmpassword: "",
  });

  const dispatch = useDispatch();
  const handleChange = (e) => {
    setData((prevData) => {
      prevData[e.target.id] = e.target.value;
      return { ...prevData };
    });
  };
  const handleBlur = (e) => {
    setData((prev) => {
      prev[e.target.id] = e.target.value;
      return { ...prev };
    });
  };
  const handleSave = () => {
    dispatch(setSnackbar(true, "success", "Registered Successfully!!"));
    localStorage.setItem("Data", JSON.stringify(data));
    navigate("/", { replace: true }); // {replace:true, means when it navigate then in url current page url will be removed and navigation page url(means this-> /) will be shown}
  };

  const { handleSubmit, errors } = useFormik({
    initialValues: data,
    enableReinitialize: true,
    validationSchema: Yup.object({
      Name: Yup.string().required("Name is required"),
      password: Yup.string()
        .required("Password is required")
        .matches(reg, "Enter valid password")
        .min(6, "can not be less than 6"),
      confirmpassword: Yup.string()
        .required("Confirm Password is required")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
      // Here "null" means confirmpassword field can be a valid null value
    }),
    onSubmit: handleSave,
  });
  const navigate = useNavigate();
  const theme = createTheme({
    components: {
      MuiInputLabel: {
        styleOverrides: {
          root: {
            fontSize: "1.3rem",
            color: "orange",
            fontFamily: "cursive",
          },
        },
      },
    },
  });

  return (
    <Fragment>
      <Grid
        container
        sx={{
          backgroundImage: `url(${BackImage})`,
          height: { xs: "100vh", sm: "100vh", md: "100vh" },
          width: "100%",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          justifyContent="center"
          alignItems="center"
          display="flex"
          sx={{
            background: "linear-gradient(lightblue,black)",
            padding: { xs: "2.5rem", sm: "1.5rem", md: "1.5rem 1.5rem " },
            margin: { xs: "1.5rem", sm: "1.5rem", md: "2.5rem 3.5rem" },
            marginTop: { xs: "2.5rem", sm: "2.5rem" },
          }}
        >
          <Grid
            item
            md={6}
            justifyContent="center"
            alignItems="center"
            display={{ xs: "none", sm: "none", md: "flex" }} // For hiding the image in xs and sm screens
            sx={{
              backgroundImage: `url(${Banner})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "80vh",
              width: "100%",
              opacity: 0.7,
              /*box shadow will take five arguments [horizontal(if -ve then move left),  
              vertical(if -ve then move upwards),blur(amount of blur applied to the shadow),spread radius
              (+ve value will expanded the shadow, -ve value will shrink the shadow), color(as you like)]
                */
              boxShadow: "-8px -8px 0px 8px linear-gradient(lightblue,black)",
            }}
          ></Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Stack
              spacing={2}
              sx={{
                sm: { marginTop: 5 },
                xs: { marginTop: 5 },
                md: { marginTop: 5 },
              }}
            >
              <ThemeProvider theme={theme}>
                <TextField
                  label="Name"
                  required={true}
                  variant="filled"
                  autoFocus={true}
                  id="Name"
                  value={data?.["Name"]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="off"
                  error={Boolean(errors.Name)}
                  helperText={errors.Name}
                ></TextField>
              </ThemeProvider>
              <ThemeProvider theme={theme}>
                <TextField
                  label="Password *"
                  variant="filled"
                  type="password"
                  id="password"
                  value={data?.["password"]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors.password)}
                  helperText={errors.password}
                ></TextField>
              </ThemeProvider>
              <ThemeProvider theme={theme}>
                <TextField
                  variant="filled"
                  id="confirmpassword"
                  type="password"
                  value={data?.["confirmpassword"]}
                  label="Confirm Password *"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors.confirmpassword)}
                  helperText={errors.confirmpassword}
                ></TextField>
              </ThemeProvider>
              <Button
                id="btn"
                variant="contained"
                size="large"
                onClick={handleSubmit}
              >
                SUBMIT
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default Register;
