import "./WhyCoose.css";
import { BsShieldFillCheck } from "react-icons/bs";
import { FaUserShield } from "react-icons/fa";
import { GiCarKey, GiTakeMyMoney } from "react-icons/gi";

const WhyCoose = () => {
    return (
        <div className="chooseUsCon">
            <div>
                <h1 className="chooseHeading">Why Choose Us</h1>
       
            </div>


            <div className="ourContent">

                <div className="leftSide">

                    <h1>We Provides The Best</h1>
                    <p>we redefine the car-buying experience with an exceptional blend of variety, quality, and transparency. Our curated selection ensures you find the perfect car, backed by rigorous quality checks and fair pricing</p>
                    <img src="https://i.ibb.co/9vStgdS/wh-img.png" alt="" />
                </div>


                <div className="rightSide">
                    <div className="myCard">


                        <GiCarKey className="myIcon" />

                        <div className="cardBottom">
                            <h1>Extensive Selection</h1>
                            <p>Explore a diverse range of meticulously curated vehicles, ensuring you find the perfect match for your lifestyle and preferences.</p>
                        </div>

                    </div>




                    <div className="myCard">


                        <BsShieldFillCheck className="myIcon" />

                        <div className="cardBottom">
                            <h1>Quality Assurance</h1>
                            <p> Our vehicles undergo rigorous inspections and maintenance, guaranteeing that each car meets the highest standards of quality and reliability.</p>
                        </div>

                    </div>





                    <div className="myCard">


                        <GiTakeMyMoney className="myIcon" />

                        <div className="cardBottom">
                            <h1>Financing Options</h1>
                            <p>We offer flexible financing solutions tailored to your budget, making your dream car more accessible than ever.</p>
                        </div>

                    </div>



                    <div className="myCard">


                        <FaUserShield className="myIcon" />

                        <div className="cardBottom">
                            <h1>Trustworthy Reputation</h1>
                            <p>Join a community of satisfied customers who have chosen us for their automotive needs. Our solid reputation is built on trust</p>
                        </div>

                    </div>
                </div>

            </div>


        </div>
    );
};

export default WhyCoose;