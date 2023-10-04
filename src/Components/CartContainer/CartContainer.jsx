import React, { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import './CartContainer.css';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { getFirestore, updateDoc, doc } from 'firebase/firestore';

const CartContainer = () => {
    const { cartList, deleteCart, totalPrice, removeProduct } = useCartContext();
    const db = getFirestore();
    const [userInfo, setUserInfo] = useState({ firstName: '', lastName: '', email: '' });

    const handleRemoveItem = (productId) => {
        Swal.fire({
            title: '¿Eliminar producto?',
            text: '¿Estás seguro de que deseas eliminar este producto del carrito?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                removeProduct(productId);
                Swal.fire('Producto eliminado', 'El producto ha sido eliminado del carrito.', 'success');
            }
        });
    };

    const handleEmptyCart = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: 'Esta acción vaciará tu carrito de compras.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, vaciar carrito',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                deleteCart();
                Swal.fire('¡Carrito vaciado!', 'Tu carrito ha sido vaciado.', 'success');
            }
        });
    };

    const handleCheckout = async () => {
        const purchasedProducts = [];

        cartList.forEach((prod) => {
            purchasedProducts.push(prod.id);
        });

        const { value: formValues, isConfirmed } = await Swal.fire({
            title: 'Finalizar Compra',
            html: `
                <input id="swal-input1" class="swal2-input" placeholder="Nombre" value="${userInfo.firstName}" required>
                <input id="swal-input2" class="swal2-input" placeholder="Apellido" value="${userInfo.lastName}" required>
                <input id="swal-input3" class="swal2-input" placeholder="Correo Electrónico" value="${userInfo.email}" required>
                <br>
                <p>Elementos Comprados: ${purchasedProducts.join(', ')}</p>
            `,
            focusConfirm: false,
            allowOutsideClick: false,
            showCancelButton: true,
            confirmButtonText: 'Finalizar Compra',
            cancelButtonText: 'Cancelar Compra',
            preConfirm: () => {
                const firstName = document.getElementById('swal-input1').value;
                const lastName = document.getElementById('swal-input2').value;
                const email = document.getElementById('swal-input3').value;

               
                if (!firstName || !lastName || !email) {
                    Swal.showValidationMessage('Por favor, completa todos los campos.');
                } else if (!isValidEmail(email)) {
                    Swal.showValidationMessage('Por favor, ingresa un correo electrónico válido.');
                } else {
                    return [firstName, lastName, email];
                }
            },
        });

        
        if (isConfirmed) {
            const updatePromises = [];

           
            cartList.forEach((prod) => {
                const productRef = doc(db, 'products', prod.id);
                const newStock = prod.stock - prod.quantity;
                const updatePromise = updateDoc(productRef, { stock: newStock });
                updatePromises.push(updatePromise);
            });

            try {
                await Promise.all(updatePromises);

                
                if (formValues) {
                    const [firstName, lastName, email] = formValues;
                    setUserInfo({ firstName, lastName, email });
                }

                Swal.fire('¡Compra finalizada!', 'Gracias por tu compra, nos comunicaremos.', 'success');

                deleteCart();
            } catch (error) {
                console.error('Error al actualizar el stock:', error);
            }
        } else {
            Swal.fire('Compra cancelada', 'No se ha finalizado la compra.', 'info');
        }
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <div className="cart-container">
            <h2>
                <FontAwesomeIcon icon={faShoppingCart} /> Carrito de Compras
            </h2>
            {cartList.length === 0 ? (
                <div className="empty-cart">
                    <FontAwesomeIcon icon={faShoppingCart} className="empty-cart-icon" />
                    <p>Tu carrito está vacío</p>
                </div>
            ) : (
                <div>
                    {cartList.map((prod) => (
                        <div key={prod.id} className="cart-item">
                            <img className="item-image" src={prod.imageUrl} alt="imagen producto" />
                            <div className="item-details">
                                <p className="item-title">{prod.title}</p>
                                <p className="item-price">Precio: ${prod.price}</p>
                                <p className="item-quantity">Cantidad: {prod.quantity}</p>
                            </div>
                            <button onClick={() => handleRemoveItem(prod.id)} className="cart-item-remove">
                                Eliminar
                            </button>
                        </div>
                    ))}
                    <div className="cart-total">
                        <p>Total: $ {totalPrice}</p>
                    </div>
                    <div className="cart-buttons">
                        <button onClick={handleEmptyCart} className="cart-button empty-cart">
                            Vaciar Carrito
                        </button>
                        <button onClick={handleCheckout} className="cart-button checkout">
                            Finalizar Compra
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartContainer;
