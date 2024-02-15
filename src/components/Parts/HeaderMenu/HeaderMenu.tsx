import React, {useState} from "react";

import {
    CurriculumVitae, data, HeaderLink
} from "@/IndexImporter";
import "./HeaderMenu.scss";

const HeaderMenu: React.FC = () => {
    const [
        menuOpen,
        setMenuOpen
    ] = useState(false);

    const [
        menuOpening,
        setMenuOpening
    ] = useState(false);

    const handleMenuModal = (entryMode: boolean) => {
        if (entryMode) {
            document.addEventListener("click", outsideMenuClickHandler, false);
            setMenuOpen(true);
            setTimeout(() => {
                setMenuOpening(true);
            }, 0);
        }
        if (!entryMode) {
            document.removeEventListener(
                "click",
                outsideMenuClickHandler,
                false
            );
            setMenuOpening(false);
            setTimeout(() => {
                setMenuOpen(false);
            }, 300); // ? A calquer sur la variables SCSS $transition-header-menu-duration
        }
    };
    const outsideMenuClickHandler = (event: MouseEvent) => {
        if (
            event.target instanceof HTMLElement &&
            event.target.attributes.getNamedItem("data-menu-closer")
        ) {
            handleMenuModal(false);
        }
    };

    addEventListener("resize", () => {
        if (menuOpen && window.innerWidth >= 630) {
            handleMenuModal(false);
        }
    });

    return (
        <div>
            <button
                className={`header-button-menu ${menuOpen ? "open" : ""} ${
                    menuOpening ? "opening-closing-transition" : ""
                }`}
                type="button"
                onClick={() => handleMenuModal(!menuOpen)}
            >
                <span />
                <span />
                <span />
            </button>
            <div
                data-menu-closer
                className={`header-menu-blur ${menuOpen ? "open" : ""} ${
                    menuOpening ? "opening-closing-transition" : ""
                }`}
            >
                <div
                    className={`header-menu ${menuOpen ? "open" : ""} ${
                        menuOpening ? "opening-closing-transition" : ""
                    }`}
                >
                    <div className="header-menu-nav">
                        {data.headerLinks.map((el, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <HeaderLink
                                        link={el.link}
                                        title={el.title}
                                        type="menu"
                                    />
                                </React.Fragment>
                            );
                        })}
                        <a
                            data-menu-closer
                            className="nav-link menu-nav-link"
                            href={CurriculumVitae}
                            rel="noreferrer"
                            target="_blank"
                        >
                            Mon CV
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMenu;
