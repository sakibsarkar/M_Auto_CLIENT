import "./BrandProduct.css";
import Product from "../Product/Product";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BrandProduct = () => {
    const [item, setItem] = useState([])
    const [banners, setBanners] = useState([])
    const { brand } = useParams()
    useEffect(() => {
        fetch(`http://localhost:5000/brands/${brand}`)
            .then(res => res.json())
            .then(data => setItem(data))

        fetch(`http://localhost:5000/brands/banner/${brand}`)
            .then(res => res.json())
            .then(data => setBanners(data))


    }, [brand])
    console.log(item)

    return (
        <div className="main">
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={banners[0]} className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={banners[1]} className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={banners[2]} className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>

            </div>

            <div className="productCon">
                {item.map((data, index) => <Product key={index} data={data}></Product>)}
            </div>
        </div>
    );
};

export default BrandProduct;