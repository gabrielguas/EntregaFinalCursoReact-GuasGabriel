import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

const CartWidget = () => {
    const { cartList } = useCartContext();

    const totalItems = cartList.reduce((total, product) => total + product.quantity, 0);

    return (
        <div style={{ cursor: 'pointer' }}>
            <Link className="nav-link" to="/cart">
                {totalItems === 0 ? '🛒Carrito vacío' : `🛒Ver compra (${totalItems} ${totalItems === 1 ? 'item' : 'items'})`}
            </Link>
        </div>
    );
};

export default CartWidget;
