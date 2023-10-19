import "./Product.css";
import { BsFillStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Product = ({ data }) => {

    const { name, BrandName, model_Img, year, description, type, price, ratings } = data ? data : {}
    console.log(BrandName, name);

    return (
        <div className="productCard">
            <div className="productImg">
                <img src={model_Img} alt="" />

            </div>


            <div className="bottomLvl">
                <div className="ratings">
                    <p>({ratings}K+ Ratings)</p>

                    <div className="stars">
                        <BsFillStarFill></BsFillStarFill>
                        <BsFillStarFill></BsFillStarFill>
                        <BsFillStarFill></BsFillStarFill>
                        <BsFillStarFill></BsFillStarFill>
                        <BsFillStarFill></BsFillStarFill>
                    </div>
                </div>

                <div className="intro">
                    <h1>{BrandName} {name}</h1>

                    <p className="about">{description}</p>
                    <p className="type">- Type : {type}</p>
                    <p className="price">- Price : {`${price}`}$</p>
                </div>
            </div>

            <div className="btns">
                <Link className="widthFull" to={`/cars/details/${BrandName.toLowerCase()}/${name}`}><button className="details">Details</button></Link>
                <Link className="widthFull" to={`/cars/update/${BrandName.toLowerCase()}/${name}`}><button className="update">Update</button></Link>
            </div>

        </div>
    );
};

export default Product;