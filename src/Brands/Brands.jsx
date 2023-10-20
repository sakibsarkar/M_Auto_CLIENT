import "./Brands.css";
import BrandsCard from "../BrandsCard/BrandsCard";
import { useEffect, useState } from "react";

const Brands = () => {
    const [loadedData, setLoadedData] = useState(null)

    useEffect(() => {
        fetch("https://assignment-10-server-7tiwld456-sakibs-projects-d783f29e.vercel.app/brands")
            .then(data => data.json())
            .then(res => setLoadedData(res))
    }, [])


    const { car_brands } = loadedData ? loadedData[0] : { car_brands: [] }



    return (
        <div className="brandHolder">

            <div className="bg- brandHead">
                <h1>Brands We offer</h1>

            </div>

            <div className="brandCon" data-aos="fade-up"
                data-aos-duration="2000" data-aos-mirror="true">


                {car_brands.map((brand, index) => <BrandsCard key={index} brand={brand}></BrandsCard>)}
            </div>


        </div>
    );
};

export default Brands;