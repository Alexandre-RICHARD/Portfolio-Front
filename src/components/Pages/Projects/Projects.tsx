/* eslint-disable @stylistic/max-len */
import React from "react";
import {Link} from "react-router-dom";

import {
    dataObject,
    imageImporter,
    ProgressionCircle,
    ProjectTypes
} from "@/IndexImporter";
import "./Projects.scss";

const ProjectParts: React.FC<{"project": ProjectTypes}> = ({project}) => {
    return (
        <div
            className="one-project"
        >
            <img
                src={imageImporter(`projectIllustration/overview/${project.linkDetails}.png`)}
            />
            <div className="one-project-sub-container">
                <h3 className="title">
                    {project.title}
                </h3>
                <div className="state">
                    <div className="progression">
                        <ProgressionCircle
                            progression={parseInt(
                                project.progressionPurcent
                            )}
                        />
                        <p className="progression-purcent">
                            {project.progressionPurcent}
                            {" "}
                            %
                        </p>
                    </div>
                    <p className="progression-description">
                        {project.progression}
                    </p>
                </div>
                <p className="description">
                    {project.abstract}
                </p>
                <div className="technos">
                    {project.technos.map(
                        (
                            technoId: keyof typeof dataObject.technosData,
                            index
                        ) => {
                            const techno =
                                dataObject.technosData.find(
                                    (el) => {
                                        return (
                                            el.id === technoId
                                        );
                                    }
                                );

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
                                        src={imageImporter(`technoLogo/${techno.logo_code}.png`)}
                                    />
                                    <p className="techno-name">
                                        {techno.name}
                                    </p>
                                </a>
                            );
                        }
                    )}
                </div>
                <div className="project-link">
                    <Link
                        className="project-link details"
                        to={`/projects/${project.linkDetails}`}
                    >
                        Détails
                    </Link>
                    <a
                        className="project-link access"
                        href={project.linkAccess}
                        rel="noreferrer"
                        target="_blank"
                    >
                        Lien direct
                    </a>
                </div>
            </div>
        </div>
    );
};

const Projects: React.FC = () => {
    document.title = "Mes projets";

    return (
        <div className="all-projects-container">
            <div className="main-projects">
                <h2 className="projects-category-title">
                    Mes projets principaux
                </h2>
                <div className="projects-box">
                    {dataObject.projectList
                        .filter((el) => el.showed)
                        .map((project, index) => {
                            return (
                                <ProjectParts
                                    key={index}
                                    project={project}
                                />
                            );
                        })}
                </div>
            </div>
            <div className="secondary-projects">
                <h2 className="projects-category-title">
                    Autres projets plus secondaires
                </h2>
                <div className="projects-box">
                    {dataObject.projectList
                        .filter((el) => !el.showed)
                        .map((project, index) => {
                            return (
                                <ProjectParts
                                    key={index}
                                    project={project}
                                />
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default Projects;
