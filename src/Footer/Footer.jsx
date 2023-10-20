import "./Footer..css";
import { AiFillYoutube, AiOutlineGooglePlus } from "react-icons/ai";
import { BiPaperPlane } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footerCon">

            <footer>
                <div className="footericons">
                    <div><BsTwitter></BsTwitter></div>
                    <div><FaFacebookF></FaFacebookF></div>
                    <div><FaLinkedinIn></FaLinkedinIn></div >
                    <div><AiFillYoutube></AiFillYoutube></div >
                    <div><AiFillYoutube></AiFillYoutube></div >
                    <div><AiOutlineGooglePlus></AiOutlineGooglePlus></div >
                </div >

                <div className="footerLinks">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/"}>Add products</Link>
                    <Link to={"/"}>Cart</Link>
                    <Link to={"/"}>Blogs</Link>
                    <Link to={"/"}>Account</Link>
                </div>
            </footer >
        </div >
    );
};

export default Footer;