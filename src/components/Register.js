import {
  Box,
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import Banner from "../images/nordwood-themes-EZSm8xRjnX0-unsplash.jpg";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { setSnackbar } from "../Store/Reducers/Snackbar";
import "../styles/Register.css";

const Register = () => {
  const [data, setData] = useState({});
  const handleChange = (e) => {
    setData((prevData) => {
      prevData[e.target.name] = e.target.value;
      return { ...prevData };
    });
  };
  // For storing the data in localstorage when data changes
  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(data));
    let login = { userId: data?.Name, password: data?.password };
    localStorage.setItem("credentials", JSON.stringify(login));
  }, [data]);

  const dispatch = useDispatch();
  const handleSave = () => {
    dispatch(setSnackbar(true, "success", "Registered Successfully!!"));
    navigate("/", { replace: true }); // {replace:true, means when it navigate then in url current page url will be removed and navigation page url(means this-> /) will be shown}
  };

  const { handleSubmit, errors } = useFormik({
    initialValues: data,
    enableReinitialize: true,
    validationSchema: Yup.object({
      password: Yup.string()
        .required()
        .max(6, "can not be more or less than 6")
        .min(6, "can not be less than 6"),
      // EmailId: Yup.string().required().email(),
    }),
    onSubmit: handleSave,
  });
  const navigate = useNavigate();

  return (
    <Fragment>
      <Grid container overflowY="hidden">
        <Grid
          item
          xs={10}
          sm={10}
          md={11}
          justifyContent="center"
          alignItems="center"
          overflowY="hidden"
        >
          <Grid
            container
            spacing={0}
            // padding="2.5rem"
            justifyContent="center"
            alignItems="center"
            sx={{
              background: "linear-gradient(lightblue,black)",
              padding: { xs: 0, sm: 0, md: "2.5rem 1.5rem " },
              margin: { xs: 0, sm: 0, md: "3.5rem 3.5rem" },
            }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              md={7}
              justifyContent="center"
              alignItems="center"
              display="flex"
              sx={{
                backgroundImage: `url(${Banner})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "100vh",
                width: "100%",
                flexWrap: "wrap",
                backgroundPosition: {
                  xs: "center",
                  sm: "center",
                  md: "center",
                },
              }}
            ></Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              justifyContent="center"
              alignItems="center"
              display="flex"
            >
              <Stack
                spacing={2}
                direction="column"
                sx={{
                  xs: { marginTop: 3 },
                  sm: { marginTop: 3 },
                  md: { marginTop: 5 },
                }}
              >
                <TextField
                  variant="filled"
                  autoFocus={true}
                  name="Name"
                  value={data.name}
                  label="Name"
                  onChange={handleChange}
                  autoComplete="off"
                  // variant="filled"
                  // name="EmailId"
                  // value={data.name}
                  // label="Name/Email Id"
                  // onChange={handleChange}
                  // autoComplete="off"
                  // error={Boolean(errors.EmailId)}
                  // helperText={errors.EmailId}
                  // sx={{ ml: "15%", mt: 7 }}
                ></TextField>
                <TextField
                  variant="filled"
                  name="password"
                  type="password"
                  value={data.name}
                  label="Password *"
                  onChange={handleChange}
                  error={Boolean(errors.password)}
                  helperText={errors.password}
                  // sx={{ ml: "19%", mt: 5 }}
                ></TextField>
                <TextField
                  variant="filled"
                  name="confirmpassword"
                  type="password"
                  value={data.name}
                  label="Confirm Password *"
                  onChange={handleChange}
                  error={Boolean(errors.confirmpassword)}
                  helperText={errors.confirmpassword}
                  // sx={{ ml: "19%", mt: 5 }}
                ></TextField>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ backgroundColor: "goldenrod" }}
                  // sx={{ mt: 7, ml: "43%", fontSize: 19 }}
                  onClick={handleSubmit}
                >
                  SUBMIT
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* <form>
        <Box sx={{ backgroundImage: `url(${Banner})`, height: "100vh" }}>
          <Typography
            sx={{ ml: 40, color: "green", fontWeight: "bold" }}
            variant="h4"
          >
            Please Register Yourself Here :
          </Typography>
          <Box
            sx={{
              ml: "15%",
              backgroundColor: "lightgoldenrodyellow",
              mt: "40px",
              // justifyContent: "center",
              // alignItems: "center",
              width: 800,
              height: "80vh",
            }}
          >
            <TextField
              variant="filled"
              autoFocus={true}
              name="Name"
              value={data.name}
              label="Name"
              onChange={handleChange}
              autoComplete="off"
              sx={{ ml: "15%", mt: 5 }}
            ></TextField>
            <TextField
              variant="filled"
              name="password"
              type="password"
              value={data.name}
              label="password *"
              onChange={handleChange}
              error={Boolean(errors.password)}
              helperText={errors.password}
              sx={{ ml: "19%", mt: 5 }}
            ></TextField>
            <TextField
              variant="filled"
              name="MobileNo"
              value={data.name}
              label="Mobile No."
              onChange={handleChange}
              autoComplete="off"
              sx={{ ml: "15%", mt: 7 }}
            ></TextField>
            <TextField
              variant="filled"
              name="Address"
              value={data.name}
              label="Address"
              onChange={handleChange}
              sx={{ ml: "19%", mt: 7, height: 50 }}
            ></TextField>
            <TextField
              variant="filled"
              name="EmailId"
              value={data.name}
              label="EmailId *"
              onChange={handleChange}
              autoComplete="off"
              error={Boolean(errors.EmailId)}
              helperText={errors.EmailId}
              sx={{ ml: "15%", mt: 7 }}
            ></TextField>
            <InputLabel sx={{ ml: 62, mt: -10 }}>Age</InputLabel>
            <Select
              sx={{ ml: "62%", mt: 0, width: "215px" }}
              name="Age"
              label="Age"
              value={data.name}
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <Button
              variant="contained"
              sx={{ mt: 7, ml: "43%", fontSize: 19 }}
              onClick={handleSubmit}
            >
              SUBMIT
            </Button>
          </Box>
        </Box>
      </form> */}
    </Fragment>
  );
};
export default Register;
