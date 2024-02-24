import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Pagenotfound from "./Pages/Pagenotfound";
import Profile from "./Pages/Profile";
import Rate from "./Pages/Rate";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const getRoute = (path, component) => {
    return {
      path: path,
      element: component,
    };
  };
  return (
    <Fragment>
      <Routes>
        <Route {...getRoute("/", <Login />)}></Route>
        <Route {...getRoute("/register", <Register />)}></Route>
        <Route {...getRoute("/home", <Home />)}></Route>
        <Route {...getRoute("/about", <About />)}></Route>
        <Route {...getRoute("/contact", <Contact />)}></Route>
        <Route {...getRoute("/menu", <Menu />)}></Route>
        <Route {...getRoute("/rate", <Rate />)}></Route>
        <Route {...getRoute("/profile", <Profile />)}></Route>
        <Route {...getRoute("*", <Login />)}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
