import "./CartItem.css";
import toast, { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { Context } from "../AuthProvider";

const CartItem = ({ value }) => {
    const { cart, setCart, user, SetToast } = useContext(Context)

    const { cartItem } = cart

    const handleDelete = () => {


        const cartX = [...cartItem]
        const newCart = cartX.filter(data => data.ModelName !== value.ModelName)

        const objCart = { cartItem: newCart }


        const id = user?.email ? user.email : user.uid



        fetch(`https://assignment-10-server-c2w58adsr-sakibs-projects-d783f29e.vercel.app/delete/cart/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCart)

        }).then(res => {
            setCart(objCart)
            SetToast(toast.success(`Successfuly Removed from the cart`))
        })
            .catch(err => console.log(err))

    }
    return (
        <div className="cartBox">

            <div>
                <img src={value.model_Img} alt="" />
            </div>
            <p>{value.ModelName}</p>
            <p>{value.price}</p>

            <input type="number" className="valueBox" defaultValue={"1"} max={"10"} min={"1"} />


            <div className="cartBtns">
                <button className="buy"><AiOutlineShoppingCart /> Buy</button>
                <button className="delete" onClick={handleDelete}><BsFillTrashFill />Delete</button>
            </div>

            <Toaster></Toaster>
        </div>
    );
};

export default CartItem;