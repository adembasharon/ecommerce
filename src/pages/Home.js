import React from "react";
import Announcements from "../components/Announcements/Announcements";
import Nav from "../components/Nav/Nav"
import Slider from "../components/Slider/Slider"
import Categories from"../components/Categories/Categories"
import Products from"../components/Products/Products"
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
const Home=()=>{
    return(
        <div>
<Announcements />
<Nav />
<Slider />
< Categories />
<Products />
<Newsletter />
<Footer />
</div>

    )
}
export default Home;



