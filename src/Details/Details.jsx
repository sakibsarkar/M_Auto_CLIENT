import "./Details.css";
import toast from "react-hot-toast";
import { useContext, useEffect, useState } from "react";
import { BsFuelPumpFill } from "react-icons/bs";
import { GiCarKey } from "react-icons/gi";
import { GiMechanicGarage } from "react-icons/gi";
import { PiEngineBold } from "react-icons/pi";
import { SiTurbo } from "react-icons/si";
import { useParams } from "react-router-dom";
import { Context } from "../AuthProvider";

const Details = () => {
    const [car, setcar] = useState({})
    const { model, brand } = useParams()

    const { setCart, cart, user } = useContext(Context)
    console.log(user.uid)
    useEffect(() => {
        fetch(`https://assignment-10-server-7tiwld456-sakibs-projects-d783f29e.vercel.app/brands/${brand}`)
            .then(res => res.json())
            .then(data => setcar(data))
    }, [brand])


    // getting old carts 
    const id = user.email ? user.email : user.uid
    useEffect(() => {
        fetch(`https://assignment-10-server-7tiwld456-sakibs-projects-d783f29e.vercel.app/getCartItems/${id}`)
            .then(res => res.json())
            .then(data => setCart(data))
    }, [id, setCart])





    const { models } = car ? car : { models: [] }
    const result = models?.find(res => res.ModelName == model)
    const handleAddToCart = () => {

        const { cartItem } = cart
        const newItem = [result, ...cartItem]
        fetch(`https://assignment-10-server-7tiwld456-sakibs-projects-d783f29e.vercel.app/addItem/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newItem)
        }).then(res => toast.success("successfuly added on card"))




    }
    return (
        <div className="detailBox">

            <div className="bigImg">
                <img src={result?.model_Img} alt="" />
            </div>

            <div className="aboutCar">
                <div>
                    <h1>{brand} {result?.ModelName}</h1>
                    <p>$ {result?.price}</p>
                </div>



                <div>
                    <button onClick={handleAddToCart}>Add To Cart</button>
                </div>

            </div>

            <div className="detail_content">
                <h1>Description</h1>
                <p>{result?.description}</p>
            </div>

            <div className="specification">
                <p><GiMechanicGarage className="text-[#ff2732]" />Manufacture: {result?.year}</p>
                <p><PiEngineBold className="text-[#ff2732]" />Engine : {result?.engine ? result.engine : ""}</p>
                <p><BsFuelPumpFill className="text-[#ff2732]" /> Fuel : {result?.fuel ? result.fuel : ""}</p>
                <p><SiTurbo className="text-[#ff2732]" />Horsepower : {result?.horsepower ? result.horsepower : ""}</p>
                <p><GiCarKey className="text-[#ff2732]" />Type : {result?.type ? result.type : ""}</p>

            </div>

        </div>
    );
};

export default Details;