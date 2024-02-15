import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

import {data, imageImporter} from "@/IndexImporter";
import "./ProjectDetails.scss";

export interface ProjectTypes {
    "abstract": string;
    "description": string;
    "features": string[];
    "linkAccess": string;
    "linkDetails": string;
    "progression": string;
    "progressionPurcent": string;
    "showed": boolean;
    "technos": number[];
    "title": string;
}

const ProjectDetails: React.FC = () => {
    const navigate = useNavigate();
    const {projectName} = useParams();

    const [
        ourProject,
        setOurProject
    ] = useState({
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
        const finded = data.projectList.find((el: ProjectTypes) => {
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

    const illustration = imageImporter(
        `projectIllustration/large/${ourProject.linkDetails}.png`
    );

    return (
        <>
            {ourProject
                ? (
                    <div className="detailled-project">
                        <img
                            className="detailled-project-illustration"
                            src={illustration}
                        />
                        <a
                            className="detailled-project-link-access"
                            href={`import.meta.env${ourProject.linkAccess}`}
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
