import React from 'react';
import Image from "next/image";

const Projects = () => {
    return (
        <div className='min-h-screen w-full bg-light items-center'>
            <div className="flex flex-col items-center ">
                <Image
                    src='/icons/code.gif'
                    alt='code'
                    height={350}
                    width={380}
                />
                <h1 className='text-gray-800 text-6xl font-extrabold font-andika'>
                    PROJECTS
                </h1>
            </div>
            <div className="flex flex-center bg-background">
                something here...
            </div>
        </div>
    );
};

export default Projects;
