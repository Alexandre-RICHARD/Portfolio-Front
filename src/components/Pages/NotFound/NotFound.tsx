import React from "react";
import {useNavigate} from "react-router-dom";

import {Dolorean} from "@/IndexImporter";
import "./NotFound.scss";

const NotFound: React.FC = () => {
    document.title = "Alexandre Richard";

    const navigate = useNavigate();

    const returnToHome = () => {
        const dolorean = document.querySelector(".dolorean");
        const fire = document.querySelector(".fire");
        if (dolorean && fire) {
            dolorean.classList.toggle("animate");
            fire.classList.toggle("animate");
        }
        setTimeout(() => {
            navigate("/");
        }, 1250);
    };

    return (
        <div className="page404page">
            <span className="page404title">
                404
            </span>
            <p className="page404text">
                Cette partie du site n'existe pas, mais on peut toujours revenir
                en arrière
            </p>
            <img
                alt="La dolorean de retour vers le futur"
                className="dolorean"
                src={Dolorean}
                onClick={returnToHome}
            />
            <div className="fire" />
        </div>
    );
};

export default NotFound;
