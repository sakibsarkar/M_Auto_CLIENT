import "./SocilaAuth.css";
import { FaGoogle } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const SocialAuth = () => {
    return (
        <div className="socialCon">

            <div>
                <FiGithub></FiGithub>
                Github
            </div>

            <div>
                <FaGoogle></FaGoogle>
                Google
            </div>



        </div>
    );
};

export default SocialAuth;