import React, {useState} from "react";

import {errorSaver} from "@/IndexImporter";
import "./Contact.scss";

const FormInput: React.FC<{
    "name": string;
    "value": string;
    "text": string;
    "type": string;
    "handleInputChange": (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
}> = ({
    name, value, text, type, handleInputChange,
}) => {
    return (
        <div className="input">
            {type === "textarea"
                ? (
                    <textarea
                        required
                        id={name}
                        name={name}
                        placeholder=""
                        value={value}
                        onChange={handleInputChange}
                    />
                )
                : (
                    <input
                        required
                        id={name}
                        name={name}
                        placeholder=""
                        type={type}
                        value={value}
                        onChange={handleInputChange}
                    />
                )}
            <label htmlFor={name}>
                {text}
            </label>
        </div>
    );
};

const formData = [
    {
        "name": "contactFormName",
        "text": "Votre nom",
        "type": "text",
    },
    {
        "name": "contactFormMail",
        "text": "Votre adresse mail",
        "type": "email",
    },
    {
        "name": "contactFormSubject",
        "text": "L'objet du message",
        "type": "text",
    },
    {
        "name": "contactFormMessage",
        "text": "Dîtes-moi tout",
        "type": "textarea",
    }
];

const Contact: React.FC = () => {
    document.title = "Me contacter";

    const {VITE_API_URL} = import.meta.env;

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
        <div className="contact-me">
            <h1 className="contact-me-title">
                Me contacter directement
            </h1>
            <form className="contact-me-form">
                {formData.map((el) => {
                    const value = el.name as keyof typeof contactValue;
                    return (
                        <FormInput
                            handleInputChange={handleChange}
                            key={el.name}
                            name={el.name}
                            text={el.text}
                            type={el.type}
                            value={contactValue[value]}
                        />
                    );
                })}
                <input
                    className="submit-button"
                    type="submit"
                    value="Envoyer le message"
                    onClick={submitContactForm}
                />
            </form>
        </div>
    );
};

export default Contact;
