'use client'
import React from 'react';
import Image from "next/image";
import ProjectCards from "@/components/ProjectCards";
import {projects} from "../../constants";
import {motion} from "motion/react"

const Projects:React.FC = () => {
    return (

        <article className='w-full'>
            <Section1/>
            <div className="flex flex-center items-center min-h-dvh bg-background  py-12 px-6 w-full ">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="shadow mx-auto max-w-md">
                        <h3 className=" text-xl font-semibold mb-4"> What i do</h3>
                        <p className=" mb-3">
                            I build fast, responsive, and modern web applications with{" "} <span className='font-medium'> Next.js, TypeScript, Taillwindcss</span>
                            and <span className='font-medium'>Supabase</span>.
                        </p>
                    </div>
                    {projects.length > 0 &&(
                        <ProjectCards
                            title={projects[0].title}
                            description={projects[0].description}
                            image={projects[0].image}
                            link={projects[0].link}
                            />
                    )}
                    {projects.slice(1).map((project) => (
                        <ProjectCards title={project.title}
                                      key={project.id}
                                      description={project.description}
                                      link={project.link}
                                      image={project.image} />
                    ))}

                </div>

            </div>
        </article>

    );
};
const Section1 =() =>{
    return (
        <motion.div
            initial={{opacity: 1}}
            whileInView={{opacity: 0}}
            viewport={{margin: '-250px'}}
            id='proj' className='min-h-screen bg-light flex-center'>
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

        </motion.div>
    )
}

export default Projects;
