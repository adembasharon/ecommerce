import React, {useState} from "react";
import Nav from "../components/Nav/Nav";
import Announcements from "../components/Announcements/Announcements";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
const Singleproduct=()=>{
  const[color,setColor]=useState("Maroon")
  
  
  const [number, setNumber]=useState(1);
  const increase=()=>{
if(number<5){
  setNumber((previousNum)=>previousNum+1);}
  }

    const decrease=()=>{
if( number>1){
setNumber((previousNum)=>previousNum-1);}
    }
function handleColorHover(color){

  {
    setColor(color)
  }
  
}
    return(
        <>
<Nav />
<Announcements />
<div className="product-cover">

<div className="main-cover">
<img src="Images/denim-skirt.png" />


</div>



<div className="main-description">
    <div className="productName">
<h2 className="product-heading">Denim Skirt</h2>

</div>
<div className="productDescription">

<p>One of the earliest known cultures to have females wear clothing resembling miniskirts get your best fit now</p>
</div>

<div className="productSizes">
<p className='product-prize'>Ksh. 3,000</p>
<label>Size:</label>
<select name="size" id="cars">
<option selected disabled>size</option>
  <option value="small">S</option>
  <option value="small">M</option>
  <option value="large">L</option>
  <option value="extra-large">XL</option>
</select>
<p>Selected Color:<span style={{color:color}}>{color}</span></p>
<div className='choose-color'>


<div><p>Color:</p></div>
<div className="yellowcolor maroon-1">
<div className="maroon" onMouseOver={()=>handleColorHover("Maroon")} onClick={()=>setColor("Maroon")}></div>
</div>
<div className="yellowcolor yellow-1">
<div className="yellow" onMouseOver={()=>handleColorHover("Yellow")} onClick={()=>setColor("Yellow")}></div>
</div>
<div className="yellowcolor blue-1">
<div className="blue" onMouseOver={()=>handleColorHover("Blue")} onClick={()=>setColor("Blue")}></div>
</div>
</div>
</div>

<div className="add-remove">
    <div>
<RemoveOutlinedIcon onClick={decrease}/>
</div>
<div className="quantity-unit"><p>{number}</p></div>
<div>
<AddOutlinedIcon onClick={increase}/>
</div>
<div className='btn-color'>
<button>Add To Cart</button>
</div>
<div className='hearts'>
<div>
<FavoriteBorderOutlinedIcon />
</div>
<div>
<p>  Add To Wishlist</p>
</div>

</div>
</div>

</div>





</div>


<Newsletter />
<Footer />









        </>
    )
}
export default Singleproduct


