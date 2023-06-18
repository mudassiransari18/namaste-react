import { CDN_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export default Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const { user } = useContext(UserContext);
    const cartItems = useSelector(store => store.cart.items);

    return (
        <div className="flex justify-between bg-purple-100">
            <div className="logoContainer">
                <img className="h-28" src= { CDN_URL } />
            </div>
            <div className="nav-items">
                <ul className="flex py-10">
                    <li className="px-4"><Link to={"/"}>Home</Link></li>
                    <li className="px-4"><Link to={"/about"}>About Us</Link></li>
                    <li className="px-4"><Link to={"/contact"}>Contact</Link></li>
                    <li className="px-4"><Link to={"/instamart"}>Instamart</Link></li>
                    <li className="px-4"><Link to={"/cart"}>Cart - { cartItems.length } Items</Link></li>
                    <li className="px-4">{ user.name } - ({ user.email })</li>
                    <button className="login px-4" onClick={ () => btnName === "Login" ? setBtnName("Logout") : setBtnName("Login") }>{ btnName }</button>
                </ul>
            </div>
        </div>
    )
}