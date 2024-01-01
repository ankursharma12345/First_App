import React, { Fragment } from "react";
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Pagenotfound from './Pages/Pagenotfound';
import Profile from "./Pages/Profile";
import Rate from './Pages/Rate';
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const getRoute = (path,component)=>{
    return {
      path: path,
      element: component
    }
  }
  return (
    <Fragment>
      {/* <BrowserRouter> */}
      <Routes>
        <Route {...getRoute("/",<Login/>)}></Route>
        {/* <Route path="/" element={<Login/>}></Route> */}
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/menu" element={<Menu/>}></Route>
        <Route path="/rate" element={<Rate/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="*" element={<Pagenotfound/>}></Route>
      </Routes>
      {/* </BrowserRouter> */}
    </Fragment>
  );
}

export default App;
