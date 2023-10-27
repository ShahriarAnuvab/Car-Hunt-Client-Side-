import PropTypes from "prop-types";
const CartItems = ({ item }) => {

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl gap-10 my-10">
        <figure className=" shadow-xl ">
          <img src={item.image} alt="car" className="w-[500px] h-[300px]" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.car}</h2>

          <h2 className=""> ${item.price}</h2>
          <h2 className="">{item.description}</h2>
        </div>
      </div>
    </div>
  );
};

CartItems.propTypes = {
  item: PropTypes.object,
};
export default CartItems;
