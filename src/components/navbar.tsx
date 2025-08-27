'use client'
import React, {useState} from 'react';
import {navLinks} from "../../constants";
import Image from "next/image";
import {useGSAP} from "@gsap/react";
import gsap from "gsap/dist/gsap";

const NavBar = () => {
    const [active, setActive] = useState("hero")

    useGSAP(()=>{
        const navTween = gsap.timeline({
            scrollTrigger:{
                trigger: '#navv',
                start: 'bottom top'
            }
        });
        navTween.fromTo('#navv',{background: 'transparent'},
            {
                backgroundColor: '#66766686;',
                duration: 1,
                ease: 'expo.inOut',
                backgroundFilter: 'blur(10px)',
            })
    })
    return (
        <nav id="navv" className='w-full flex justify-center'>
            <div  id='nav' className='port_nav bg-gradient rounded-2xl gap-6 md:gap-9'>
            {navLinks.map((link,index)=>(

                    <div key={index} className=' cursor-pointer'>
                        <button onClick={()=> setActive(link.id)} className={`md:px-3 flex flex-center rounded-lg duration-200 
                        ${active===link.id ?'bg-foreground hover:bg-gradient':'hover:bg-gray'}`}>
                            <div className='flex-center p-4 gap-2'>
                                <Image src={link.image} alt={link.title} height={25} width={25} unoptimized={true}/>
                                <a href={`#${link.id}`} className={`max-sm:hidden text-1xl 
                                ${active===link.id ? 'text-black' : 'text-white'}`}>{link.title}</a>
                            </div>

                        </button>
                    </div>


            ))}
        </div>
        </nav>

    );
};

export default NavBar;
