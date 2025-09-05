'use client'
import React, {useState} from 'react';
import {navLinks} from "../../constants";
import Image from "next/image";
import {motion} from 'motion/react';

const NavBar = () => {
    const [active, setActive] = useState("hero")
     const variants = {
        hover: {scale: 1.1},
         tap: {scale: 0.9}
     }

    return (
        <motion.nav
            initial={{opacity: 0 , scale: 0.85}}
            animate={{opacity:1 ,  scale: 1}}
            transition={{duration: 0.5,delay:0.1,
            ease: "easeInOut"}}
            className='w-full flex justify-center'>
            <div  id='nav' className='port_nav bg-gradient rounded-2xl gap-6 md:gap-9'>
            {navLinks.map((link,index)=>(

                    <div key={index} className=' cursor-pointer'>
                        <button

                            onClick={()=> setActive(link.id)} className={`md:px-3 flex flex-center rounded-2xl duration-200 
                        ${active===link.id ?'bg-foreground hover:bg-gradient':'hover:bg-gray'}`}>
                            <motion.div
                                variants={variants}
                                whileHover= 'hover'
                                whileTap='tap'
                                className='flex-center p-4 gap-2'>
                                <Image src={link.image} alt={link.title} height={25} width={25} unoptimized={true}/>
                                <a href={`#${link.id}`} className={`max-sm:hidden text-1xl 
                                ${active===link.id ? 'text-black' : 'text-white'}`}>{link.title}</a>
                            </motion.div>

                        </button>
                    </div>


            ))}
        </div>
        </motion.nav>

    );
};

export default NavBar;
