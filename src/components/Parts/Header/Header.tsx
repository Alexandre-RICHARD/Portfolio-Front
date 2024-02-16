import React from "react";
import {Link} from "react-router-dom";

import {
    data,
    portfolioState,
    useAppSelector,
    HeaderLogo,
    HeaderLink
} from "@/IndexImporter";
import "./Header.scss";

const Header: React.FC = () => {
    const headerVisibility = useAppSelector(portfolioState.HeaderVisibility);

    return (
        <header className={`header ${!headerVisibility ? "hidden" : ""}`}>
            <Link
                className="header-logo"
                to="/"
            >
                <HeaderLogo />
            </Link>
            <div className="link-header-container">
                {data.headerLinks.map((el) => {
                    return (
                        <HeaderLink
                            key={el.id}
                            link={el.link}
                            title={el.title}
                            type="header"
                        />
                    );
                })}
            </div>
            <div />
            {/* <BreadCrumb :visibility="modalData.headerVisibility" /> */}
        </header>
    );
};

export default Header;
