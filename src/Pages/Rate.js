import React, { useRef, useState } from "react";
import { Box, Button, FormControl, FormLabel, TextField } from "@mui/material";
import "../styles/Ratestyles.css";
import Layout from "../components/Layout/Layout";
import Rating from '@mui/material/Rating';
import {useNavigate } from "react-router-dom";

const Rate = () => {
const [value, setValue] = useState(0);

  const btn = useRef();  // We are using useRef for focusing on the button
  // const btn = document.getElementsByTagName("Button")[1];

  const handleEnter = (e) => {
    debugger
    // e.preventDefault();
      if(e.keyCode === 13){
        debugger
        // btn.currentTarget.select();
        btn.current.focus();
      }
  };

  // const textBlur = ()=>{
  //   btn?.focus();
  // }
const navigate = useNavigate();
  const handleClick = (e)=>{
    alert("Thanks for the Review!!")
    setTimeout(()=>{
      navigate("/home")
    },300)
    
  }
  return (
    <Layout>
      <FormControl
        className="form-control"
        sx={{
          "& .form": {
            color: "black",
            fontSize: 30,
          },
          "& .btn": {
            mt: 4,
            fontSize: 17,
            borderWidth: 50,
            mr: 100,
          },
          "& .rating":{
           m:1,
           mt:1,
           mr:2
          }
        }}
      >
        <FormLabel className="form">Enter your review:</FormLabel>
        <Rating  className = "rating" value={value}
            onChange={(event, newValue)=>{
              setValue(newValue)
            }}
            />
        <Box className="box">
          <TextField
            autoFocus={true}
            className="field"
            placeholder="Please write something about my restaurant"
            // multiline
            rows={6}
            // maxRows={20}
            onKeyDown={handleEnter}
            // onBlur = {textBlur}
          />
            {/* <Rating  className = "rating" value={value}
            onChange={(event, newValue)=>{
              setValue(newValue)
            }}
            /> */}
          <Button variant="contained" className="btn" onClick={handleClick} ref={btn}>
            Send
          </Button>
        </Box>

        <p>
          
        </p>
      </FormControl>
    </Layout>
  );
};
export default Rate;
