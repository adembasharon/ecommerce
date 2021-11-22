import React from "react";
import "./Product.css"
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Product=({item})=>{
    return(
        <div className="icon-container">
           <div className="imege-view">
               <img src={item.img}/>
               
            <div className="img-viewer">

               </div>
               </div> 
               <div className="icons" >
                   <div>
                   <ShoppingCartIcon />
                   </div>
                   <div>
               <FavoriteBorderIcon />
               </div>
               <div>
               <SearchIcon />
               </div>
               </div>
               </div>




            
    )}








export default Product