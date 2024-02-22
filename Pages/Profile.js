import { Box, Button, InputLabel, TextField } from "@mui/material";
import React, { Fragment, useState } from "react";
import Banner from "../images/jonas-kakaroto-KIPqvvTOC1s-unsplash.jpg";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const navigate = useNavigate();
  const getData = JSON.parse(localStorage.getItem("Data"));
  const handleClose = () => {
    navigate("/");
  };

  return (
    <Fragment>
      <Box
        sx={{
          backgroundImage: `url(${Banner})`,
          height: "100vh",
          backgroundSize: "cover",
          mt: -6.4,
          backgroundPositionY: "static",
        }}
      >
        <form>
          <InputLabel
            sx={{ ml: 10, fontWeight: "bold", fontSize: "20px", mt: 6 }}
          >
            Username :
          </InputLabel>
          <TextField
            variant="filled"
            value={getData.Name}
            sx={{ ml: 28, mt: -4.7 }}
          ></TextField>

          <InputLabel
            sx={{ ml: 10, fontWeight: "bold", fontSize: "20px", mt: 9 }}
          >
            Password :
          </InputLabel>
          <FilledInput
            sx={{ ml: 28, mt: -5, width: 230 }}
            value={getData.password}
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          {/* <TextField
            variant="filled"
            value={getData.password}
            sx={{ ml: 28, mt: -4.7 }}
          ></TextField> */}
          <InputLabel
            sx={{ ml: 10, fontWeight: "bold", fontSize: "20px", mt: 10 }}
          >
            Mobile No.
          </InputLabel>
          <TextField
            sx={{ ml: 27.8, mt: -5.7 }}
            variant="filled"
            value={getData.MobileNo}
          ></TextField>
          <InputLabel
            sx={{ ml: 10, fontWeight: "bold", fontSize: "20px", mt: 11 }}
          >
            Address :
          </InputLabel>
          <TextField
            variant="filled"
            sx={{ ml: 27, mt: -6.7, height: "50px", width: "350px" }}
            value={getData.Address}
          ></TextField>
          <InputLabel
            sx={{ ml: 95, fontWeight: "bold", fontSize: "20px", mt: -53.5 }}
          >
            Email Id :
          </InputLabel>
          <TextField
            variant="filled"
            sx={{ ml: 115, mt: -5.1 }}
            value={getData.EmailId}
          ></TextField>
          <InputLabel
            sx={{ ml: 95, fontWeight: "bold", fontSize: "20px", mt: 8.5 }}
          >
            Age
          </InputLabel>
          <TextField
            variant="filled"
            sx={{ ml: 115, mt: -5 }}
            value={getData.Age}
          ></TextField>
          <Button
            variant="contained"
            onClick={handleClose}
            sx={{ mt: 38, mr: 20, ml: 75 }}
          >
            Log Out
          </Button>
        </form>
      </Box>
    </Fragment>
  );
};

export default Profile;
