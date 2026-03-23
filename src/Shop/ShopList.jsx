import { Link } from "react-router-dom";

import appleImage from "../assets/apples.png";
import furnitureImage from "../assets/furniture.jpg";
import candyImage from "../assets/candy.jpeg";
import buyIcon from '../assets/buyIcon32.png';
import "./Shop.css";
//import { useState } from "react";
import { useCart } from '../Providers/CartProvider'


function Shop() {
    // fetch shop card list 

    // pay via paypal
    const { addItemToCart, shoppingCart } = useCart();

    // const [shoppingCart, setShoppingCart] = useState([]);

    /*
    const addItemToCart = (id, setName, cost) => {
        setShoppingCart((prevCart) => {
            // Check if the item is already in the cart
            const existingItem = prevCart.find(item => item.id === id);

            if (existingItem) {
                // If it exists, map through and update only that item's amount
                return prevCart.map(item =>
                    item.id === id
                        ? { ...item, amount: item.amount + 1 }
                        : item
                );
            }

            // If it's brand new, add it to the list
            return [...prevCart, { id, setName, cost, amount: 1 }];
        });
    };
    */

    // const totalItems = shoppingCart.reduce((sum, item) => sum + item.amount, 0);



    return (
        <>
            <h1 style={{ textAlign: "center" }}>Shop</h1>
            <div id="cart-box">
                <div className="cart-container">
                    <div style={{ padding: "0px 0px", margin: "0px 10px" }}>
                        <Link style={{ padding: "0px 0px", margin: "0px", color: "blue" }} to="/cart" >Open</Link>
                    </div>
                    <div style={{ padding: "0px", margin: "0px 0px " }}>
                        <img style={{ padding: 0, margin: 0, overflow: "hidde", width: "20px", height: "20px" }} src={buyIcon} alt="Your SVG" />
                    </div>
                    <div style={{ padding: "0px", margin: "0px 0px" }}>
                        <b><p></p></b>
                    </div>
                </div>
            </div>
            <ol style={{ display: "flex" ,flexFlow: "wrap", listStyle: "none", listStyle: "none", margin: "0px", padding: "0px", justifyContent:"center"}}>
                {shoppingCart.map((item) => (
                    <li className="card">
                        <div style={{ padding: "4px 4px 4px 4px", margin: "4px 4px 4px 4px" }}>
                            <h2 style={{ textAlign: "center" }}>{item.title}</h2>
                            <div>
                                {/* <p>{item.image}</p> */}
                                <img alt={item.imageAlt} src={item.image} width={"200px"} height={"200px"}>
                                </img>
                            </div>
                            <div>
                                <p>{item.description}.</p>
                                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                                    <div style={{ margin: "0px", padding: "0px" }}>
                                        <p>{item.cost}</p>
                                    </div>

                                    <button onClick={() => {
                                        console.log("click me")
                                        addItemToCart(item.id, item.title, item.cost)
                                    }} className="shop-buy-button" >Buy Item</button>

                                    {/* <div onClick={() => { console.log("Place iten in shopping cart") }}>
                                            <img src={buyIcon} alt="Your SVG" />
                                        </div> */}
                                </div>
                            </div>
                        </div>
                    </li>
                ))}

            </ol>
        </>
    );
}

export default Shop;