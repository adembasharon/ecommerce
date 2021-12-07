import React from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import Badge from '@mui/material/Badge';
import {Link} from "react-router-dom"
import MailIcon from '@mui/icons-material/Mail';
import Login from "../../components/../pages/Login"

import "./Nav.css";
const Nav=()=>{
    return(
        <div className="nav-wrapper">

<div className="left">
    <span className="lang">EN</span>
<div className="search-container">
<input className="input" type="text" placeholder="Search Product"/>
<SearchOutlinedIcon/>
</div>
</div>

<div className="center">
 <Link to="/" > <h1>MAGOSO ENTERPRICE.</h1></Link>
</div>
<div className="right">
    <ul>
        <li><Link to="/Login">LOGIN</Link></li>
        <li><Link to="/Signup">REGISTER</Link></li>

       <Link to="/Cart"><Badge badgeContent={4} color="secondary">
    <LocalMallOutlinedIcon color="action" />
      </Badge></Link>



    </ul>
</div>

        </div>
    )
}
export default Nav;











