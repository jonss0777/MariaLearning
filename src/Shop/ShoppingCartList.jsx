

import { useCart } from '../Providers/CartProvider'
import { useLocation } from "react-router-dom";
import x_icon from  "../assets/x-exit.svg";
import plusIcon from "../assets/plus.svg";
import minusIcon from "../assets/minus.svg";
import './Shop.css';

function ShoppingCart() {
    // const location = useLocation();
    // const data = location.state;
    const { addItemToCart, removeItemFromCart, shoppingCart, removeProduct } = useCart();
    //console.log("---")
    //console.log(Object.values(shoppingCart));
    //console.log(shoppingCart["24"])

    const grandTotal = Object.values(shoppingCart)
        .flat()
        .reduce((sum, item) => sum + (item.cost || 0), 0).toFixed(2);

    return (<>
        <h1>Cart</h1>
        <ol style={{ display: "flex", margin: "0px", padding: "0px", flexDirection: "column", justifyContent: "center", flexDirection: "column", listStylePosition: "inside" }}>
            {
                Object.keys(shoppingCart).map((key) =>
                    shoppingCart[key].length > 0 && (
                        <li key={key} style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}>
                            <div className="card" style={{ display: "flex", margin: "10px", padding: "10px 10px 10px 10px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", borderRadius: "15px" }}>
                                <div style={{ display: "flex", margin: "10px", padding: "10px" }}>
                                    <img width="100px" height="100px" src={`${shoppingCart[key][0].image}`} />
                                </div>
                                <div style={{ display: "flex", margin: 0, padding: 0 }}>
                                    <div style={{ display: "flex", flexDirection: "column", margin: "10px", padding: "0", justifyContent: "center" }}>
                                        <p style={{ padding: "0", margin: "0" }}>Item: {shoppingCart[key][0].title}</p>
                                        <p style={{ padding: "0", margin: "0" }}>Cost: ${shoppingCart[key][0].cost.toFixed(2)}</p>
                                        <p style={{ padding: "0", margin: "0" }}>Number of items: {shoppingCart[key].length}</p>

                                    </div>
                                    <div style={{ display: "flex", alignContent: "flex-end", flexDirection: "column", justifyContent: "center", margin: "0px 0px 0px 0px", padding: 0 }}>
                                        <div style={{ display: "flex", margin: "0px", padding: "0", justifyContent: "space-around", alignContent: "center" }}>
                                            <button id="subtract-button" onClick={() => removeItemFromCart(shoppingCart[key][0].id)}>
                                                {/* <img src={minusIcon} width="15px" height="15px"></img> */}-
                                                </button>
                                            <button id="add-button" onClick={() => addItemToCart(shoppingCart[key][0].id, shoppingCart[key][0])}>
                                                {/* <img src={plusIcon}  width="15px" height="15px" ></img> */}+
                                            </button>
                                        </div>
                                    </div>

                                </div>
                                <div onClick={() => removeProduct(shoppingCart[key][0].id)} id="x-shopping-cart-button" >
                                    <img widtd="20px" height="20px" src={x_icon} alt="Icon" />
                                </div>
                            </div>
                        </li>
                    )
                )}
        </ol>
        
        <p>Total: $ {grandTotal}</p>
        
        {/* <p>Deliver To:</p>
        <form>
            
            <div>
                <label>Adress:</label>
                <input  type='text'></input>
            </div>
            <div>
                <label>City</label>
                <input type='text'></input>
            </div>
            <div>
                <label>State:</label>
                <input  type='text'></input>
            </div>
            <div>
                <label>Country</label>
                <input type='text'></input>
            </div>
        </form> */}

        <button id="order-button" onClick={() => {

            console.log("order was sent")
            console.log(shoppingCart)

        }}>Order</button>
        {/* <button id="clear-cart-button" onClick={() => clearCart()}>Clear Cart</button> */}


    </>)
}

export default ShoppingCart;