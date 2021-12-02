import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home"
import Cart from "./pages/Cart"
function App() {
  return (
<Router>
  <Routes>
    <Route path="/" element={<Home/>}/>

    <Route path="Cart" element={<Cart/>}/>
  </Routes>
  </Router>



  );
}

export default App;
