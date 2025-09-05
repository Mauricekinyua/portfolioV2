export type Project = {
    id: number;
    title: string;
    description: string;
    link: string;
    image: string;
};

export const navLinks = [
    {
        id: "Home",
        title: 'Home',
        image: '/icons/home.gif',
    },
    {
        id: "About",
        title: 'About',
        image: '/icons/account.gif',
    },
    {
        id: "Projects",
        title: 'Projects',
        image: '/icons/code.gif',
    },
    {
        id: "Contact",
        title: 'Contact',
        image: '/icons/call.gif',
    },

];
export const projects:Project[] =[
    {
        id: 1,
        image: "/images/resumaai.png",
        title: "Resumaai",
        link: "somthing",
        description: "using ai to do your shit btw",
    },
    {
        id:2,
    image: '/images/aab.png',
     title: 'Mojito',
     link:'something',
        description: "Somthing about something and somethuiing"

    },
    {
        id:3,
        image: '/images/mojito.png',
        title: "Learn",
        description: "Somthing about Something",
        link: "Scc",
    }
]