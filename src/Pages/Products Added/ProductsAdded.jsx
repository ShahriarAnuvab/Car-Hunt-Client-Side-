import { useLoaderData } from "react-router-dom";
import Products from "./Products";
import { useState } from "react";

const ProductsAdded = () => {
    const data = useLoaderData()
    const [cars, setCars] = useState(data)
 
    
    
    return (
        <div>
           <div>
            <h1>Products added: {cars.length}</h1>
           </div>
           <div>
            {cars.length===0? 
            <div className="text-3xl flex justify-center items-center my-10 font-medium"><h1>No Data Found</h1></div> :
            <div>
                {
                    cars.map(car=> <Products key={car._id} car={car} cars={cars} setCars={setCars}></Products>)
                }
            </div>
            }
           </div>

        </div>
    );
};

export default ProductsAdded;