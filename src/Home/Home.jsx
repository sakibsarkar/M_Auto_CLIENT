import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { Context } from "../AuthProvider";

const Home = () => {
   
    return (
        <>
            <Banner></Banner>
            <Brands></Brands>
        
        </>
    );
};

export default Home;