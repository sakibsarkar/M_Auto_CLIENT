import "./Footer..css";
import { BiPaperPlane } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="footerCon">

            <footer>
                <div className="footerLogo">
                    <img src="https://i.ibb.co/BwKbzpk/logo.png" />
                    <div className="heroInput">
                        <input type="text" placeholder="Your Eamil" />

                        <div className="paperPlane" >

                            <BiPaperPlane />
                        </div>
                    </div>
                </div>

                <div className="contactList">
                    <h1>Contact With Us</h1>
                    <div>
                        <p>Uttara, sectore-11</p>
                        <p>support@mauto.com</p>
                        <p>+880 0123456789</p>
                    </div>
                </div>


                <div className="footerIcon">

                    <div className="socialIcon"><FaFacebookF></FaFacebookF></div>
                    <div className="socialIcon"><FaLinkedinIn></FaLinkedinIn></div>
                    <div className="socialIcon"><BsTwitter></BsTwitter></div>

                </div>
            </footer>
        </div>
    );
};

export default Footer;