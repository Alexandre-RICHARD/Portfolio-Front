import React from "react";

import "./LoadingIcon.scss";

const LoadingIcon: React.FC = () => {
    return (
        <div className="loading-cache">
            <div className="loading-box">
                <span className="loading-parts" />
                <span className="loading-parts" />
                <span className="loading-parts" />
                <span className="loading-parts" />
            </div>
        </div>
    );
};

export default LoadingIcon;
