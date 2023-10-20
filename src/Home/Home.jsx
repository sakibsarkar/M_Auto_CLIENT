import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
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
            <Contact></Contact>
         

        </>
    );
};

export default Home;