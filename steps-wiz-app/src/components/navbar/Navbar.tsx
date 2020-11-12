import React, { FC, MouseEvent } from "react";
import "./Navbar.css";

const Navbar: FC = () => {
    return (
        <header>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <a>Brand</a>
                <ul>
                    <li>Menu1</li>
                    <li>Menu 2</li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
