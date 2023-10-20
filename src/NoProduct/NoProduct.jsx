import "./NoProduct.css";
import { Link } from "react-router-dom";

const NoProduct = () => {

    window.scroll(0, 0)
    return (
        <div className="noProductCon">
            <img src="https://i.ibb.co/hCMVfKd/untitled-1-1.png" alt="" />

            <div>
                <h1>Opps ! Sorry looks like we dont have nothing to show for this brand</h1>
                <p>Go for Other <Link to={"/"} className="goHome">Brands</Link></p>
            </div>

        </div>
    );
};

export default NoProduct;