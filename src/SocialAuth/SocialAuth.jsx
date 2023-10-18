import "./SocilaAuth.css";
import toast from "react-hot-toast";
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Context } from "../AuthProvider";

const SocialAuth = () => {
    const { google, setToast, location } = useContext(Context)


    const navigate = useNavigate()
    const mediaLog = (media) => {
        media()
            .then(res => {

                const userCart = { email: res.user.email, cartItem: [] }

                fetch(`http://localhost:5000/create/cart/${res.user.email}`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userCart)
                })
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
                navigate(location?.state ? location.state : "/")
                setToast(toast.success("succesfully loged in"))

            })
            .catch(err => {
                toast.error(`${err}`)

            })
    }
    return (
        <div className="socialCon">

            <div>
                <FiGithub></FiGithub>
                Github
            </div>

            <div onClick={() => mediaLog(google)}>
                <FaGoogle></FaGoogle>
                Google
            </div>



        </div>
    );
};

export default SocialAuth;