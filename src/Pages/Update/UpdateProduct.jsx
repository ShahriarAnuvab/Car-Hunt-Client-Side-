import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const cars = useLoaderData();
  const {
    brand,
    car,
    price,
    rating,
    category,
    description,
    image,
    brandImage,
    _id,
  } = cars || {};

  const handleUpdateProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const brand = form.brand.value;
    const car = form.car.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const category = form.category.value;
    const description = form.description.value;
    const image = form.image.value;
    const brandImage = form.brandImage.value;
    const updatedCar = {
      brand,
      car,
      price,
      rating,
      category,
      description,
      image,
      brandImage,
    };

    fetch(`https://car-hunt-server-side-fy1tbiv9m-shahriaranuvab.vercel.app/cars/${_id}`, { 
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCar),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };

  return (
    <div>
      <div className="p-24">
        <h2 className="text-xl my-4">Update car: {car}</h2>
        <form onSubmit={handleUpdateProduct}>
          {/* form name and quantity row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <label className="input-group">
                <input
                  required
                  type="text"
                  defaultValue={brand}
                  name="brand"
                  placeholder="Brand Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Car name</span>
              </label>
              <label className="input-group">
                <input
                  required
                  type="text"
                  name="car"
                  defaultValue={car}
                  placeholder="Car Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form supplier row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  defaultValue={price}
                  name="price"
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="rating"
                  defaultValue={rating}
                  placeholder="Rating"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>
          {/* form category and details row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  required
                  type="text"
                  name="category"
                  defaultValue={category}
                  placeholder="Category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <label className="input-group">
                <input
                  required
                  type="text"
                  name="description"
                  defaultValue={description}
                  placeholder="Description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form Photo url row */}
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Car Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  required
                  type="text"
                  name="image"
                  defaultValue={image}
                  placeholder="Car Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Brand Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  required
                  type="text"
                  name="brandImage"
                  defaultValue={brandImage}
                  placeholder="Brand Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            required
            type="submit"
            value="Add Car"
            className="btn btn-block"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
