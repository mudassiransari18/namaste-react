import { CDN_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

export default Header = () => {
    const [btnName, setBtnName] = useState("Login");
    console.log(btnName);
    return (
        <div className="header">
            <div className="logoContainer">
                <img className="logo" src= { CDN_URL } />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About Us</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                    <li><Link to={"/instamart"}>Instamart</Link></li>
                    <button className="login" onClick={ () => btnName === "Login" ? setBtnName("Logout") : setBtnName("Login") }>{ btnName }</button>
                </ul>
            </div>
        </div>
    )
}