import "./Brands.css";
import BrandsCard from "../BrandsCard/BrandsCard";
import { useEffect, useState } from "react";

const Brands = () => {
    const [loadedData, setLoadedData] = useState(null)

    useEffect(() => {
        fetch("http://localhost:5000/brands")
            .then(data => data.json())
            .then(res => setLoadedData(res))
    }, [])


    const { car_brands } = loadedData ? loadedData[0] : { car_brands: [] }
    console.log(car_brands);



    return (
        <div>

            <div className="brandHead">
                <h1>Brands We offer</h1>

            </div>

            <div className="brandCon">


                {car_brands.map((brand, index) => <BrandsCard key={index} brand={brand}></BrandsCard>)}
            </div>


        </div>
    );
};

export default Brands;