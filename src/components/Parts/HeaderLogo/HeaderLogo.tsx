import React, {useLayoutEffect} from "react";

import "./HeaderLogo.scss";

const HeaderLogo: React.FC = () => {
    useLayoutEffect(() => {
        const body = document.querySelector("body");
        if (body) {
            setTimeout(() => {
                body.style.overflowY = "visible";
            }, 261 * 9.55);
        }
    }, []);

    return (
        <div className="header-logo-cache">
            <div className="header-logo-container">
                <div className="header-logo-div header-logo-div-one">
                    <div />
                    <div />
                    <div />
                </div>
                <div className="header-logo-div header-logo-div-two">
                    <div />
                    <div />
                    <div />
                </div>
                <div className="header-logo-div header-logo-div-tre">
                    <div />
                    <div />
                    <div />
                </div>
                <div className="header-logo-div header-logo-div-for">
                    <div />
                    <div />
                    <div />
                </div>
                <div className="header-logo-div header-logo-div-fiv">
                    <div />
                    <div />
                    <div />
                </div>
                <div className="header-logo-div header-logo-div-six">
                    <div />
                    <div />
                    <div />
                </div>
                <span className="header-logo-letter">
                    A
                </span>
            </div>
        </div>
    );
};

export default HeaderLogo;
