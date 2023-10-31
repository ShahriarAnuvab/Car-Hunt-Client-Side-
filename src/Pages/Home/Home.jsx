import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import CarCard from "./Added Products/CarCard";
import ContactUs from "./Contact Us/ContactUs";
import { useEffect, useState } from "react";
import HomeCar from "./Home Car/HomeCar";

const Home = () => {
  const data = useLoaderData();
  const [brand, setBrand] = useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/brand')
    .then(res => res.json())
    .then(data=> setBrand(data))
  },[])

  const brandData = {};
  brand.forEach((item) => {
    const brand = item.brand;
    const image = item.brandImage;
   
    if (!brandData[brand]) {
      brandData[brand] = {
        brand: brand,
        image: image,
      };
    }
  });

  const brandArray = Object.values(brandData);

  return (
    <div>
      <div className="">
        <Banner></Banner>
      </div>
      <div>
        <h1>Brands: {brandArray.length}</h1>
        <div color className="grid md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-5 my-5">
          {brandArray.map((brand, index) => <HomeCar key={index} brands={brand}></HomeCar>)}
        </div>
      </div>

      
      <div className="shadow-lg rounded-xl p-2 mt-2">
        <h1>Added Cars: {data.length}</h1>
        {data.length === 0 ? (
          <div className="flex justify-center items-center text-3xl">
            <Link to="/addproduct"><h1 className="my-5">Haven't Added Yet?</h1></Link>
          </div>
        ) : (
          data
            .slice(0, 1)
            .map((car) => <CarCard key={data._id} car={car}></CarCard>)
        )}
      </div>
      <div>
        {data.legth === 0 ? (
          ""
        ) : (
          <div className="flex justify-center items-center">
            {data.length > 0?   <Link to="/addedproduct">
              <button className="btn mt-5">See All</button>
            </Link> : '' }
          
          </div>
        )}
      </div>
      <div className="my-10">
        <ContactUs></ContactUs>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
