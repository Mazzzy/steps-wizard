import React, { FC, useState } from "react";
import StepsTemplate from "../steps-template/StepsTemplate";
import TextField from "../controls/text-field/TextField";
import { useFormFields } from "../../lib/hooksLib";

import "./MainContent.css";

const MainContent: FC = () => {
    const steps = [
        { id: "1", title: "Examination", name: "exam" },
        { id: "2", title: "Clinical History", name: "clinic" },
        { id: "3", title: "Technique", name: "technique" },
        { id: "4", title: "Findings", name: "findings" },
        { id: "5", title: "Impressions", name: "impressions" },
    ];

    const [fields, handleFieldChange] = useFormFields({
        exam: "",
        clinic: "",
        technique: "",
        findings: "",
        impressions: "",
    });

    const [currentField, setCurrentField] = useState("");

    const txtChangeHandler = (val: string, name: string) => {
        handleFieldChange(val, name);
    };

    const txtFocusHandler = (event: any, name: string) => {
        setCurrentField(name);
    };

    const validateEntries = () =>
        fields.exam.length > 0 &&
        fields.clinic.length > 0 &&
        fields.technique.length > 0 &&
        fields.findings.length > 0 &&
        fields.impressions.length > 0;

    const handleSubmit = () => {
        alert("All details saved");
    };

    const dynamicClassNames = (fieldName: string) => {
        let className = currentField === fieldName ? "current " : "";
        const field = fields[fieldName];
        if (field.length > 0) {
            className += "is-done";
        }
        return className;
    };

    const stepsCollection = steps.map((elem, index) => [
        <div className={`step-item ${dynamicClassNames(elem.name)}`} key={`step-item-key-${index}`}>
            <h3>{elem?.title || ""}</h3>
            <TextField
                placeholder={elem?.title}
                value={fields[elem.name]}
                onChange={(val) => txtChangeHandler(val, elem.name)}
                onFocus={(event) => txtFocusHandler(event, elem.name)}
                textarea
            />
        </div>,
    ]);

    return (
        <div className="main-contents">
            <StepsTemplate>
                {stepsCollection.length === 0 ? <p>No Steps data available</p> : stepsCollection}
            </StepsTemplate>
            <div className="btn-container">
                <button type="button" className="button" disabled={!validateEntries()} onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    );
};

export default MainContent;
