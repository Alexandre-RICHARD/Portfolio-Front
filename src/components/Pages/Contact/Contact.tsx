import React, {useState} from "react";

import {
    portfolioActions,
    requestHandler,
    useAppDispatch
} from "@/IndexImporter";
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
    const dispatch = useAppDispatch();
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
                dispatch(portfolioActions.changeLoadingState(true));
                const response = await requestHandler.sendMail(contactValue);
                if (response !== "error" && response.status === 200) {
                    dispatch(
                        portfolioActions.changeAdvertMessage(
                            "Le mail a bien été envoyé"
                        )
                    );
                    groupSetContactValue({
                        "contactFormName": "",
                        "contactFormMail": "",
                        "contactFormSubject": "",
                        "contactFormMessage": "",
                    });
                }
                dispatch(portfolioActions.changeLoadingState(false));
            } catch (error) {
                const errorF = error as Error;
                requestHandler.errorSaver(
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
                <p className="indication">
                    * Tous les champs sont requis
                </p>
                <p className="indication">
                    ** En envoyant un message, j'accepte que mes informations
                    soient utilisées pour être recontacté plus tard
                </p>
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
