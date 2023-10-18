import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { Context } from "../AuthProvider";

const Home = () => {
    const { toast } = useContext(Context)
    if (toast) {
        toast
    }
    return (
        <>
            <Banner></Banner>
            <Brands></Brands>
            <Toaster></Toaster>
        </>
    );
};

export default Home;