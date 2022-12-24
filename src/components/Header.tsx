import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className={"container"}>
                <div className={"header"}>
                    <div className={"header-wrapper"}>
                        <img className={"img-logo"} src={"https://cdn.onlinewebfonts.com/svg/download_244694.png"}/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;