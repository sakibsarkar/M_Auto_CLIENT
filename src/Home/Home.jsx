import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import WhyCoose from "../WhyChoose/WhyCoose";
import { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { Context } from "../AuthProvider";

const Home = () => {

    return (
        <>
            <Banner></Banner>
            <Brands></Brands>
            <WhyCoose></WhyCoose>

        </>
    );
};

export default Home;