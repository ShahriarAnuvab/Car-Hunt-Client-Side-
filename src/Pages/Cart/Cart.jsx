import { useLoaderData } from "react-router-dom";
import CartItems from "./CartItems";

import { useState } from "react";

const Cart = () => {
  const cart = useLoaderData();
  const[cartItem, setCartItem] = useState(cart)

  

  return (
    <div>
      <div className="mx-auto container">
        <h1 className="text-3xl ">Added Items: {cart.length}</h1>
        <div>
          {cartItem.length === 0 ? (
            <div className="text-3xl text-center font-semibold my-10">
              <h1 >No Cars Added</h1>
            </div>
          ) : (
            <div>
              {cartItem.map((item) => (
                <CartItems key={item._id} item={item} cartItem={cartItem} setCartItem={setCartItem}></CartItems>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
  
};

export default Cart;
