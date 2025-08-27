import React from 'react';
import Image from "next/image";
import ProjectCards from "@/components/ProjectCards";

const Projects = () => {
    return (
        <article className='w-full'>
            <div id='proj' className='min-h-screen bg-light flex-center'>
                <div className="flex flex-col items-center gap-1">
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

            </div>
            <div className="flex flex-center min-h-dvh bg-background items-center">
                <div className="flex flex-col col-span-2 lg:flex-row ">
                    <div className='flex left-0'>Something</div>
                    <div className="grid"><ProjectCards/></div>
                </div>

            </div>
        </article>

    );
};

export default Projects;
