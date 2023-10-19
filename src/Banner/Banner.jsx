import "./Banner.css";

const Banner = () => {
    return (
        <div className="bannerCon">

            <div className="head">

                <h1 className="m-2">Navigate Your <span>Drive</span>,<br /> Brand by Brand</h1>
                <p>
                    offering a broad spectrum of top-notch brands to cater to every discerning driver. Whether you're drawn to the sleek elegance of luxury vehicles, the robust performance of sports cars, or the practicality of reliable family cars, our collection encompasses it all.
                </p>


            </div>


            <div className="shape">
                <img src="https://i.ibb.co/PjK91tq/bg.png" alt="" />
            </div>


            <div className="mobileBanner">
                <img src="https://t3.ftcdn.net/jpg/04/60/44/42/360_F_460444211_E7j3njYE705Rk1guKz9LKh58gFgiTybV.jpg" alt=""/>
            </div>
        </div>
    );
};

export default Banner;