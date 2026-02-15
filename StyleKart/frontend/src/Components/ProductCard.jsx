import './ProductCard.css'
import { Link } from "react-router-dom";
export default function ProductCard({id,image , name, price}){
    return(
        <div className="card">
            <Link to={`/product/${id}` }className="cards">
            <img src={image} alt={name}/>
            <h3>{name}</h3>
            <p>₹{price}</p>
            <button>Add to Cart</button>
            </Link>
        </div>
    )
}