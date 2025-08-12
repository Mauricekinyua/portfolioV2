'use client'
import React from 'react';
import {navLinks} from "../../constants";
import Image from "next/image";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const NavBar = () => {

    useGSAP(()=>{
        const navTween = gsap.timeline({
            scrollTrigger:{
                trigger: 'nav',
                start: 'bottom top'
            }
        });
        navTween.fromTo('nav',{background: 'transparent'},
            {
                backgroundColor: '#242424',
                duration: 1,
                ease: 'power1.out',
                backgroundFilter: 'blur(10px)',
            })
    })
    return (
        <nav className='w-full flex justify-center'>
            <div className='port_nav bg-gradient p-4 rounded-2xl gap-8 md:gap-9'>
            {navLinks.map((link,index)=>(
                <div key={index} className='flex-row flex-center gap-2 cursor-pointer'>
                    <Image src={link.image} alt={link.title} height={25} width={25}/>
                    <a href={`#${link.id}`} className='max-sm:hidden text-1xl'>{link.title}</a>
                </div>
            ))}
        </div>
        </nav>

    );
};

export default NavBar;
