import "./Update.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Update = () => {

    const { brandName, model } = useParams()
    const [theCar, setTheCar] = useState({})
    const [allModels, setAllModel] = useState([])
    useEffect(() => {
        fetch(`https://assignment-10-server-60dznztq0-sakibs-projects-d783f29e.vercel.app/brands/${brandName}`)
            .then(res => res.json())
            .then(data => setTheCar(data))
    }, [brandName])


    console.log(allModels)


    // getting the we need update 
    const { models } = theCar ? theCar : { models: [] }


    const result = models?.find(res => res.ModelName == model)
    console.log(theCar)






    const update = (e) => {
        e.preventDefault()

        const { modelName, BrandName, image, ratings, price, type } = e.target
        const newObj = { id: result.id, ModelName: modelName.value, model_Img: image.value, year: result.year, horsepower: result.horsepower, engine: result.engine, type: type.value, fuel: result.fuel, ratings: ratings.value, price: price.value, description: result.description }

        const newModelArr = [...models]
        newModelArr[result.id - 1] = newObj

        console.log(newModelArr)



        fetch(`https://assignment-10-server-60dznztq0-sakibs-projects-d783f29e.vercel.app/brands/${brandName}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newModelArr)
        })
            .then(res => {
                fetch(`https://assignment-10-server-60dznztq0-sakibs-projects-d783f29e.vercel.app/brandName/${brandName}`, {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({ name: BrandName.value })
                })
            })








    }
    return (
        <div className="updateFormCon">



            <h1 className="formHeading">Product Update Form</h1>


            <form onSubmit={update}>


                <div className="longValue">
                    <p>Car Model Name</p>
                    <input name="modelName" type="text" defaultValue={result?.ModelName} />
                </div>
                <div className="longValue">
                    <p>Brand Name</p>
                    <input name="BrandName" type="text" defaultValue={theCar.name} />
                </div>
                <div className="longValue">
                    <p>Car Image Link</p>
                    <input type="text" name="image" id="" defaultValue={result?.model_Img} />
                </div>



                <div className="smallValue">

                    <div>
                        <p>Price</p>
                        <input type="number" name="price" id="" defaultValue={result?.price} />
                    </div>
                    <div>
                        <p>Ratings</p>
                        <input type="number" name="ratings" id="" defaultValue={result?.ratings} />
                    </div>

                    <div>
                        <p>Car Type</p>
                        <input type="" name="type" id="" defaultValue={result?.type} />
                    </div>
                </div>


                <button type="submit">Submit</button>

            </form>

        </div>

    );
};

export default Update;