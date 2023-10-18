import "./LogIn.css";
import SocialAuth from "../SocialAuth/SocialAuth";
import { data } from "autoprefixer";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../AuthProvider";

const LogIn = () => {
    const { loginWithEmail, setlocation, setToast } = useContext(Context)
    const LOCATION = useLocation()
    setlocation(LOCATION)
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const { email, password } = e.target
        loginWithEmail(email.value, password.value)
            .then(res => {
                setToast(toast.success("successfuly singedIn"))
                navigate(LOCATION?.state ? LOCATION.state : "/")
            }

            )
            .then(data => console.log(data))
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
        </div>
    );
};

export default LogIn;