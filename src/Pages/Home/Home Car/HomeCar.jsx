import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const HomeCar = ({ brands }) => {
  const { brand, image } = brands || {};
  return (
    
      <div >
        <NavLink to={`/brand/${brand}`}>
          <div className="card w-[350px] bg-base-100 shadow-xl">
            <figure>
              <img src={image} alt="Shoes" className="w-[300px] h-[200px]" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{brand}</h2>
            </div>
          </div>
        </NavLink>
      </div>
    
  );
};
HomeCar.propTypes = {
  brands: PropTypes.object.isRequired,
};
export default HomeCar;
