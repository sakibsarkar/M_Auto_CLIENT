import "./MyCart.css";
import CartItem from "../CartItem/CartItem";
import { useContext, useEffect } from "react";
import { FaOpencart } from "react-icons/fa";
import { Context } from "../AuthProvider";

const MyCart = () => {
    const { cart, setCart, user } = useContext(Context)
    const id = user?.email ? user.email : user.uid
    useEffect(() => {

        fetch(`http://localhost:5000/getCartItems/${id}`)
            .then(res => res.json())
            .then(data => setCart(data))

    }, [user?.email, setCart, id])
    const { cartItem } = cart ? cart : { cartItem: [] }
    return (
        <div className="cartParent">

            <h1>Shopping Cart<FaOpencart className="text-[#fd3e48]" /></h1>


            <div className="cartBox tableHead">
                <p>Image</p>
                <p>Name</p>
                <p>Price</p>
                <p className="m-[-18px]">Quantity</p>
                <p className="text-center">Action</p>
            </div>
            {
                cartItem.map((value, index) => <CartItem key={index} value={value}></CartItem>)
            }
        </div>
    );
};

export default MyCart;