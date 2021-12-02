import React ,{useState} from "react";
import { Link } from "react-router-dom";
import Nav from"../components/Nav/Nav";
import Announcements from "../components/Announcements/Announcements";
import Footer from "../components/Footer/Footer"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const Cart=()=>{
const[number,setNumber]=useState(1)
const increase=()=>{
    if(number<5){
        setNumber((previousNum)=>previousNum+1)}
}

const decrease=()=>{
    if(number>1){
        setNumber((previousNum)=>previousNum-1)}
}


    return(
        <div>
<Nav />
<Announcements />
<div className="cart-container">
<div className="part1">
<div className="cart-images1">
    <div  className="cart-part1 cartborder">
    <div>
<h3>You Cart</h3>
<div className="cart-images">
<img src="https://cdn.shopify.com/s/files/1/0101/4832/products/Angela_Natural_Tee.png?v=1606780388"/>
</div>
</div>

<div className="vintage-price">
    <div>
<p>Mens Jake Vintage Crusher </p>
<div className="add-remove">
<div className="round"><p></p></div>
<div onClick={decrease}>
<RemoveIcon />
</div>
<div  className="cart-paragraph"><p>{number}</p></div>
<div onClick={increase} className="cart-add">
<AddIcon />
</div>
</div>
</div>

<div>
    <div className="clear-icon">
        <div className="claer-cart">
<div><ClearIcon /> </div>
<div><p>1</p></div>

<div>
<p>Ksh. 3,000</p>
</div>
</div>
</div>
<p className="cart-delete"> <DeleteOutlineIcon />Remove item</p>
</div>
</div>

</div>
</div>


<div className="cart-images1">
    <div  className="cart-part1">
    <div>
<div className="cart-images">
<img src="https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png"/>
</div>
</div>

<div className="vintage-price">
    <div>
<p>Rocket Vintage Chill Cap  </p>
<div className="add-remove">
<div className="round-cape"><p></p></div>
<div className="cart-minnimize" onClick={decrease}>
<RemoveIcon />
</div>
<div className="cart-paragraph"><p>{number}</p></div>
<div className="cart-add" onClick={increase}>
<AddIcon />
</div>

</div>
</div>
<div>
    <div className="clear-icon">
        <div  className="claer-cart">
<div><ClearIcon /></div>
<div><p>1</p></div>

<div>
<p>Ksh. 4,000</p>
</div>
</div>
</div>
<p className="cart-delete"> <DeleteOutlineIcon />Remove item</p>
</div>
</div>

</div>
</div>
<div className="shopping-btn">
<button className="btn">CONTINUE SHOPPING</button>
</div>
</div>

<div className="cart-order">
<h2>Your Order</h2>
<div className="discounts">
    <div>
    <p>Subtotal</p>
    </div>
    <div>
        <p>Ksh 4,000</p>

        </div>
</div>
<div className="discounts">
    <div>
    <p>Discount</p>
    </div>
    <div>
        <p>-</p>

        </div>
</div>

<div className="discounts shipping-price" >
    <div>
    <p>Shipping</p>
    </div>
    <div>
        <p>-</p>

        </div>
</div>
<div className="discounts">
    <div>
    <p>Total</p>
    </div>
    <div>
        <p>Ksh 4,000</p>

        </div>
</div>
<div>
    <button>CHECKOUT</button>
</div>
</div>


</div>





<Footer />


        </div>
    )
}



export default Cart