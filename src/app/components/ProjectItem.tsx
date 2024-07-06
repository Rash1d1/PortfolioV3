import React from 'react';
import Accordion from "./Accordion";

interface IProject {
    name: string;
    description: string;
    link: string;
}

const ProjectItem: React.FC<IProject> = ({ name, description, link }) => {

    return (
        <>
            <Accordion title={name} description={description} link={link}></Accordion>
        </>
    );
};

export default ProjectItem;
