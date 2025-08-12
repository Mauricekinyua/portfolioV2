import React from 'react';

const Hero = () => {
    return (
       <section className="hero_section">
           <div className='flex flex-center flex-col justify-between gap-6 md:gap-20  md:p-10'>
               <div id='title' className="flex flex-col items-center">
                   <div>
                       <h1 className='text-8xl font-andika font-extrabold max-sm:text-6xl' >Your Vision,</h1>
                   </div>
                   <div>
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
