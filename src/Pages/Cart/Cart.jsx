import { useLoaderData } from "react-router-dom";
import CartItems from "./CartItems";

const Cart = () => {
  const cart = useLoaderData();

  return (
    <div>
      <div className="mx-auto container">
        <h1 className="text-3xl ">Added Items: {cart.length}</h1>
        <div>
          {cart.length === 0 ? (
            <div className="text-3xl text-center font-semibold my-10">
              <h1 >No Cars Added</h1>
            </div>
          ) : (
            <div>
              {cart.map((item) => (
                <CartItems key={item._id} item={item}></CartItems>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
