import SocialAuth from "../SocialAuth/SocialAuth";
import toast, { Toaster } from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../AuthProvider";

const SignIn = () => {
    const { createUser, setWait, setToast, location } = useContext(Context)
    const navigate = useNavigate()


    const handleRegister = (e) => {
        e.preventDefault()
        const { email, password, name, confirm, photoURL } = e.target
        const capital = /[A-Z]/;
        const special = /[\W_]/
        if (password.value.length < 6) {
            return toast.error("password should more than 6 charaters")
        }
        if (!capital.test(password.value)) {
            return toast.error("password should conatin atleast one capital latter")
        }

        if (!special.test(password.value)) {
            return toast.error("password should conatin atleast one special character")
        }

        if (password.value !== confirm.value) {
            return toast.error("password didn't matched")
        }

        createUser(email.value, password.value)
            .then(res => {

                const userCart = { email: res.user.email, cartItem: [] }

                fetch(`https://assignment-10-server-seven-omega.vercel.app/create/cart/${res.user.email}`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userCart)
                })
                    .then(res => console.log(res))
                    .catch(err => console.log(err))

                updateProfile(res.user, {
                    displayName: name.value,
                    photoURL: photoURL.value
                })
                    .then(res => {
                        setWait(false)
                        setToast(toast.success("succesfully register"))
                    })
                navigate(location?.state ? location.state : "/")
            })
            .catch(err => setToast(toast.error(`${err}`)))



    }
    return (
        <div className="formParent">

            <div className="formBox">
                <form onSubmit={handleRegister}>

                    <h1>Registration</h1>
                    <div className="inputs">
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="text" name="photoURL" placeholder="Your Photo Url" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <input type="password" name="password" placeholder="Your Password" required />
                        <input type="password" name="confirm" placeholder="Confirm Password" required />
                        <button type="submit">Log in</button>
                    </div>

                    <div className="toggleAccount">Already have an account? got to <Link className="switch" to={"/login"}>Log in </Link></div>

                </form>

                <div className="or">
                    <h1>OR</h1>
                </div>
                <SocialAuth></SocialAuth>
            </div>
            <Toaster className={"z-[9999]"}></Toaster>
        </div>
    );
};

export default SignIn;