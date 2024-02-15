/* eslint-disable max-lines-per-function */
import React from "react";
import {Link} from "react-router-dom";

import {
    ContactButton,
    data,
    getAge,
    imageImporter,
    ProgressionCircle
} from "@/IndexImporter";
import "./HomePage.scss";

const HomePage: React.FC = () => {
    document.title = "Alexandre Richard";

    return (
        <div className="home-page">
            <section className="welcome-container">
                <h2 className="welcome-in">
                    Bienvenue sur le portfolio d'
                </h2>
                <h1 className="fullname">
                    Alexandre RICHARD
                </h1>
                <h1 className="job">
                    Développeur Web
                </h1>
                <div>
                    <p className="description">
                        Jeune de
                        {" "}
                        <span>
                            {getAge("1999-06-24")}
                            {" "}
                            ans
                        </span>
                        {" "}
                        investi, la passion du code m'attire vers de nouvelles
                        expériences, de nouveaux projets. En quête
                        d'algorithmes, je
                        {" "}
                        <span>
                            recherche ma première expérience
                        </span>
                        {" "}
                        professionnelle en tant qu'
                        <span>
                            alternant
                        </span>
                        {" "}
                        en
                        <span>
                            {" "}
                            Développement Web
                        </span>
                        {" "}
                        sur
                        {" "}
                        <span>
                            Angers et ses alentours
                        </span>
                        {" "}
                        ou en télétravail.
                    </p>
                </div>
            </section>
            <section className="home-section presentation">
                <div className="appear title-box">
                    <h2 className="text-box">
                        Ai-je oublié de me présenter ?
                    </h2>
                </div>
                <div className="appear content">
                    <p className="description">
                        {data.homeDescOne}
                    </p>
                    <p className="description">
                        {data.homeDescTwo}
                    </p>
                    <Link
                        className="appear link-to-more"
                        to="/curriculum"
                    >
                        En savoir plus
                    </Link>
                </div>
            </section>
            <section className="home-section projects">
                <div className="appear title-box">
                    <h2 className="text-box">
                        Mes chers projets
                    </h2>
                </div>
                <div className="appear content">
                    <div className="project-container">
                        {data.projectList
                            .filter((el, index) => index <= 2 && el.showed)
                            .map((project, index) => {
                                return (
                                    <div
                                        className="appear one-project-homepage"
                                        key={index}
                                    >
                                        <h3 className="one-project-homepage-title">
                                            {project.title}
                                        </h3>
                                        <p className="one-project-homepage-description">
                                            {project.abstract}
                                        </p>
                                        <div className="one-project-homepage-footer">
                                            <div className="progression">
                                                <ProgressionCircle
                                                    progression={parseInt(
                                                        project.progressionPurcent
                                                    )}
                                                />
                                                <p className="progression-purcent">
                                                    {project.progressionPurcent}
                                                    %
                                                </p>
                                            </div>
                                            <div className="technos">
                                                {project.technos.map((el) => {
                                                    const techno =
                                                        data.technosData.find(
                                                            (techno) => techno.id === el
                                                        );

                                                    if (!techno) {
                                                        return null;
                                                    }

                                                    return (
                                                        <a
                                                            className="techno"
                                                            href={
                                                                techno.external_link
                                                            }
                                                            key={el}
                                                            rel="noreferrer"
                                                            target="_blank"
                                                        >
                                                            <img
                                                                className="techno-logo"
                                                                src={imageImporter(
                                                                    `technoLogo/${techno.logo_code}.png`
                                                                )}
                                                            />
                                                            <p className="techno-name">
                                                                {techno.name}
                                                            </p>
                                                        </a>
                                                    );
                                                })}
                                            </div>
                                            <Link
                                                className="access"
                                                to="/projects"
                                            >
                                                Voir en détail
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                    <Link
                        className="appear link-to-more"
                        to="/projects"
                    >
                        Tous mes projets
                    </Link>
                </div>
            </section>
            <section className="home-section contacts">
                <div className="appear title-box">
                    <h2 className="text-box">
                        N'hésitez pas à me contacter
                    </h2>
                </div>
                <div className="appear content">
                    <p className="annoncement">
                        Vous pouvez me retrouver sur
                    </p>
                    <div className="contact-container">
                        {data.contactList
                            .filter((el) => el.id <= 3)
                            .map((contact, index) => {
                                return (
                                    <ContactButton
                                        content={contact.content}
                                        copyid={contact.copyId}
                                        key={index}
                                        title={contact.title}
                                        type={contact.type}
                                    />
                                );
                            })}
                    </div>
                    <Link
                        className="link-to-more"
                        to="/contacts"
                    >
                        Tous mes contacts
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
