import React from 'react';
import s from './Header.module.css';
import Boss_cat from "..//images/Boss_cat.svg"

const Header = () => {
    return (
        <header>
                <div className={s.header}>
                        <img className={s.img} src={Boss_cat} alt={""}/>
                    </div>
        </header>
    );
};

export default Header;