/* eslint-disable max-lines-per-function */
import React, {useState} from "react";

import {
    ContactButton, dataObject, errorSaver
} from "@/IndexImporter";
import "./Contact.scss";

const Contact: React.FC = () => {
    const {VITE_API_URL} = import.meta.env;

    document.title = "Me contacter";

    const [
        contactValue,
        setContactValue
    ] = useState({
        "contactFormName": "",
        "contactFormMail": "",
        "contactFormSubject": "",
        "contactFormMessage": "",
    });

    const groupSetContactValue = (data: object) => {
        setContactValue((prevState) => ({
            ...prevState,
            ...data,
        }));
    };

    const sendMail = async () => {
        if (
            contactValue.contactFormMail &&
            contactValue.contactFormMessage &&
            contactValue.contactFormName &&
            contactValue.contactFormSubject
        ) {
            try {
                const response = await fetch(VITE_API_URL + "/contact", {
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    },
                    "method": "POST",
                    "body": JSON.stringify(contactValue),
                });
                if (response.status === 200) {
                    groupSetContactValue({
                        "contactFormName": "",
                        "contactFormMail": "",
                        "contactFormSubject": "",
                        "contactFormMessage": "",
                    });
                }
            } catch (error) {
                const errorF = error as Error;
                errorSaver(
                    "send-mail-from-contact",
                    JSON.stringify(errorF.stack)
                );
            }
        }
    };

    const submitContactForm = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        sendMail();
    };

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        groupSetContactValue({[event.target.id]: event.target.value});
    };

    return (
        <>
            <div className="contact-box">
                <div className="contact-sub-box pro">
                    <h2 className="contact-box-title">
                        Contact professionnel
                    </h2>
                    {dataObject.contactList
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
                    {dataObject.contactList
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
            <div className="contact-me">
                <h1 className="categories">
                    Me contacter directement
                </h1>
                <form className="contact-me-form">
                    <div className="input">
                        <label htmlFor="contactFormName">
                            Nom :
                            {" "}
                        </label>
                        <input
                            required
                            id="contactFormName"
                            name="contactFormName"
                            type="text"
                            value={contactValue.contactFormName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input">
                        <label htmlFor="contactFormMail">
                            Votre adresse mail :
                            {" "}
                        </label>
                        <input
                            required
                            id="contactFormMail"
                            name="contactFormMail"
                            type="email"
                            value={contactValue.contactFormMail}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input">
                        <label htmlFor="contactFormSubject">
                            Objet du message :
                            {" "}
                        </label>
                        <input
                            required
                            id="contactFormSubject"
                            name="contactFormSubject"
                            type="text"
                            value={contactValue.contactFormSubject}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input">
                        <label htmlFor="contactFormMessage">
                            Message :
                            {" "}
                        </label>
                        <textarea
                            required
                            id="contactFormMessage"
                            name="contactFormMessage"
                            value={contactValue.contactFormMessage}
                            onChange={handleChange}
                        />
                    </div>
                    <input
                        className="submit-button"
                        type="submit"
                        value="Envoyer"
                        onClick={submitContactForm}
                    />
                </form>
            </div>
        </>
    );
};

export default Contact;
