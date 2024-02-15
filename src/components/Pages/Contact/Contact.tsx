import React from "react";

import {
    ContactButton, ContactForm, data
} from "@/IndexImporter";
import "./Contact.scss";

const Contact: React.FC = () => {
    document.title = "Me contacter";
    return (
        <>
            <div className="contact-box">
                <div className="contact-sub-box pro">
                    <h2 className="contact-box-title">
                        Contact professionnel
                    </h2>
                    {data.contactList
                        .filter((el) => el.section === "pro")
                        .map((el, index) => {
                            return (
                                <ContactButton
                                    content={el.content}
                                    copyid={el.copyId}
                                    key={index}
                                    link={el.link}
                                    title={el.title}
                                    type={el.type}
                                />
                            );
                        })}
                </div>
                <div className="contact-sub-box games">
                    <h2 className="contact-box-title">
                        J'aime aussi les jeux vidéo
                    </h2>
                    {data.contactList
                        .filter((el) => el.section === "games")
                        .map((el, index) => {
                            return (
                                <ContactButton
                                    content={el.content}
                                    copyid={el.copyId}
                                    key={index}
                                    title={el.title}
                                    type={el.type}
                                />
                            );
                        })}
                </div>
            </div>
            <ContactForm />
        </>
    );
};

export default Contact;
