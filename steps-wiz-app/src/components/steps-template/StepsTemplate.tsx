import React, { FC, Children } from "react";

import "./StepsTemplate.css";

const StepsTemplate: FC = ({ children }) => {
    return <div className="step">{children}</div>;
};

export default StepsTemplate;
