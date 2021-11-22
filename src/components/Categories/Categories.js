import React from "react";
import Categoriesitem from "../Categoryitem/Categoryitem";
import {categories} from '../../data'
import './Categories.css';
import Categoryitem from "../Categoryitem/Categoryitem";
const Categories=()=>{
    return(
        <div className="categorycontainer">
            {
        categories.map(item=>{
            return (
                
                <Categoryitem item={item}/>
                

            )

        })
    }
        </div>
    )
    }



export default Categories
