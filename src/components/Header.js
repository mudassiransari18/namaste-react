import { CDN_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

export default Header = () => {
    const [btnName, setBtnName] = useState("Login");
    console.log(btnName);
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
                    <button className="login px-4" onClick={ () => btnName === "Login" ? setBtnName("Logout") : setBtnName("Login") }>{ btnName }</button>
                </ul>
            </div>
        </div>
    )
}