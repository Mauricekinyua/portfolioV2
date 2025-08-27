import React from 'react';
import {projects} from "../../constants";
import Image from "next/image";

const ProjectCards = () => {
    return (
        <div>
            {projects.map((project,index)=>(
                <div key={index}>
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={200}
                        height={300}
                    />
                </div>
            ))}
        </div>
    );
};

export default ProjectCards;
