import React from "react";
import Products from "../components/Products/Products";
import Nav from "../components/Nav/Nav";
import Announcements from "../components/Announcements/Announcements";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
const Productpage=()=>{
return(
<div>
    <Nav/>
    <Announcements />
    <div className="footer-holder">
        <h2 className="dreses">Dresses</h2>
    
        <div className="filter-size">
<div className="filtered-product">
        <div>
        <label for="cars">Filter Product: Size</label>
 </div> 
<div>
<select name="size" id="cars">
<option selected disabled>size</option>
  <option value="small">S</option>
  <option value="small">M</option>
  <option value="large">L</option>
  <option value="extra-large">XL</option>
</select>
</div>

<div>
<label for="cars">color:</label>
<select name="color">
<option selected disabled>color</option>
  <option value="white">White</option>
  <option value="blue">Blue</option>
  <option value="black">Black</option>
  <option value="Red">Red</option>
</select>
</div>
</div>

<div>
<label for="cars">Sort Product:Price</label>

<select name="Price" id="cars">
<option selected disabled>Price</option>
  <option value="highest to lowest">Highest to lowest</option>
  <option value="lowest to highest">Lowest to highest</option>
</select>
</div>
</div>
    </div>
< Products />
<Newsletter />
<Footer />


</div>
)



}
export default Productpage
