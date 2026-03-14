

import {useCart} from '../Providers/CartProvider'
import { useLocation } from "react-router-dom";

function ShoppingCart(){
    // const location = useLocation();
    // const data = location.state;
    const { shoppingCart} = useCart();
  
 return(<div className="content">
    
    <h1>Shopping card</h1>
    <ol>
    {
        shoppingCart.map((item) =>
        <li  key={item.id}>Item: {item.setName}  Amount: {item.amount}</li>)
    }
    </ol>


    </div>)
}

export default ShoppingCart;