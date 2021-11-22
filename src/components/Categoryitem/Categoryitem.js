import React from "react";
import "./Categoryitem.css"

const Categoryitem=({item})=>{
    return(
        <div className="categoryitemcontainer">
           <div className='categoryimage'>
               <img src={item.img}/>
               </div> 
               <div className="categoryinfo">
                   <h1>{item.title}</h1>
                   <button>Shop Now</button>
               </div>
        </div>

    )
}

export default Categoryitem