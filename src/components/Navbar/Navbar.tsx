import React from 'react';
import style from './Navbar.module.css';
import Profile from "../Profile/Profile";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={style.navBar}>
                <nav className={"nav"}>
                    <div>
                        <NavLink to={"/profile"} activeClassName={"active"}>Profile</NavLink>
                    </div>
                    <div>
                        <NavLink to={"/dialogs"} activeClassName={"active"}>Messages</NavLink>
                    </div>
                    <div>
                        <NavLink to={"/news"} activeClassName={"active"}>News</NavLink>
                    </div>
                    <div>
                        <NavLink to={"/music"} activeClassName={"active"}>Music</NavLink>
                    </div>
                    <div>
                        <NavLink to={"/settings"} activeClassName={"active"}>Settings</NavLink>
                    </div>
                </nav>
            </div>
    );
};

export default Navbar;