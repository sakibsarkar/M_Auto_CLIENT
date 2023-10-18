import "./MyCart.css";
import CartItem from "../CartItem/CartItem";
import { useContext, useEffect } from "react";
import { FaOpencart } from "react-icons/fa";
import { Context } from "../AuthProvider";

const MyCart = () => {
    const { cart, setCart, user } = useContext(Context)
    useEffect(() => {

        fetch(`http://localhost:5000/getCartItems/${user?.email}`)
            .then(res => res.json())
            .then(data => setCart(data))

    }, [user?.email, setCart])
    const { cartItem } = cart ? cart : { cartItem: [] }
    return (
        <div className="cartParent">

            <h1>Shopping Cart<FaOpencart className="text-[#fd3e48]" /></h1>
            {
                cartItem.map((value, index) => <CartItem key={index} value={value}></CartItem>)
            }
        </div>
    );
};

export default MyCart;