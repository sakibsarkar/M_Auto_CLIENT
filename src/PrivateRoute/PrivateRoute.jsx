import { useContext } from "react";
import { Oval } from "react-loader-spinner";
import { Navigate, useLocation, useParams } from "react-router-dom";
import { Context } from "../AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(Context)
    const location = useLocation()
    if (user) {
        return children
    }

    if (loading) {
        return (
            <div className="w-[100vw] h-[100vh] flex justify-center items-center">
                <Oval
                    height={80}
                    width={80}
                    color="#4fa94d"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="#4fa94d"
                    strokeWidth={2}
                    strokeWidthSecondary={2}

                />
            </div>
        )
    }



    return <Navigate state={location.pathname} to={"/login"}></Navigate>

};

export default PrivateRoute;