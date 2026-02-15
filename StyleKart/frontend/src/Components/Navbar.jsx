import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import { CartContext } from "../context/CartContext";
export default function Navbar(){

 const [open,setOpen] = useState(false);
const { cart } = useContext(CartContext);

 return(
    <>
 <nav>

   <h2>Velouré</h2>

    
    <div className={`links ${open ? "show" : ""}`}>
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/kids">Kids</Link>
    </div>

   
    <div className="actions">
          
<Link to="/cart"><button>Cart ({cart.length})</button></Link>
        <button>Login</button>
    </div>

   
    <div className={`hamburger ${open ? "active":""}`}
         onClick={()=>setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>

</nav>
 <Link to="/cart" className="mobile-cart-btn">
  🛒
  <span className="cart-count">{cart.length}</span>
</Link>
             </>
 );
}
