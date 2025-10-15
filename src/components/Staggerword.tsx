import React from 'react';
import {motion, Variants} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

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
    const {ref, inView} = useInView({triggerOnce: true, threshold: 0.5});
    return (
        <h1
        className='about_heading'
        >
        <motion.div
            ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{duration: 0.9,delay: 0, ease:'easeInOut'}}
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