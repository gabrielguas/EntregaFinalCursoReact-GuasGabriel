import { createContext, useContext } from "react";
import { useState } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addProduct = (newProduct) => {
        const existingProductIndex = cartList.findIndex(
            (product) => product.id === newProduct.id
        );

        if (existingProductIndex !== -1) {
            const updatedCartList = [...cartList];
            updatedCartList[existingProductIndex].quantity += newProduct.quantity;
            setCartList(updatedCartList);
        } else {
            setCartList([...cartList, newProduct]);
        }
    };

    const deleteCart = () => {
        setCartList([]);
    };

    const totalPrice = cartList.reduce(
        (total, product) => total + product.price * product.quantity,
        0
    );

    const removeProduct = (productId) => {
        const updatedCartList = cartList.filter((product) => product.id !== productId);
        setCartList(updatedCartList);
    };
    return (
        <CartContext.Provider value={{ cartList, addProduct, deleteCart, totalPrice,removeProduct }}>
            {children}
        </CartContext.Provider>
    );
};
