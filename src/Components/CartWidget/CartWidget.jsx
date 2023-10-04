import React from 'react';
import { Link } from 'react-router-dom';

const CartWidget = () => {

    return (
        <div style={{ cursor: 'pointer' }}>
            <Link className="nav-link" to="/cart">
                🛒Ver compra
            </Link>
        </div>
    );
};

export default CartWidget;
