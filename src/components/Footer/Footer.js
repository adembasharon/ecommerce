import React from "react";
import "./Footer.css";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
const Footer=()=>{
    return(
        <div className="footer">
        <div className="footer-container">
            <div className="fashioned-footer">

<h1>Magoso Enterprises.</h1>
<p className="footer-paragraph">Buy the Best from the Best.We bring you quality products and remarkable Customer Experience.We value you</p>
<div className="footer-icons">
    <div className="facebook">
<a href="#"><FacebookOutlinedIcon /></a>
</div>
<div className="instagram">
<a href="#"><InstagramIcon /></a>
</div>
<div className="pinteres">
<a href="#"><PinterestIcon /></a>
</div>
<div className="twiter">
<a href="#"><TwitterIcon /></a>
</div>
</div>
</div>

    <div className="list-item ">
    <h2>Useful Link</h2>
    <ul>
        <li>
           <a href="#"> Home</a>
        </li>
        <li><a href="#">Man Fashion</a></li>
        <li><a href="#">Accesories</a></li>
        <li><a href="#">Order Tracking</a></li>
        <li><a href="#">WishList</a></li>
    </ul>
    </div>
    <div className="list-item">
    <ul>
        <li><a href="#">Cart</a></li>
        <li><a href="#">Woman Fashion</a></li>
        <li><a href="#">Accesories</a></li>
        <li><a href="#">My Account</a></li>
        <li><a href="#">Terms</a></li>
    </ul>
    </div>

<div className="list-item contact-list">
    <h2>Contact</h2>
<ul>
<li><span><LocationOnOutlinedIcon /></span><span>Great Street, Lavington,Nairobi.Ke</span></li>
    <li><span><PhoneOutlinedIcon /></span><span>+254 123 456 789</span></li>
    
    <li><span><EmailOutlinedIcon /></span><span>Order@Magoso.com</span></li>
</ul>
<div className="paybill">
<h3>Pay Through:</h3>
<img className="paybill-icons" src="Images/master-card.svg" />
<img className="paybill-icons" src="Images/M-PESA_LOGO-01.svg" />
<img className="paybill-icons" src="Images/visa.svg" />
</div>
</div>


</div>

<p className="enterprices">Magoso Enterprices &copy; 2021 -All Rights Reserved </p>
        </div>
        
    )
}




export default Footer