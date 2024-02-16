import React from "react";
import {Link} from "react-router-dom";

import {
    data,
    imageImporter,
    ProjectTypes,
    ProgressionCircle
} from "@/IndexImporter";
import "./ProjectParts.scss";

const ProjectParts: React.FC<{"project": ProjectTypes}> = ({project}) => {
    return (
        <div className="appear one-project-homepage">
            <h3 className="one-project-homepage-title">
                {project.title}
            </h3>
            <p className="one-project-homepage-description">
                {project.abstract}
            </p>
            <div className="one-project-homepage-footer">
                <div className="progression">
                    <ProgressionCircle
                        progression={parseInt(project.progressionPurcent)}
                    />
                    <p className="progression-purcent">
                        {project.progressionPurcent}
                        %
                    </p>
                </div>
                <div className="technos">
                    {project.technos.map((el) => {
                        const techno = data.technosData.find(
                            (techno) => techno.id === el
                        );

                        if (!techno) {
                            return null;
                        }

                        return (
                            <a
                                className="techno"
                                href={techno.external_link}
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
};

export default ProjectParts;
