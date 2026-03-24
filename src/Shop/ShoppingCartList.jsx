

import { useCart } from '../Providers/CartProvider'
import { useLocation } from "react-router-dom";


function ShoppingCart() {
    // const location = useLocation();
    // const data = location.state;
    const { clearCart, addItemToCart, removeItemFromCart, shoppingCart } = useCart();
    console.log("---")
    console.log(Object.values(shoppingCart));
    console.log(shoppingCart["24"])

    const grandTotal = Object.values(shoppingCart)
        .flat()
        .reduce((sum, item) => sum + (item.cost || 0), 0).toFixed(2);

    return (<>
        <h1>Cart</h1>
        <ol style={{display:"flex", margin: "0px", padding: "0px", flexFlow:"wrap", justifyContent:"center"}}>
            {
                Object.keys(shoppingCart).map((key) =>
                    <li key={key} style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}>
                        <div style={{ display: "flex", margin: 0, padding: 0 }}>
                            <div style={{ display: "flex", margin: 0, padding: "10px" }}>
                                <img width="100px" height="100px" src={`${shoppingCart[key][0].image}`} />
                            </div>
                            <div style={{ display: "flex", margin: 0, padding: 0 }}>
                                <div>
                                    <p>Item: {shoppingCart[key][0].title}</p>
                                    <p>Cost: ${shoppingCart[key][0].cost.toFixed(2)}</p>
                                    <p>Number of items: {shoppingCart[key].length}</p>

                                </div>
                                <div style={{display:"flex", alignContent:"center", flexDirection:"column", justifyContent:"center"}}>
                                    <button>
                                        remove
                                    </button>
                                    <div style={{ display: "flex", alignContent: "", justifyContent: "" }}>
                                        <button onClick={() => removeItemFromCart(shoppingCart[key][0].id)}>-</button>
                                        <button onClick={() => addItemToCart(shoppingCart[key][0].id, shoppingCart[key][0])}>+</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </li>
                )}
        </ol>
        <p>Total: $ {grandTotal}</p>

        <button>Order</button>
        <button onClick={() => clearCart()}>Clear Cart</button>


    </>)
}

export default ShoppingCart;