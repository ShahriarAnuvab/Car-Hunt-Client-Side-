import { useLoaderData, useParams } from "react-router-dom";
import CarDetails from "./CarDetails";
import Slider from "./Slider";

const BrandCars = () => {
    const {brand} = useParams()
    
    const data =useLoaderData()

    const findCar = data.filter((car) => car.brand === brand);

    return (
        <div>
            <div>
                <Slider></Slider>
            </div>
            <div>
            {
                findCar.map((car, index) => <CarDetails key={index} car={car}></CarDetails>)
            }
            </div>
        </div>
    );
};

export default BrandCars;