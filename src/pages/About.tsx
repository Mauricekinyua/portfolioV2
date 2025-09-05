'use client'
import React, {useRef} from 'react';
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import Image from "next/image";
import gsap from "gsap/dist/gsap";
import SplitText from "gsap/dist/SplitText";
import {useGSAP} from "@gsap/react";
import {motion, useAnimation, useInView} from "motion/react"
import Staggerword from "@/components/Staggerword";


const About = () => {


    const variant = {
        hover:{ scale: 1.1},
        tap: {scale: 0.9}
    }



    return (
        <section id='about' className='min-h-dvh  md:p-10 m-5'>

                <Staggerword word={"About"}/>


            <div className="about_content">
                <div className='w-full md:flex-center'>
                    <Image src='/images/resumaai.png'
                           alt='image for now'
                           height={400}
                           width={350}
                           className='object-fill'
                    />
                </div>

                    <div className="flex-col">
                        <h3 className=' font-medium  text-lg'>
                            Hi, I’m{" "} <span className='font-bold'> Maurice Muchiri </span>, a web developer passionate about building modern,
                            efficient, and user-friendly web applications. I have hands-on experience working with technologies
                            such as Next.js, Tailwind CSS, TypeScript, JavaScript, and Supabase. Whether its developing dynamic
                            front-end interfaces or integrating robust back-end solutions, I enjoy crafting projects that solve
                            real problems and deliver great user experiences.
                        </h3>
                        <Button variant='secondary' className={`p-6 mt-4 rounded-3xl items-center`}>
                            <motion.h2 variants={variant} whileHover='hover' whileTap='tap' className='font-semibold'>
                                Contact Me
                            </motion.h2>
                        </Button>
                    </div>
            </div>
        </section>
    );
};

export default About;
