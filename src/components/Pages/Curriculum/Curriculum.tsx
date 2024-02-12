import React from "react";

import {CurriculumVitae, dataObject} from "@/IndexImporter";
import "./Curriculum.scss";

const Curriculum: React.FC = () => {
    document.title = "Mon parcours";

    return (
        <div className="curriculum-container">
            <p className="cv-indication">
                Retrouvez mon CV pdf
                {" "}
                <a
                    className="cv-indication-link"
                    href={CurriculumVitae}
                    rel="noreferrer"
                    target="_blank"
                    title="Mon CV à télécharger"
                >
                    ici
                </a>
            </p>
            <div className="categories description">
                <div className="title-box">
                    <h2 className="title">
                        Description
                    </h2>
                    <div className="line-up" />
                </div>
                <p className="description-text">
                    <img
                        alt="Photographie de ma personne"
                        className="photo"
                        src="/src/assets/images/portrait.png"
                    />
                    {dataObject.curriculumDesc}
                </p>
            </div>
            <div className="categories skills">
                <div className="title-box">
                    <h2 className="title">
                        Compétences en développement
                    </h2>
                    <div className="line-up" />
                </div>
                <ul className="skills-list">
                    {dataObject.skillsList.map((el, index) => {
                        return (
                            <li key={index}>
                                {el}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="group-flex">
                <div className="categories qualification">
                    <div className="title-box">
                        <h2 className="title">
                            Diplômes et Certification
                        </h2>
                        <div className="line-up" />
                    </div>
                    <ul className="qualification-list">
                        {dataObject.qualificationsList.map((el, index) => {
                            return (
                                <li key={index}>
                                    {el}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="categories further-information">
                    <div className="title-box">
                        <h2 className="title">
                            Informations complémentaires
                        </h2>
                        <div className="line-up" />
                    </div>
                    <ul className="further-information-list">
                        {dataObject.informationsList.map((el, index) => {
                            return (
                                <li key={index}>
                                    {el}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div className="appear categories professional-experiences">
                <div className="title-box">
                    <h2 className="title">
                        Expériences professionnelles
                    </h2>
                    <div className="line-up" />
                </div>
                {dataObject.professionalExperiences
                    .reverse()
                    .map((el, index) => {
                        return (
                            <div
                                className="appear one-of-them"
                                key={index}
                            >
                                <div className="left">
                                    <p className="whichone">
                                        {el.title}
                                    </p>
                                    <p className="where">
                                        {el.location}
                                    </p>
                                </div>
                                <div className="middle">
                                    <div className="date">
                                        <p>
                                            {el.firstDate}
                                        </p>
                                        {el.secondDate
                                            ? (
                                                <p>
                                                    {el.secondDate}
                                                </p>
                                            )
                                            : null}
                                    </div>
                                    <div className="line-cache" />
                                    <div className="line" />
                                    <div className="line-uncache" />
                                </div>
                                <div className="right">
                                    {el.description}
                                </div>
                            </div>
                        );
                    })}
            </div>
            <div className="appear categories education">
                <div className="title-box">
                    <h2 className="title">
                        Formation
                    </h2>
                    <div className="line-up" />
                </div>
                {dataObject.schoolCurriculum.reverse().map((el, index) => {
                    return (
                        <div
                            className="appear one-of-them"
                            key={index}
                        >
                            <div className="left">
                                <p className="whichone">
                                    {el.title}
                                </p>
                                <p className="where">
                                    {el.location}
                                </p>
                            </div>
                            <div className="middle">
                                <div className="date">
                                    <p>
                                        {el.firstDate}
                                    </p>
                                    {el.secondDate
                                        ? (
                                            <p>
                                                {el.secondDate}
                                            </p>
                                        )
                                        : null}
                                </div>
                                <div className="line-cache" />
                                <div className="line" />
                                <div className="line-uncache" />
                            </div>
                            <div className="right">
                                {el.description}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="appear categories hobbies">
                <div className="title-box">
                    <h2 className="title">
                        Loisirs
                    </h2>
                    <div className="line-up" />
                </div>
                <ul className="hobbies-list">
                    {dataObject.hobbiesList.map((el, index) => {
                        return (
                            <li key={index}>
                                {el}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="appear categories quality">
                <div className="title-box">
                    <h2 className="title">
                        Qualités
                    </h2>
                    <div className="line-up" />
                </div>
                <ul className="qualities-list">
                    {dataObject.qualitiesList.map((el, index) => {
                        return (
                            <li key={index}>
                                {el}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Curriculum;
