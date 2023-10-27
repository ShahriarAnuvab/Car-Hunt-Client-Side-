
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Swal from "sweetalert2";

// import Swal from 'sweetalert2'
const AddProduct = () => {
   
    const [isShow, setIsShow] =useState(false)
    const handleAddProduct = event =>{
        event.preventDefault();
        const form = event.target
        const brand = form.brand.value
        const car = form.car.value
        const price = form.price.value
        const rating = form.rating.value
        const category = form.category.value
        const description = form.description.value
        const image = form.image.value
        const brandImage = form.brandImage.value
        const newCar = {brand, car, price, rating , category,description, image, brandImage}
        fetch("https://car-hunt-server-side-88mdu63zy-shahriaranuvab.vercel.app/cars",{
            method: "POST",
            headers:{
                'content-type' : 'application/json'
            },
            body : JSON.stringify(newCar)

        })
        .then(res=> res.json())
        .then(data=> {
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              }) 
              form.reset()
              setIsShow(true)
            
        }})

    }
    return (
        <div>
            <div className="p-2 md:p-5">
            <h2 className="text-3xl font-extrabold">Add a Car</h2>
            <form onSubmit={()=>handleAddProduct(event)}>
                {/* form name and quantity row */}
                <div className="md:flex md:mb-8">
                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input required type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full"  />
                        </label>
                    </div>
                    <div className="form-control  md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Car name</span>
                        </label>
                        <label className="input-group">
                            <input required type="text" name="car" placeholder="Car Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex md:mb-8">
                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input  type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control  md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input  type="text" name="rating" placeholder="Rating" className="input input-bordered w-full"  required/>
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex md:mb-8">
                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input required type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control  md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input required type="text" name="description" placeholder="Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Photo url row */}
                <div className="md:mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Car Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input required type="text" name="image" placeholder="Car Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Brand Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input required type="text" name="brandImage" placeholder="Brand Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input required type="submit" value="Add Car" className="btn btn-block" />

            </form>
            <div className='my-5 flex justify-center'>
            {isShow? <div><Link to='/addedproduct'><button className='btn '>See Added Cars</button></Link></div> : ''}
        </div>
        </div>
        
        </div>
    );
};

export default AddProduct;