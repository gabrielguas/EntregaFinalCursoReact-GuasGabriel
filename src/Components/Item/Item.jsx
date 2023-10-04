import { Link } from "react-router-dom";
import './Item.css';

const Item = ({ product }) => {
  return (
    <div className="card">
      <img src={product.imageUrl} className="card-img-top" alt="imagen" />
      <div className="card-body">
        <h3 className="card-title">{product.title} </h3>
        <h5 className="card-title">{product.description}</h5>
        <p className="card-text">Precio: ${product.price}</p>
        <p className="card-text">Stock: {product.stock}</p>
      </div>
      <div className="card-footer">
        <Link to={`/detalle/${product.id}`}>
          <button className="btn btn-outline-dark">Detalle</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
