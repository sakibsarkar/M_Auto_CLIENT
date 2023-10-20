import "./Contact.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div className="contactParent">

            <h1 className="contact">Contact Us</h1>


            <div className="contactForm">
                <div className="heroCardContainer">

                    <div className="contactLeft">
                        <div>
                            <div className="iconDiv">
                                <FaLocationDot />
                            </div>

                            <div className="contactCard">
                                <h1>Our Lcation</h1>
                                <p>Sector-11, Uttara, Dhaka-1230, Bangladesh, Dhaka 1230, Bangladesh</p>
                            </div>
                        </div>
                    </div>




                    <div className="contactLeft">
                        <div>
                            <div className="iconDiv">
                                <BsFillTelephoneFill />
                            </div>

                            <div className="contactCard">
                                <h1>Phone</h1>
                                <p>+880 1234567890</p>
                                <p>+880 1322549666</p>
                            </div>
                        </div>
                    </div>
                </div>


                <form action="">

                    <div>
                        <input type="text" placeholder="Your Name" />
                        <input type="email" placeholder="Your Email" />
                    </div>


                    <div>
                        <input type="tel" placeholder="Phone Number" />
                        <input type="email" placeholder="Adress" />
                    </div>

                    <textarea placeholder="Your Messege"></textarea>
                    <button>Submit</button>
                </form>
            </div>

        </div>
    );
};

export default Contact;