import React from "react";

import {CopyIcon} from "@/IndexImporter";
import "./ContactButton.scss";

const ContactButton: React.FC<{
    copyid: string;
    type: string;
    title: string;
    content: string;
    link?: string;
}> = ({
    copyid, type, title, content, link,
}) => {
    const copy = (content: string, copyid: string) => {
        const copyAlert = document.querySelector(`#${copyid}`);
        navigator.clipboard.writeText(content);
        if (copyAlert) {
            copyAlert.classList.toggle("displayed");
            setTimeout(() => {
                copyAlert.classList.toggle("displayed");
            }, 2000);
        }
    };

    return (
        <div className="one-contact-container">
            <img
                alt="logo représentant le launcher cité"
                className="contact-icon"
                src={`/src/assets/images/contactLogo/${copyid}.png`}
            />
            {type === "link"
                ? (
                    <a
                        className="contact-title contact-title-link"
                        href={link}
                        rel="noreferrer"
                        target="_blank"
                    >
                        {title}
                    </a>
                )
                : null}
            {type === "copy"
                ? (
                    <button
                        className="contact-title"
                        type="button"
                        onClick={() => copy(content, copyid)}
                    >
                        {title}
                    </button>
                )
                : null}
            <CopyIcon handleCopy={() => copy(content, copyid)} />
            <span
                className="copy-confirm-alert"
                id={copyid}
            >
                Copié !
            </span>
        </div>
    );
};

export default ContactButton;
