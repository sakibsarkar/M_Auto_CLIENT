import "./AddProduct.css";
import toast from "react-hot-toast";
import { data } from "autoprefixer";
import { useContext, useEffect, useState } from "react";
import { Context } from "../AuthProvider";

const AddProduct = () => {

    const [brandValue, setBrandValue] = useState("Select brand")
    const [typeValue, setTypeValue] = useState("Select Type")
    const { user } = useContext(Context)
    const [car, setCar] = useState({})//car is, all the data of selected brand (brandValue)
    window.scroll(0, 0)
    const handleChanged = (e) => {
        e.preventDefault()
        setBrandValue(e.target.value)
    }
    const handleTypeOf = (e) => {
        e.preventDefault()
        setTypeValue(e.target.value)
    }


    useEffect(() => {
        if (brandValue !== "Select brand" || typeValue !== "Select Type") {
            fetch(`https://assignment-10-server-60dznztq0-sakibs-projects-d783f29e.vercel.app/brands/${brandValue}`)
                .then(res => res.json())
                .then(data => setCar(data))
            return
        }
    }, [brandValue, typeValue])




    const handleAddProduct = (e) => {
        e.preventDefault()
        if (brandValue === "Select brand") {
            toast.error("Please Select Brand")
            return
        }
        const { description, model, image, rating, price, } = e.target
        const id = user?.email ? user.email : user.uid

        fetch(`https://assignment-10-server-60dznztq0-sakibs-projects-d783f29e.vercel.app/brands/${brandValue}`)
            .then(res => res.json())
            .then(data => setCar(data))

        const { models } = car ? car : { models: [] }
        const newProductId = models?.length + 1
        console.log(newProductId)

        const newProductObj = { id: newProductId, ModelName: model.value, model_Img: image.value, year: "UnKnown", horsepower: "Unknown", engine: "Unknown", type: typeValue, fuel: "Unknown", ratings: rating.value, price: price.value, description: description.value }


        const newItems = [...models, newProductObj]

        console.log(newItems)

        fetch(`https://assignment-10-server-60dznztq0-sakibs-projects-d783f29e.vercel.app/brands/${brandValue}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newItems)
        })


    }


    return (
        <div className="addProductCon">
            <form action="" onSubmit={handleAddProduct}>
                <div className="devider">
                    <div>
                        <select value={brandValue} onChange={handleChanged}>
                            <option value="Select brand">Select brand</option>
                            <option value="toyota">toyota</option>
                            <option value="ford">ford</option>
                            <option value="bmw">bmw</option>
                            <option value="honda">honda</option>
                            <option value="mercedes">mercedes</option>
                            <option value="chevrolet">chevrolet</option>
                        </select>
                    </div>
                    <input type="text" name="model" placeholder="Name (model of the car)" required />
                </div>


                <textarea placeholder="Description" name="description" id="" required></textarea>

                <input className="productImgFeild" type="text" placeholder="Image Link" name="image" required />

                <div className="brothers">
                    <input type="number" placeholder="Rating" name="rating" required />
                    <input type="number" placeholder="price" name="price" required />
                    <select value={typeValue} onChange={handleTypeOf}>
                        <option value="Select Type">Select Type</option>
                        <option value="Sedan">Sedan</option>
                        <option value="SUV">SUV</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="Truck">Truck</option>
                        <option value="Coupe">Coupe</option>
                        <option value="Minivan">Minivan</option>
                        <option value="Electric">Electric</option>

                    </select>
                </div>

                <button type="submit" className="addProduct">Submit</button>

            </form>
        </div>
    );
};

export default AddProduct;