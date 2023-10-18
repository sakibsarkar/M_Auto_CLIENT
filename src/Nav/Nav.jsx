import "./Nav.css";
import { useContext } from "react";
import { BsPlusSquare } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../AuthProvider";

const Nav = () => {
    const { user, logOut } = useContext(Context)

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

            {
                user ?
                    <div className="user">
                        <img src={`${user.photoURL}`} alt="" />
                        <h2>{user.displayName}</h2>
                        <button onClick={() => logOut()}>Log out</button>
                    </div>
                    :
                    <div className="dinoSection">
                        <Link to={"/login"}> <button>Log In<BsPlusSquare></BsPlusSquare> </button></Link>
                    </div>
            }
        </nav>
    );
};

export default Nav;