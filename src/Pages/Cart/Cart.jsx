import CartItems from "./CartItems";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth Provider/AuthProvider";
import axios from "axios";

const Cart = () => {
  const { user } = useContext(AuthContext);

  const [cartItem, setCartItem] = useState([]);
  console.log(cartItem);
  const url = `http://localhost:5000/cart?userEmail=${user.email}`;
  useEffect(() => {
    // fetch(`http://localhost:5000/cart?userEmail=${user.email}`)
    //   .then((res) => res.json())
    //   .then((data) => setCartItem(data));
    axios
      .get(url, {
        withCredentials: true,
      })
      .then((data) => {
        setCartItem(data.data);
      });
  }, [url, user.email]);

  return (
    <div>
      <div className="mx-auto container">
        <h1 className="text-3xl ">Added Items: {cartItem.length}</h1>
        <div>
          {cartItem.length === 0 ? (
            <div className="text-3xl text-center font-semibold my-10">
              <h1>No Cars Added</h1>
            </div>
          ) : (
            <div>
              {cartItem.map((item) => (
                <CartItems
                  key={item._id}
                  item={item}
                  cartItem={cartItem}
                  setCartItem={setCartItem}
                ></CartItems>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
