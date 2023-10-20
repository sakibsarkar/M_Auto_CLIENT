import "./LogIn.css";
import SocialAuth from "../SocialAuth/SocialAuth";
import toast, { Toaster } from "react-hot-toast";
import { data } from "autoprefixer";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../AuthProvider";

const LogIn = () => {
    const { loginWithEmail, setlocation, SetToast } = useContext(Context)
    const LOCATION = useLocation()
    setlocation(LOCATION)
    const navigate = useNavigate()


    console.clear()
    const handleLogin = (e) => {
        e.preventDefault()
        const { email, password } = e.target
        loginWithEmail(email.value, password.value)
            .then(res => {
                navigate(LOCATION?.state ? LOCATION.state : "/")
                SetToast(toast.success("successfuly singed In"))
            })
            .catch(err => toast.error(`invalid email or password`))
    }

    return (
        <div className="formParent">

            <div className="formBox">
                <form onSubmit={handleLogin}>

                    <h1>Log in</h1>
                    <div className="inputs">
                        <input type="email" name="email" placeholder="Your Email" />
                        <input type="password" name="password" placeholder="Your Password" />
                        <button type="submit">Log in</button>
                    </div>

                    <div className="toggleAccount">Don't have account? let's do <Link className="switch" to={"/signin"}>Registration </Link></div>

                </form>

                <div className="or">
                    <h1>OR</h1>
                </div>
                <SocialAuth LOCATION={LOCATION}></SocialAuth>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default LogIn;