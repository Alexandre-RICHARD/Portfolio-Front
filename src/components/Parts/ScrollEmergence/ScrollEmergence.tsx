import React from "react";

import {portfolioActions, useAppDispatch} from "@/IndexImporter";
import "./ScrollEmergence.scss";

const ScrollEmergence: React.FC = () => {
    const dispatch = useAppDispatch();
    const changeHeaderVisibility = (bool: boolean) => {
        dispatch(portfolioActions.changeHeaderVisibility(bool));
    };

    let lastScrollValue = 0;

    document.addEventListener("scroll", () => {
        const currentScrollValue = window.scrollY;
        if (currentScrollValue > 200) {
            if (lastScrollValue < currentScrollValue) {
                changeHeaderVisibility(false);
            } else {
                changeHeaderVisibility(true);
            }
            lastScrollValue = currentScrollValue;
        } else {
            changeHeaderVisibility(true);
        }

        document.querySelectorAll(".appear").forEach((el) => {
            const info = el.getBoundingClientRect();
            if ((info.y || info.top) + 200 < window.innerHeight) {
                el.classList.add("appear-animation");
                el.classList.remove("appear");
            }
        });
    });

    return <></>;
};

export default ScrollEmergence;
