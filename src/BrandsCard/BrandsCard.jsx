import "./BrandCard.css";
import { Link } from "react-router-dom";

const BrandsCard = ({ brand }) => {

    return (
        <Link to={`/cars/${brand.name}`}>

            <div className="brandCard">
                <div className="brandImg">
                    <img src={brand.image} alt="" />
                </div>

                <h1 style={{ textTransform: "uppercase" }}>{brand.name}</h1>

            </div>
        </Link>

    );
};

export default BrandsCard;