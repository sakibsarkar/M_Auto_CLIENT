import "./SocilaAuth.css";
import toast from "react-hot-toast";
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Context } from "../AuthProvider";

const SocialAuth = () => {
    const { google, SetToast, gitHub, location } = useContext(Context)


    const navigate = useNavigate()
    const mediaLog = (media) => {
        media()
            .then(res => {


                const id = res.user.email ? res.user.email : res.user.uid
                const userCart = { email: res.user.email ? res.user.email : res.user.uid, cartItem: [] }

                fetch(`https://assignment-10-server-60dznztq0-sakibs-projects-d783f29e.vercel.app/create/cart/${id}`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userCart)
                })
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
                navigate(location?.state ? location.state : "/")
                SetToast(toast.success("succesfully loged in"))

            })
            .catch(err => {
                toast.error(`${err}`)
            })
    }
    return (
        <div className="socialCon">

            <div onClick={() => mediaLog(gitHub)}>
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