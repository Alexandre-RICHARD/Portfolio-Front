import React, {useState} from "react";

import {
    CurriculumVitae, data, HeaderLink
} from "@/IndexImporter";
import "./HeaderMenu.scss";

const HeaderMenuPart: React.FC = () => {
    return (
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
    );
};

const HeaderMenu: React.FC = () => {
    const [
        menuOpen,
        setMenuOpen
    ] = useState(false);

    const [
        menuOpening,
        setMenuOpening
    ] = useState(false);

    const handleMenuModal = {
        "entryMode": (mode: boolean) => {
            if (mode) {
                document.addEventListener(
                    "click",
                    handleMenuModal.handleOutsideClick,
                    false
                );
                setMenuOpen(true);
                setTimeout(() => {
                    setMenuOpening(true);
                }, 0);
            }
            if (!mode) {
                document.removeEventListener(
                    "click",
                    handleMenuModal.handleOutsideClick,
                    false
                );
                setMenuOpening(false);
                setTimeout(() => {
                    setMenuOpen(false);
                }, 300); // ? A calquer sur la variables SCSS $transition-header-menu-duration
            }
        },
        "handleOutsideClick": (event: MouseEvent) => {
            if (
                event.target instanceof HTMLElement &&
                event.target.attributes.getNamedItem("data-menu-closer")
            ) {
                handleMenuModal.entryMode(false);
            }
        },
    };

    addEventListener("resize", () => {
        if (menuOpen && window.innerWidth >= 630) {
            handleMenuModal.entryMode(false);
        }
    });

    return (
        <div>
            <button
                className={`header-button-menu ${menuOpen ? "open" : ""} ${
                    menuOpening ? "opening-closing-transition" : ""
                }`}
                type="button"
                onClick={() => handleMenuModal.entryMode(!menuOpen)}
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
                    <HeaderMenuPart />
                </div>
            </div>
        </div>
    );
};

export default HeaderMenu;
