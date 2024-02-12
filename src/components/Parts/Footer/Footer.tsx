import React from "react";

import pjson from "@/../package.json";
import "./Footer.scss";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <p>
                Site designé et créé par Alexandre Richard
            </p>
            <a
                href="https://github.com/Alexandre-RICHARD/Portfolio-Front"
                target="blank"
            >
                &gt; Répertoire Github du portfolio &lt;
            </a>
            <p>
                Hébergé chez O2 Switch
            </p>
            <p className="versionning">
                {pjson.version}
            </p>
        </footer>
    );
};

export default Footer;
