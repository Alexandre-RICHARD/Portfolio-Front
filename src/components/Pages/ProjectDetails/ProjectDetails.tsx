/* eslint-disable @stylistic/max-len */
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

import {dataObject} from "@/IndexImporter";
import "./ProjectDetails.scss";

interface Project {
    "showed": boolean;
    "title": string;
    "linkDetails": string;
    "linkAccess": string;
    "technos": number[];
    "progressionPurcent": string;
    "progression": string;
    "abstract": string;
    "description": string;
    "features": string[];
}

const ProjectDetails: React.FC = () => {
    const navigate = useNavigate();
    const {projectName} = useParams();

    const [
        ourProject,
        setOurProject
    ] = useState<Project>({
        "showed": false,
        "title": "",
        "linkDetails": "",
        "linkAccess": "",
        "technos": [],
        "progressionPurcent": "",
        "progression": "",
        "abstract": "",
        "description": "",
        "features": [],
    });

    useEffect(() => {
        const finded = dataObject.projectList.find((el) => {
            return el.linkDetails === projectName;
        });
        if (finded) {
            setOurProject(finded);
            document.title = `Projet ${finded.title}`;
        } else {
            navigate("/404");
        }
    }, [
        projectName,
        navigate
    ]);

    return (
        <>
            {ourProject
                ? (
                    <div className="detailled-project">
                        <img
                            className="detailled-project-illustration"
                            src={`/src/assets/images/projectIllustration/large/${ourProject.linkDetails}.png`}
                        />
                        <a
                            className="detailled-project-link-access"
                            href={ourProject.linkAccess}
                            rel="noreferrer"
                            target="_blank"
                        >
                            Lien vers le projet
                        </a>
                        <div className="detailled-project-details">
                            <h1 className="detailled-project-title">
                                {ourProject.title}
                            </h1>
                            <p className="detailled-project-description">
                                {ourProject.description}
                            </p>
                            <h3 className="detailled-project-features">
                                Quelques features intéressantes qui s'y trouvent
                            </h3>
                            <div className="detailled-project-list-features">
                                {ourProject.features.map((el, index) => {
                                    return (
                                        <p
                                            className="feature"
                                            key={index}
                                        >
                                            {el}
                                        </p>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )
                : null}
        </>
    );
};

export default ProjectDetails;
