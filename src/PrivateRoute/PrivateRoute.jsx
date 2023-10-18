import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../UserAuth/UserAuth";

const PrivateRoute = ({ children }) => {
    const { user } = useContext(UserContext)
    const location = useLocation()
    return (
        <>
            {
                user ? children : <Navigate state={location.pathname} to={"/login"}></Navigate>

            }
        </>
    );
};

export default PrivateRoute;