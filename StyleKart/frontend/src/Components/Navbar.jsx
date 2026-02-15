import { useState } from "react";
import './Navbar.css'

export default function Navbar(){

 const [open,setOpen] = useState(false);

 return(
 <nav>

    <h2>Velouré</h2>

    
    <div className={`links ${open ? "show" : ""}`}>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
    </div>

   
    <div className="actions">
        <button>Cart</button>
        <button>Login</button>
    </div>

   
    <div className={`hamburger ${open ? "active":""}`}
         onClick={()=>setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
    </div>

</nav>
 );
}
