import { Link } from "react-router-dom";

import appleImage from "../assets/apples.png";
import furnitureImage from "../assets/furniture.jpg";
import candyImage from "../assets/candy.jpeg";
import buyIcon from '../assets/buyIcon32.png';
import "./Shop.css";
//import { useState } from "react";
import { useCart } from '../Providers/CartProvider'
import { useState } from "react";


function Shop() {
    // fetch shop card list 

    // pay via paypal
    const { addItemToCart, shoppingCart } = useCart();
    const [inventory, setInventory] = useState(() => {
        return [{
            id: "23",
            title: "Fruits",
            image: appleImage,
            imageAlt: "Image of an fruit",
            description: "Learn what different ...",
            cost: 0.50
        },
        {
            id: "24",
            title: "Candys",
            image: candyImage,
            imageAlt: "Image of an candy",
            description: "Learn what different ...",
            cost: 1.00
        },
        {
            id: "25",
            title: "Furniture",
            image: furnitureImage,
            imageAlt: "Image of an furniture",
            description: "Learn what different ...",
            cost: 3.50
        }]
    }
    );



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
                    <div style={{ padding: "0px", margin: "0px", color: "black" }}>
                        <p>{
                            //console.log(Object.values(shoppingCart))
                            Object.values(shoppingCart).reduce((acc, item) => {
                                return acc + item.length;
                            }, 0)

                        }</p>
                    </div>
                </div>
            </div>

            <ol style={{ display: "flex", flexFlow: "wrap", listStyle: "none", listStyle: "none", margin: "0px", padding: "0px", justifyContent: "center" }}>
                {inventory.map((item) => (
                    <li key={item.id} className="card">
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
                                        <p> ${(item.cost).toFixed(2)}</p>
                                    </div>

                                    <button onClick={() => {
                                      // console.log(item);
                                        addItemToCart(item.id, item)
                                    }} className="shop-buy-button">Buy Item</button>

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