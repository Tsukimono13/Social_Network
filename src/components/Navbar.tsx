import React from 'react';

const Navbar = () => {
    return (
        <div className={"bg-left"}>
        <div className={"left-nav"}>
            <div className={"container"}>
                <nav className={"nav"}>
                    <div>
                        <a href={""}>Profile</a>
                    </div>
                    <div>
                        <a href={""}>Messages</a>
                    </div>
                    <div>
                        <a href={""}>News</a>
                    </div>
                    <div>
                        <a href={""}>Music</a>
                    </div>
                    <div>
                        <a href={""}>Settings</a>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    );
};

export default Navbar;