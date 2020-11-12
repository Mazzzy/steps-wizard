import React, { FC, useState } from "react";
import TextField from "../controls/text-field/TextField";

import "./MainContent.css";

const MainContent: FC = () => {
    const [val, setVal] = useState("");
    return (
        <div className="main-contents">
            <p>Main contents goes here</p>
            <TextField placeholder="Input box" value={val} onChange={setVal} textarea />
        </div>
    );
};

export default MainContent;
