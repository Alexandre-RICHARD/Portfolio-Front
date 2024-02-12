import React from "react";
import {NavLink} from "react-router-dom";

import "./HeaderLink.scss";

const HeaderLink: React.FC<{
    link: string;
    title: string;
    type: string;
}> = ({
    link, title, type,
}) => {
    const attributes = type === "menu" ? {"data-menu-closer": true} : {};

    return (
        <NavLink
            className={({isActive}) => [
                "nav-link",
                `${type}-nav-link`,
                isActive ? "active" : ""
            ].join(
                " "
            )}
            {...attributes}
            to={link}
        >
            {title}
        </NavLink>
    );
};

export default HeaderLink;
