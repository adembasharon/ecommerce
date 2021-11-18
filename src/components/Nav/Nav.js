import React from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';


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
    <h1>MAGOSO ENTERPRICE.</h1>
</div>
<div className="right">
    <ul>
        <li><a href="#">LOGIN</a></li>
        <li><a href="#">Register</a></li>

       <li> <Badge badgeContent={4} color="secondary">
    <LocalMallOutlinedIcon color="action" />
      </Badge></li>



    </ul>
</div>

        </div>
    )
}
export default Nav;











