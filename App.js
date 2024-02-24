import React, { Fragment } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Menu from './Pages/Menu'
import Pagenotfound from './Pages/Pagenotfound'
import Rate from './Pages/Rate';
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./Pages/Profile";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/menu" element={<Menu/>}></Route>
        <Route path="/rate" element={<Rate/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="*" element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
