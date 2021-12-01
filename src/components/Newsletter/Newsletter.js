import React from "react";
import "./Newsletter.css"
import SendIcon from '@mui/icons-material/Send';
const Newsletter=()=>{
    return(
        <div className="text-center">
          <div>
<h1 className="heading">NewsLetter</h1>
<p className="paragraph">singUp for our newsLetter to be notified on new promotion and sales </p>
</div>
  <div className="input-item">
    <div>
    <input  type="text" placeholder="Enter Email Adress" />
    </div>
    <button className="sendicon"><SendIcon /></button>
    </div>
  </div>
  
    )

}




export default Newsletter