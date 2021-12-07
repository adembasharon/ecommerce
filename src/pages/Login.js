import {useState} from "react";
import React from "react";
import Nav from"../components/Nav/Nav";
import Announcements from "../components/Announcements/Announcements";
import Footer from "../components/Footer/Footer";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
// import {Link} from "react-router-dom"
import { visuallyHidden } from "@mui/utils";
const Login=()=>{
    const [values, setValues]=useState({
password:"",
showPassword:false
    }
);


    const togglePassWordVissibility=()=>{
        setValues({showPassword:!values.showPassword})
    };
    return(
        <>

        <div>
            < Nav/>
            < Announcements />
            <div className='login-page'>
            <div className="login-container">
            <div className='login-content'>
<h1 className='login-heading'>LOGIN</h1>
<div className='login-email-adress'>
    
<input className="email-adress emailPassword" type="text" placeholder="" />
<label for="email" className='inputLabel'>Email</label>
</div>
<div className='visibility'>
    <div className="password-container">
    
<input className='password emailPassword' type={values.showPassword ? "text":'password'} placeholder=''/>
<label className='inputLabel'>Password</label>
</div>
<div className='visibility-icon'>
<div className='view' onClick={togglePassWordVissibility}>
    {values.showPassword?<VisibilityIcon /> :<VisibilityOffIcon />}
</div>
</div>
</div>
<div className="loginbtn">
<input className='login' type="button" value="Login" />
</div>
<div className="check">
<div>
<input type="checkbox" />
<label>Remember me</label>
</div>
<div>
<p><a href="#"></a> Forgot Your Password</p>

</div>
</div>
<div className='news-account'>
<p className='news'>New to Magoso Enterprices?</p>

<button>Create Account</button>
</div>
<p className='coppyright'>Magoso Enterprices &copy; 2021</p>
<div className='emptyDiv'></div>
</div>


  



<div className='login-img loginEnterprice'>
    <div>
    <h2 className='login-h1'>WELCOME TO:</h2>
    </div>
    <div>
    <h1 className='login-h2'>Magoso Enterprises.</h1>
    </div>
    <div>
    <p className='login-p'>The Home of Reliable Shopping</p>
    </div>
   
</div>
</div>
</div>

<Footer />
           </div>
           </>
    )
}




export default Login