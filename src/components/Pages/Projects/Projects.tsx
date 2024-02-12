/* eslint-disable @stylistic/max-len */
import React from "react";
import {Link} from "react-router-dom";

import {dataObject, ProgressionCircle} from "@/IndexImporter";
import "./Projects.scss";

const Projects: React.FC = () => {
    document.title = "Mes projets";

    return (
        <div className="project-container">
            {dataObject.projectList
                .filter((el) => el.showed)
                .map((el, index) => {
                    return (
                        <div
                            className="one-project"
                            key={index}
                        >
                            <img
                                src={`/src/assets/images/projectIllustration/overview/${el.linkDetails}.png`}
                            />
                            <div className="one-project-sub-container">
                                <h3 className="title">
                                    {el.title}
                                </h3>
                                <div className="state">
                                    <div className="progression">
                                        <ProgressionCircle
                                            progression={parseInt(
                                                el.progressionPurcent
                                            )}
                                        />
                                        <p className="progression-purcent">
                                            {el.progressionPurcent}
                                            {" "}
                                            %
                                        </p>
                                    </div>
                                    <p className="progression-description">
                                        {el.progression}
                                    </p>
                                </div>
                                <p className="description">
                                    {el.abstract}
                                </p>
                                <div className="technos">
                                    {el.technos.map((technoId: keyof typeof dataObject.technosData, index) => {
                                        const techno = dataObject.technosData.find((el) => {
                                            return el.id === technoId;
                                        });

                                        if (!techno) {
                                            return null;
                                        }

                                        return (
                                            <a
                                                className="techno"
                                                href={techno.external_link}
                                                key={index}
                                                rel="noreferrer"
                                                target="_blank"
                                            >
                                                <img
                                                    className="techno-logo"
                                                    src={`/src/assets/images/technoLogo/${techno.logo_code}.png`}
                                                />
                                                <p className="techno-name">
                                                    {techno.name}
                                                </p>
                                            </a>
                                        );
                                    })}
                                </div>
                                <div className="project-link">
                                    <Link
                                        className="project-link details"
                                        to={`/projects/${el.linkDetails}`}
                                    >
                                        Détails
                                    </Link>
                                    <a
                                        className="project-link access"
                                        href={el.linkAccess}
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        Lien direct
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

export default Projects;
