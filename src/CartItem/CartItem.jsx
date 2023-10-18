import "./CartItem.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

const CartItem = ({ value }) => {
    console.log(value)
    return (
        <div className="cartBox">

            <div>
                <img src={value.model_Img} alt="" />
            </div>
            <p>{value.BrandName} {value.name}</p>
            <p>{value.price}</p>


            <div className="cartBtns">
                <button className="buy"><AiOutlineShoppingCart /> Buy</button>
                <button className="delete"><BsFillTrashFill />Delete</button>
            </div>


        </div>
    );
};

export default CartItem;