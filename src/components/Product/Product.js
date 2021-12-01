import React from "react";
import "./Product.css"
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
const Product=({item})=>{
    return(
        <div className="icon-container">
           <div className="imege-view">
               <img src={item.img}/>
               <div className="img-viewer">

</div>
               </div> 

      
               <div className="icons" >
                   <div className="shop-icon">
                   <AddShoppingCartOutlinedIcon />
                   </div>
                   <div className="shop-icon">
               <FavoriteBorderIcon />
               </div>
               <div className="shop-icon">
               <SearchIcon />
               </div>
               </div>
               
               </div>




            
    )}








export default Product