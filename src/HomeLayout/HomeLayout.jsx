import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import { useContext, useState } from "react";
import { Toaster } from "react-hot-toast";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { Outlet } from "react-router-dom";
import { Context } from "../AuthProvider";

const HomeLayout = () => {

    const { toast } = useContext(Context)
    if (toast) {
        toast
    }
    const [isDark, setIsDark] = useState(false);
    isDark ? document.body.setAttribute("data-theme", "dark") : document.body.setAttribute("data-theme", "light")
    return (
        <>


            <Nav></Nav>
            <div onClick={() => setIsDark(!isDark)} className="modeToggle">
                {isDark ? <BsFillMoonFill></BsFillMoonFill> : <BsFillSunFill></BsFillSunFill>}
            </div>
            <Outlet></Outlet>

            <Footer></Footer>
            <Toaster></Toaster>
        </>
    );
};

export default HomeLayout;