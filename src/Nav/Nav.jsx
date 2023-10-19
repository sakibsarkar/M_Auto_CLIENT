import "./Nav.css";
import { useContext, useState } from "react";
import { BsPlusSquare } from "react-icons/bs";
import { RiMenuLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../AuthProvider";

const Nav = () => {
    const { user, logOut } = useContext(Context)
    const [click, setClick] = useState(false)
    console.log(user)

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

            <div className="menuIcon" onClick={() => setClick(!click)}>
                {click ? <RxCross2></RxCross2> : <RiMenuLine></RiMenuLine>}
            </div>

            {
                user ?

                    <>
                        <div className="user">
                            <img src={`${user.photoURL}`} alt="" />
                            <h2>{user.displayName}</h2>
                            <button onClick={() => logOut()}>Log out</button>
                        </div>



                        {
                            click ? <div className="menuBar">
                                <div className="heroUser">
                                    <img src={`${user.photoURL}`} alt="" />
                                    <h2>{user.displayName}</h2>

                                </div>

                                <div className="heroNavLinksCon">
                                    <NavLink to={'/'} className="heroNavLinks">HOME</NavLink>
                                    <NavLink to={'/addProduct'} className="heroNavLinks">Add Product</NavLink>
                                    <NavLink to={'myCart'} className="heroNavLinks">My Cart</NavLink>
                                    <button onClick={() => logOut()}>Log out</button>
                                </div>

                            </div> : ""
                        }


                    </> :

                    <>
                        <div className="dinoSection">
                            <Link to={"/login"}> <button>Log In<BsPlusSquare></BsPlusSquare> </button></Link>
                        </div>
                        {
                            click ? <div className="menuBar">
                                <div className="heroNavLinksCon w-[100%]">
                                    <NavLink to={'/'} className="heroNavLinks">HOME</NavLink>
                                    <NavLink to={'/addProduct'} className="heroNavLinks">Add Product</NavLink>
                                    <NavLink to={'myCart'} className="heroNavLinks">My Cart</NavLink>
                                    <Link to={"/login"} className="w-[100%]"> <button className="w-[55%] flex justify-center items-center gap-[5px]">Log In<BsPlusSquare></BsPlusSquare> </button></Link>
                                </div>

                            </div> : ""
                        }


                    </>
            }
        </nav>
    );
};

export default Nav;