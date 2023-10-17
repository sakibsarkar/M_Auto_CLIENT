import Nav from "../Nav/Nav";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
    return (
        <>
            <Nav></Nav>
            <Outlet></Outlet>
        </>
    );
};

export default HomeLayout;