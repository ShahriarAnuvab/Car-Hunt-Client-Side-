import PropTypes from "prop-types";
import Swal from "sweetalert2";
const CartItems = ({ item }) => {

  const handleDelte=(_id)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount> 0) {
              Swal.fire("Deleted!", "Your Car has been deleted.", "success");

            }

     
          });
      }
    });
  }
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
          <div className="flex justify-end">
          <button onClick={()=>handleDelte(item._id)} className="btn">Delete</button>
        </div>
        </div>
        
      </div>
    </div>
  );
};

CartItems.propTypes = {
  item: PropTypes.object,
};
export default CartItems;
