import {HashRouter as Router, Routes , Route } from 'react-router-dom';
import './App.css';
import React from "react"
import Home from "./pages/Home"
import Cart from "./pages/Cart";
import  Login from "./pages/Login";
import Signup from "./pages/Signup";
function App() {
  return (
<Router>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="Cart" element={<Cart/>}/>
    <Route path="Login" element={<Login/>}/>
    <Route path="Signup" element={<Signup/>}/>
  </Routes>
  </Router>



  );
}

export default App;
