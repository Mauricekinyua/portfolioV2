import React from 'react';
import {motion, Variants} from 'framer-motion';

const containerVariants: Variants = {
    hidden: {opacity: 0},
    visible:{
        opacity:1,
        transition:{
            staggerChildren: 0.2,
        },
    },
};

const letterVariants:Variants={
    hidden: {opacity:0, y:200},
    visible: { opacity: 1, y:0}
}

const Staggerword = ({word}:{word:string}) => {
    return (
        <h1
        className='about_heading'
        >
        <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{duration: 0.5,delay:0.1,ease:'easeInOut'}}
        style={{display: 'inline-block'}}
        >
            {word.split("").map((char, index)=>(
                <motion.span
                key={index}
                variants={letterVariants}
                style={{display: 'inline-block'}}
                >
                    {char}
                </motion.span>
            ))}
        </motion.div>
        </h1>
    );
};

export default Staggerword;