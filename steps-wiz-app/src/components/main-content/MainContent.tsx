import React, { FC, useState } from "react";
import TextField from "../controls/text-field/TextField";

import "./MainContent.css";

const MainContent: FC = () => {
    const [val, setVal] = useState("");
    const steps = [
        { id: "1", title: "Examination" },
        { id: "2", title: "Clinical History" },
        { id: "3", title: "Technique" },
        { id: "4", title: "Findings" },
        { id: "5", title: "Impressions" },
    ];

    const txtChangeHandler = (e: string) => {
        console.log("On step ", e);
    };

    const stepsCollection = steps.map((elem, index) => [
        <div key={`step-container-${index}`}>
            <h3>{elem?.title || ""}</h3>
            <TextField placeholder={elem?.title} value={val} onChange={txtChangeHandler} textarea />
        </div>,
    ]);

    return (
        <div className="main-contents">
            {stepsCollection.length === 0 ? <p>No Steps data available</p> : stepsCollection}
        </div>
    );
};

export default MainContent;
