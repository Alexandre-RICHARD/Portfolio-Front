import React from "react";
import {Link} from "react-router-dom";

import {
    CurriculumVitae,
    data,
    portfolioState,
    useAppSelector,
    DownloadIcon,
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
                <a
                    className="resume"
                    href={CurriculumVitae}
                    rel="noreferrer"
                    target="_blank"
                    title="Mon CV à télécharger"
                >
                    <DownloadIcon />
                </a>
            </div>
            <div />
            {/* <BreadCrumb :visibility="modalData.headerVisibility" /> */}
        </header>
    );
};

export default Header;
