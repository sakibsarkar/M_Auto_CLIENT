import "./ErrorPage.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="errorCon">
            <img src="https://i.ibb.co/3cpwZBH/server-error-4655655-3861434.pngs" alt="" />
            <h1>Opps ! Page Not Found</h1>
            <p>Go back to <Link to={"/"} className="goBack">Home</Link></p>
        </div>
    );
};

export default ErrorPage;