import React from 'react';
import s from './Header.module.css';
import Boss_cat from "..//images/Boss_cat.svg"
import {NavLink} from "react-router-dom";

type HeaderPropsType={
    isAuth: boolean
    login: string
}
const Header = (props:HeaderPropsType) => {
    return (
        <header>
                <div className={s.header}>
                        <img className={s.img} src={Boss_cat} alt={""}/>
                </div>
                    <div className={s.loginBlock}>
                        {props.isAuth ? props.login
                        :
                        <NavLink to={'/login'}>Login</NavLink>}
                    </div>
        </header>
    );
};

export default Header;