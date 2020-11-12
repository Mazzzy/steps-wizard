import React, { FC } from "react";
import Navbar from "../components/navbar/Navbar";
import MainContent from "../components/main-content/MainContent";

import "./Layout.css";

const Layout: FC = () => {
    return (
        <div>
            <Navbar />
            <div className="dashboard-contents">
                <MainContent />
            </div>
        </div>
    );
};

export default Layout;
