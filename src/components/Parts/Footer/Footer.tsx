import React from "react";

import "./Footer.scss";

const Footer: React.FC = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <p>
                Site créé par Alexandre Richard
            </p>
            <p>
                {`© ${year} - Tout droits réservés`}
            </p>
            <p>
                Hébergé chez
                {" "}
                <a
                    href="https://www.o2switch.fr/"
                    rel="noreferrer"
                    target="_blank"
                >
                    O2Switch
                </a>
            </p>
        </footer>
    );
};

export default Footer;
