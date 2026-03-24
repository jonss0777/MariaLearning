import { createContext, useContext, useState, useEffect } from 'react';

import appleImage from "../assets/apples.png";
import furnitureImage from "../assets/furniture.jpg";
import candyImage from "../assets/candy.jpeg";


const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [shoppingCart, setShoppingCart] = useState(() => {
        try {
            const savedCart = localStorage.getItem('cart');
            // 1. Check if it exists
            // 2. Parse it
            // 3. Ensure the parsed result is actually an array
            const parsedCart = savedCart ? JSON.parse(savedCart) : null;
            return Array.isArray(parsedCart) ? parsedCart : {};
        } catch (error) {
            console.error("Failed to parse cart from localStorage:", error);
            return {}; // Fallback to empty array on any error
        }
    });

    //const totalItems = () =>  shoppingCart.reduce((sum, item) => sum + item.amount, 0);


    // Save to localStorage whenever cart changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(shoppingCart));
    }, [shoppingCart]);


    const addItemToCart = (id, item) => {
        console.log(item)
        setShoppingCart((prev) => {
            const existingItems = prev[id] || [];

            return {
                ...prev,
                [id]: [
                    ...existingItems,
                    item
                ]
            };
        });
       
    };

   
    const removeItemFromCart = (id) => {
        setShoppingCart((prev) => {
            const existingItems = prev[id] || [];

            if (existingItems.length === 0) return prev;

            const updatedItems = [...existingItems];
            updatedItems.pop();

            return {
                ...prev,
                [id]: updatedItems
            };
        });
    };

    const clearCart = () => setShoppingCart({});

    return (
        <CartContext value={{ shoppingCart, addItemToCart, removeItemFromCart, clearCart }}>
            {children}
        </CartContext>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

