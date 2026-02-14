import './ProductCard.css'
export default function ProductCard({image , name, price}){
    return(
        <div className="card">
            <img src={image} alt={name}/>
            <h3>{name}</h3>
            <p>₹{price}</p>
            <button>Add to Cart</button>
        </div>
    )
}