import React, { FC } from "react";
import defaultLogo from "./default-logo.svg";

import "./Navbar.css";

const Navbar: FC = () => {
    return (
        <header>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="#">
                        <img className="logo-img" src={defaultLogo} alt="logo-img" />
                    </a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-end">
                        <a className="navbar-item is-active" href="#">
                            Home
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
