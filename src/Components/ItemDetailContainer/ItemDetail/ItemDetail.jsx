import React from 'react';
import ItemCounter from '../../Counter/ItemCounter';
import './ItemDetailStyle.css';
import { useCartContext } from '../../../context/CartContext';
import Swal from 'sweetalert2';

export const ItemDetail = ({ product }) => {
  const { addProduct, cartList } = useCartContext();

  const onAdd = (count) => {
    addProduct({ ...product, quantity: count });

    Swal.fire({
      title: 'Producto agregado',
      text: `${count} ${count === 1 ? 'unidad' : 'unidades'} de ${product.title} se han agregado al carrito 😎.`,
      icon: 'success',
      confirmButtonText: 'Ok',
    });
  };

  // Calcula la cantidad de este producto en el carrito
  const itemCountInCart = cartList.reduce((total, item) => {
    if (item.id === product.id) {
      return total + item.quantity;
    }
    return total;
  }, 0);

  return (
    <div className="item-detail-container">
      <h2>Vista de detalle</h2>
      <div className="item-detail">
        <img className="item-image" src={product.imageUrl} alt="imagen producto" />
        <div className="item-info">
          <p className="item-description">Descripción: {product.description}</p>
          <p className="item-price">Precio: ${product.price}</p>
          {product.stock > 0 ? (
            <>
              <p className="item-stock">Stock disponible: {product.stock}</p>
              <div className="item-counter">
                <ItemCounter initial={1} stock={product.stock} onAdd={onAdd} />
              </div>
              <p className="item-quantity-in-cart">Cantidad en el carrito: {itemCountInCart}</p>
            </>
          ) : (
            <p className="item-out-of-stock">Sin stock por el momento</p>
          )}
        </div>
      </div>
    </div>
  );
};
