import "./Details.css";
import toast from "react-hot-toast";
import { useContext, useEffect, useState } from "react";
import { BsFuelPumpFill } from "react-icons/bs";
import { GiCarKey } from "react-icons/gi";
import { GiMechanicGarage } from "react-icons/gi";
import { PiEngineBold } from "react-icons/pi";
import { SiTurbo } from "react-icons/si";
import { json, useParams } from "react-router-dom";
import { Context } from "../AuthProvider";

const Details = () => {
    const { user, runtime, SetToast, cart, setRunTime } = useContext(Context)
    const { brand, model } = useParams()
    const [car, setCart] = useState({})
    console.log(model);

    useEffect(() => {

        fetch(`http://localhost:5000/brands/${brand}/${model}`)
            .then(res => res.json())
            .then(data => setCart(data))

    }, [brand, model])


    useEffect(() => {

        fetch(`http://localhost:5000/getCartItems/${user?.email ? user?.email : user.uid}`)
            .then(res => res.json())
            .then(data => setCart(data))

    }, [user?.email, user?.uid])


    const handleAddToCart = () => {
        const { cartItem } = cart ? cart : { cartItem: [] }
        const newCartValue = [car, ...cartItem]
        let result = newCartValue.filter((obj, index, array) =>
            array.findIndex((data) => data.name === obj.name) === index
        );
        console.log(user?.email)
        const userId = user?.email ? user.email : user.uid
        fetch(`http://localhost:5000/addItem/${userId}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(result)

        })
            .then(res => SetToast(toast.success("succesfuly added to cart")))

    }

    return (

        <div className="detailBox">

            <div className="bigImg">
                <img src={car.model_Img} alt="" />
            </div>

            <div className="aboutCar">
                <div>
                    <h1>{car.BrandName} {car.name}</h1>
                    <p>$ {car.price}</p>
                </div>



                <div>
                    <button onClick={handleAddToCart}>Add To Cart</button>
                </div>

            </div>

            <div className="detail_content">
                <h1>Description</h1>
                <p>{car.description}</p>
            </div>

            <div className="specification">
                <p><GiMechanicGarage className="text-[#ff2732]" />Manufacture: {car.year}</p>
                <p><PiEngineBold className="text-[#ff2732]" />Engine : {car.engine}</p>
                <p><BsFuelPumpFill className="text-[#ff2732]" /> Fuel : {car.fuel}</p>
                <p><SiTurbo className="text-[#ff2732]" />Horsepower : {car.horsepower}</p>
                <p><GiCarKey className="text-[#ff2732]" />Type : {car.type}</p>

            </div>

        </div>
    );
};

export default Details;