import "./BrandProduct.css";
import NoProduct from "../NoProduct/NoProduct";
import Product from "../Product/Product";
import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Context } from "../AuthProvider";

const BrandProduct = () => {
    const [item, setItem] = useState(null)
    const { brand } = useParams()
    useEffect(() => {
        fetch(`https://assignment-10-server-60dznztq0-sakibs-projects-d783f29e.vercel.app/brands/${brand}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [brand])


    const { banner, models, name } = item ? item : { banner: [], models: [], name: '' }






    return (
        <>



            {
                models?.length <= 0 ? <NoProduct></NoProduct> :
                    <div className="main">
                        <div className="carousel w-full min-h-[600px] mt-[79px]">
                            <div id="item1" className="carousel-item w-full">
                                <img src={banner[0]} className="w-full" />
                            </div>
                            <div id="item2" className="carousel-item w-full">
                                <img src={banner[1]} className="w-full" />
                            </div>
                            <div id="item3" className="carousel-item w-full">
                                <img src={banner[2]} className="w-full" />
                            </div>
                        </div>
                        <div className="flex justify-center w-full py-2 gap-2">
                            <a href="#item1" className="btn btn-xs">1</a>
                            <a href="#item2" className="btn btn-xs">2</a>
                            <a href="#item3" className="btn btn-xs">3</a>

                        </div>

                        <div className="productCon">
                            {models.map((data, index) => <Product key={index} data={data} name={name}></Product>)}
                        </div>
                    </div>
            }





        </>
    );
};

export default BrandProduct;