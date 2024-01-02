import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { Fragment,useEffect, useState } from "react";
import Banner from "../images/jeremy-bishop-G9i_plbfDgk-unsplash.jpg";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { setSnackbar } from "../Store/Reducers/Snackbar";

const Register = ()=>{
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
    let login = {"userId":data?.Name, "password":data?.password}
    localStorage.setItem("credentials",JSON.stringify(login))
  }, [data]);

  // const getData = JSON.parse(localStorage.getItem("Data")); // it return data in the form of object
  // console.log(getData);

  // const getDataItem = {...getData} // Storing all the data({...getData}) in getDataItem then we can only access the field

  // console.log(getDataItem.Name);

  // const getName = getDataItem.Name;
  // console.log(getName);

  // const getPassword = getDataItem.password;
  // console.log(getPassword);

  const dispatch = useDispatch();
  const handleSave = () => {
    debugger
    dispatch(setSnackbar(true,"success","Registered Successfully!!"))
       navigate("/", { replace: true }); // {replace:true, means when it navigate then in url current page url will be removed and navigation page url(means this-> /) will be shown}
    }

  const { handleSubmit, errors } = useFormik({
    initialValues: data,
    enableReinitialize: true,
    validationSchema: Yup.object({
      password: Yup.string()
        .required()
        .max(6, "can not be more or less than 6")
        .min(6, "can not be less than 6"),
      EmailId: Yup.string().required().email(),
    }),
    onSubmit: handleSave,
  });
  const navigate = useNavigate();

  // const getInput = document.querySelectorAll("input");
  // const getButton = document.querySelector("button");
  return (
    <Fragment>
      <form>
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
              <InputLabel sx={{ml:62, mt: -10}}>Age</InputLabel>
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
      </form>
    </Fragment>
  );
};
export default Register;
