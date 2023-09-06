import React, { Fragment } from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Banner from '../images/brooke-lark-4J059aGa5s4-unsplash.jpg'
import '../../src/styles/Homestyles.css';
// import Image2 from '../images/anh-nguyen-kcA-c3f_3FE-unsplash.jpg';
// import Image3 from '../images/brooke-lark--F_5g8EEHYE-unsplash.jpg';
// import Image4 from '../images/no-revisions-gA81ZTsql68-unsplash.jpg';
// import Image5 from '../images/ronise-daluz-LgTyii0GDKQ-unsplash.jpg';

const Home = () => {
  const getData = JSON.parse(localStorage.getItem("Data")); // It will return the data in the form of Object
  // console.log(getData);
  // const getAllData = {...getData};
  // console.log(getAllData);
  const getName = getData.Name;
  return (
    <Fragment>
      <Layout>
        <div className="home" style={{backgroundImage:`url(${Banner})`}}>
          <div className="headerContainer">
            <h1>{getName} RESTAURANT</h1>
            <p>Offers best food in India</p>
            <Link to={"/menu"}>
              <Button className="btn" sx={{my:1, backgroundColor:'black', color:'white'}}>ORDER NOW</Button>
            </Link>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default Home;
