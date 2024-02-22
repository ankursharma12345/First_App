import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <h2>{children}</h2>
      <Footer/>
    </Fragment>
  );
};

export default Layout;
