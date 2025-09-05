import React from 'react';
import Image from "next/image";
import Link from "next/link";
type ProjectCardsProps = {
    title: string;
    description: string;
    link: string;
    image: string;
}
const ProjectCards:React.FC<ProjectCardsProps> = ({title,description,link,image}) => {
    return (
        <Link href={link} passHref>
            <div className='relative h-98 md:h-111 rounded-2xl overflow-hidden shadow-lg
                cursor-pointer group max-w-md w-full mx-auto'>
                <Image
                    src={image}
                    alt={title}
                    fill
                className='object-cover group-hover:scale-105 transition-transform duration-500'
                    sizes='(max-width: 768px) 100vw, 50vw'
                />
                <div className="">

                </div>
            </div>
        </Link>
    );
};

export default ProjectCards;
