import "./Nav.css";
import { BsPlusSquare } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <div className="img">
                <Link to={"/"}><img src="https://i.ibb.co/BwKbzpk/logo.png" alt="" /></Link>
            </div>

            <ul>
                <li><NavLink to={'/'} className="navLinks">HOME</NavLink></li>
                <li><NavLink to={'/addProduct'} className="navLinks">Add Product</NavLink></li>
                <li><NavLink to={'myCart'} className="navLinks">My Cart</NavLink></li>
            </ul>

            <div className="dinoSection">
                <Link to={"/login"}> <button className="bg-red">Log In<BsPlusSquare></BsPlusSquare> </button></Link>
            </div>
        </nav>
    );
};

export default Nav;