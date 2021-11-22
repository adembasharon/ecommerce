import React from "react";
import "./Products.css";
import Product from "../Product/Product";
import {popularProducts} from"../../data"

const Products=()=>{
    return(
        <div className="product-content">
            {
        popularProducts.map(item=>{
            return (
                <div className="product-image">
                <Product item={item}/>
                </div>


            )

        })
    }
        </div>
    )
    }













export default Products