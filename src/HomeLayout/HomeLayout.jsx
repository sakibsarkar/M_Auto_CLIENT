import Nav from "../Nav/Nav";
import { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import { Context } from "../AuthProvider";

const HomeLayout = () => {

    const { toast } = useContext(Context)
    if (toast) {
        toast
    }
    return (
        <>
            <Nav></Nav>
            <Outlet></Outlet>
            <Toaster></Toaster>
        </>
    );
};

export default HomeLayout;