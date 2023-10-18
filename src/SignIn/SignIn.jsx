import SocialAuth from "../SocialAuth/SocialAuth";
import toast, { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../AuthProvider";

const SignIn = () => {
    const { createUser } = useContext(Context)

    const handleRegister = (e) => {
        e.preventDefault()
        const { email, password, name, confirm, picture } = e.target
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