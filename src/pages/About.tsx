'use client'
import React from 'react';
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import Image from "next/image";
import gsap from "gsap/dist/gsap";
import SplitText from "gsap/dist/SplitText";
import {useGSAP} from "@gsap/react";


const About = () => {
    useGSAP(()=>{
        const titleSplit = SplitText.create('#about .about_heading',{
            type: 'words'
        })
        const scrollTimeline = gsap.timeline({
            scrollTrigger:{
                trigger: '#about',
                start: 'top center'
            }
        })
        scrollTimeline.from(titleSplit.words,{
            opacity: 1,
            duration:1,
            yPercent: 100,
            ease: 'expo.out',
            stagger: 0.027,
        }, '-=0.5')
    })

    const word=(
        <h1 className='text-xl font-bold'>Maurice Muchiri</h1>
    );
    return (
        <section id='about' className='min-h-dvh md:w-2/3 p-10 m-5'>
            <h1  className="about_heading p-2">About</h1>
            <div className="about_content">
                <div className='flex-center'>
                    <Image src='/images/resumaai.png'
                           alt='image for now'
                           height={350}
                           width={300}
                           className='object-fit'
                    />
                </div>
                <div className='flex'>
                    <div className="flex-col gap-3">
                        <h2 className='flex font-medium'>
                            Hi, I’m Maurice Muchiri, a web developer passionate about building modern,
                            efficient, and user-friendly web applications. I have hands-on experience working with technologies
                            such as Next.js, Tailwind CSS, TypeScript, JavaScript, and Supabase. Whether its developing dynamic
                            front-end interfaces or integrating robust back-end solutions, I enjoy crafting projects that solve
                            real problems and deliver great user experiences.
                        </h2>
                        <Button variant='secondary'> <h1 className='font-semibold'>Contact Me</h1> </Button>
                    </div>
                    </div>
            </div>
        </section>
    );
};

export default About;
