import PropTypes from "prop-types";
import { useState } from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Products = ({ car, cars, setCars }) => {
  const {
    name,
    price,
    rating,
    image,
    brand,
    description,
    category,
    _id,
    userEmail,
  } = car || {};

  console.log(car);
  // console.log(user.email);

  const [add, setAdd] = useState(true);
  const handleAddTocart = () => {
    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(car),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });

          setAdd(false);
        }
      });
  };
  const handleDelete = (_id) => {
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
        fetch(`http://localhost:5000/cars/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Car has been deleted.", "success");
            }
            const remaining = cars.filter((item) => item._id !== _id);
            setCars(remaining);
          });
      }
    });
  };
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl gap-10 my-10">
        <figure className=" shadow-xl ">
          <img src={image} alt="car" className="w-[500px] h-[300px]" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{brand}</h2>
          <h2 className="card-title">{name}</h2>
          <h2 className="card-title">{category}</h2>
          <h2 className="card-title"> ${price}</h2>
          <p>{description}</p>
          <p className="text-red-500"> {userEmail}</p>
          <div>
            <Rating
              emptySymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              }
              fullSymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              initialRating={rating}
              readonly
            />
          </div>
          <div className="card-actions md:justify-end">
            <div className="flex flex-col md:flex-col gap-2 ">
              {add ? (
                <button className="btn w-[150px]" onClick={handleAddTocart}>
                  Add To Cart
                </button>
              ) : (
                <button
                  className="btn w-[150px] "
                  onClick={() => Swal.fire("", "Already Added.", "success")}
                >
                  Added
                </button>
              )}
              <button
                className="btn w-[150px]"
                onClick={() => handleDelete(_id)}
              >
                {" "}
                Delete
              </button>
              <Link to={`/updateproduct/${_id}`}>
                {" "}
                <button className="btn w-[150px] "> Update</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Products.propTypes = {
  car: PropTypes.object,
  cars: PropTypes.array,
  setCars: PropTypes.func,
};
export default Products;
