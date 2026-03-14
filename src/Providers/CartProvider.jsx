import { createContext, useContext, useState, useEffect } from 'react';

import appleImage from "../assets/apples.png";
import furnitureImage from "../assets/furniture.jpg";
import candyImage from "../assets/candy.jpeg";


const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [shoppingCart, setShoppingCart] = useState(() => {
        // Optional: Load cart from localStorage on startup
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [{
            id: "23",
            title: "Fruits",
            image: appleImage,
            imageAlt: "Image of an fruit",
            description: "Learn what different ...",
            cost: "$0.50"
        },
        {
            id: "24",
            title: "Candys",
            image: candyImage,
            imageAlt: "Image of an candy",
            description: "Learn what different ...",
            cost: "$1.00"
        },
        {
            id: "25",
            title: "Furniture",
            image: furnitureImage,
            imageAlt: "Image of an furniture",
            description: "Learn what different ...",
            cost: "$3.50"
        }];
    });

    //const totalItems = () =>  shoppingCart.reduce((sum, item) => sum + item.amount, 0);


    // Save to localStorage whenever cart changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(shoppingCart));
    }, [shoppingCart]);

    const addItemToCart = (id, setName, cost) => {
        setShoppingCart((prev) => {
            const exists = prev.find(item => item.id === id);
            if (exists) {
                return prev.map(item =>
                    item.id === id ? { ...item, amount: item.amount + 1 } : item
                );
            }
            return [...prev, { id, setName, cost, amount: 1 }];
        });
    };

    const removeItem = (id) => {
        setShoppingCart(prev => prev.filter(item => item.id !== id));
    };

    const clearCart = () => setShoppingCart([]);

    return (
        <CartContext value={{ shoppingCart, addItemToCart, removeItem, clearCart }}>
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

