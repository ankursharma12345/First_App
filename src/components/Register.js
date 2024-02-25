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
import { debounce } from "lodash";
import BackImage from "../images/lucas-k-wQLAGv4_OYs-unsplash.jpg";

const Register = () => {
  const [data, setData] = useState({});
  console.log(data);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setData((prevData) => {
      prevData[e.target.name] = e.target.value;
      return { ...prevData };
    });
  };
  const handleBlur = (e, value) => {
    setData((prev) => {
      prev[e.target.id] = e.target.value;
      return { ...prev };
    });
  };
  // For storing the data in localstorage when data changes
  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(data));
    // let login = { userId: data?.Name, password: data?.password };
    // localStorage.setItem("credentials", JSON.stringify(login));
  }, [data]);

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
    }),
    onSubmit: handleSave,
  });
  const navigate = useNavigate();

  return (
    <Fragment>
      <Grid container sx={{backgroundImage:`url(${BackImage})`}}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          // spacing={2}
          justifyContent="center"
          alignItems="center"
          display="flex"
          sx={{
            background: "linear-gradient(lightblue,black)",
            padding: { xs: "1.5rem", sm: "1.5rem", md: "1.5rem 1.5rem " },
            margin: { xs: "1.5rem", sm: "1.5rem", md: "2.5rem 3.5rem" },
          }}
        >
          <Grid
            item
            xs={0}
            sm={0}
            md={6}
            justifyContent="center"
            alignItems="center"
            display={{ xs: "none", sm: "none", md: "flex" }}
            sx={{
              backgroundImage: `url(${Banner})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "80vh",
              width: "100%",
              // flexWrap: "wrap",
              // backgroundPosition: {
              //   xs: "center",
              //   sm: "center",
              //   md: "center",
              // },
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
              direction="column"
              sx={{
                xs: { marginTop: 3 },
                sm: { marginTop: 3 },
                md: { marginTop: 5 },
              }}
            >
              <TextField
                label="Name"
                variant="filled"
                autoFocus={true}
                id="Name"
                value={data?.["Name"]}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
              ></TextField>
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
              <Button
                variant="contained"
                size="large"
                sx={{ backgroundColor: "goldenrod" }}
                onClick={handleSubmit}
              >
                SUBMIT
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Grid>

      {/* export default YourComponent; */}

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
