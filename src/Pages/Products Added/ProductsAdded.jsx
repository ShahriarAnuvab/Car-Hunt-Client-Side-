import { useContext } from "react";
import Products from "./Products";
import { useEffect, useState } from "react";
import { AuthContext } from "../../Auth Provider/AuthProvider";

const ProductsAdded = () => {
  const { user } = useContext(AuthContext);
  const [cars, setCars] = useState([]);
  console.log(cars);
  useEffect(() => {
    fetch(`http://localhost:5000/cars?userEmail=${user.email}`)
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, [user.email]);
  return (
    <div>
      <div>
        <h1 className="text-3xl">Products added: {cars.length}</h1>
      </div>
      <div>
        {cars.length === 0 ? (
          <div className="text-3xl flex justify-center items-center my-10 font-medium">
            <h1>No Data Found</h1>
          </div>
        ) : (
          <div>
            {cars.map((car) => (
              <Products
                key={car._id}
                car={car}
                cars={cars}
                setCars={setCars}
              ></Products>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsAdded;
