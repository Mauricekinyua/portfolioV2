import React from 'react';
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import Image from "next/image";

const About = () => {
    return (
        <section className=' min-h-screen items-center p-10'>
            <h1 className=" flex-center font-bold text-5xl">About</h1>
            <div className="flex flex-col-reverse lg:flex-row gap-5 py-10 px-10 flex-center">
                <div className="flex-center">
                    <Image src='/images/resumaai.png'
                           alt='image for now'
                           height={734}
                           width={634}
                    />
                </div>
                <div className="flex-col gap-2 " >
                    <h1 className='flex flex-center p-3'>
                    Hi, I’m Maurice Muchiri, a web developer passionate about building modern,
                    efficient, and user-friendly web applications. I have hands-on experience working with technologies
                    such as Next.js, Tailwind CSS, TypeScript, JavaScript, and Supabase. Whether its developing dynamic
                    front-end interfaces or integrating robust back-end solutions, I enjoy crafting projects that solve
                    real problems and deliver great user experiences.
                </h1>
                <Button variant='secondary'> <h1 className='font-semibold'>Contact Me</h1> </Button></div>
            </div>
        </section>
    );
};

export default About;
