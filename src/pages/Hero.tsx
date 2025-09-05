import React from 'react';
import {motion} from 'framer-motion';
import Staggerword from "@/components/Staggerword";

const Hero = () => {

    return (
       <section className="hero_section">
           <div className='flex flex-center flex-col justify-between gap-6 md:gap-20  md:p-10 px-3'>
               <div id='title' className="flex-col">
                   <div className='md:flex-center'>
                       <h1 className='text-8xl font-andika font-extrabold max-sm:text-6xl' >
                           Your Vision,
                       </h1>
                   </div>
                   <div >
                       <h1 className='text-8xl font-andika font-extrabold max-sm:text-6xl' >Beautifully Coded.</h1>
                   </div>
               </div>
               <div id='subHead'>
                   <h2 className="text-4xl font-andika max-sm:3xl">
                       Polished. Playful. Purposeful.
                   </h2>
               </div>
           </div>
       </section>
    );
};

export default Hero;
