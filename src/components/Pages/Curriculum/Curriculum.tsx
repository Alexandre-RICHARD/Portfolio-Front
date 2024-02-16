/* eslint-disable max-lines-per-function */
import React from "react";

import {
    CurriculumVitae, data, imageImporter
} from "@/IndexImporter";
import "./Curriculum.scss";

export interface DataTypes {
    "skillsList": string[];
    "qualificationsList": string[];
    "informationsList": string[];
    "hobbiesList": string[];
    "qualitiesList": string[];
}

const ListItem: React.FC<{
    "category": string;
    "title": string;
}> = ({category, title}) => {
    const stringData: string[] = data[`${category}List` as keyof DataTypes];

    return (
        <div className={`appear categories ${category}`}>
            <div className="title-box">
                <h2 className="title">
                    {title}
                </h2>
                <div className="line-up" />
            </div>
            <ul className={`${category}-list`}>
                {stringData.map((el: string) => {
                    return (
                        <li key={el}>
                            {el}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

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
                        src={imageImporter("portrait.png")}
                    />
                    {data.curriculumDesc}
                </p>
            </div>
            <div className="group-flex">
                <ListItem
                    category="skills"
                    title="Compétences en développement"
                />
                <div>
                    <ListItem
                        category="qualifications"
                        title="Diplômes et Certification"
                    />
                    <ListItem
                        category="informations"
                        title="Informations complémentaires"
                    />
                </div>
            </div>
            <div className="appear categories professional-experiences">
                <div className="title-box">
                    <h2 className="title">
                        Expériences professionnelles
                    </h2>
                    <div className="line-up" />
                </div>
                {data.professionalExperiences.reverse().map((el, index) => {
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
                {data.schoolCurriculum.reverse().map((el, index) => {
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
            <div className="group-flex">
                <ListItem
                    category="hobbies"
                    title="Loisirs"
                />
                <ListItem
                    category="qualities"
                    title="Qualités"
                />
            </div>
        </div>
    );
};

export default Curriculum;
