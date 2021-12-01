
import React, {useState} from "react";
import Nav from"../components/Nav/Nav";
import Announcements from "../components/Announcements/Announcements";
import Footer from "../components/Footer/Footer";
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import ClearIcon from '@mui/icons-material/Clear';
const Singup=()=>{
    const[password,setPassword]=useState("");
    const[confirmPassword,setConfirmPassword]=useState("");

function onPasswordChange(e) {
    const passwordValue=e.target.value;
    setPassword(passwordValue);
    
}
function onConfirmPassword(e) {
  const confirmedValue=e.target.value; 
  setConfirmPassword(confirmedValue);
 

}

    return(
<div>


<Nav />
<Announcements />
<form>
      <div className="singup-container" >
        <div className="signup-img">
            <p>Welcom To our shop feel free to shop and ask for help your comments will be important to us</p>
        </div>
        <div className="singup-page">
    <div>
<label>Sign Up</label>
</div>
<div className="sign-up">
<div>
<input type="text" placeholder="Enter first name" />
</div>
<div>
<input  type="text" placeholder="Enter last name" />
</div>
</div>
<div className="signup-details">
<input className="sign-up-details" type="text" placeholder="User Name" />
</div>

<div className="signup-details">
<input className="sign-up-details" type="text" placeholder="Enter Your Email" />
</div>
{/* <label>Password</label> */}
<div className="signup-details">
<input onChange={(e)=>onPasswordChange(e)} className="sign-up-details" type="text" placeholder="Enter your Password " />
</div>
<div >
<input onChange={(e)=>onConfirmPassword(e)} className="sign-up-details" type="text" placeholder="Confirm your password" />
</div>
<div>
    

 { 

 
   password===confirmPassword?<CheckOutlinedIcon style={{color:"green"}}/>:<ClearIcon style={{color:"red"}}/>
 
 
 

 
 }
    

</div>
<div className="signup-footer">
    <div>
<button>SingUp</button>
</div>

<div>
<p>You have an account? <a href="#">Singin</a></p>
</div>
</div>
</div>
</div>
</form>
    <Footer />
</div>


    )
}









export default Singup
