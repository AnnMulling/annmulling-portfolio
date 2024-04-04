import { FaReact as FaReactjs } from "react-icons/fa";
import { SiExpress as SiExpressjs } from "react-icons/si";
import { FaNode as FaNodejs } from "react-icons/fa";
import { SiRedux as SiReduxjs } from "react-icons/si";
import { SiSqlalchemy as SiSqlalchemyjs } from "react-icons/si";
import { SiFlask as SiFlaskjs } from "react-icons/si";
import { TbSql as TbSqljs } from "react-icons/tb";
import { FaGithub as FaGithubjs } from "react-icons/fa";
import { MdWeb as MdWebjs } from "react-icons/md";
import { FaHtml5 as FaHtml5js } from "react-icons/fa";
import { FaCss3Alt  as FaCss3Altjs} from "react-icons/fa";

//imgs
import annbnb from '../../assets/images/projects/AnnBnb.png';
import cultivate from '../../assets/images/projects/Cultivate.png';
import sketchy from '../../assets/images/projects/Sketchy.png';
import doordash from '../../assets/images/projects/DoorDash.png';


export const projects = [
    {
        id: 1,
        name: "Cultivate",
        url: [
            {
                id: 1,
                icon: FaGithubjs,
                url: "https://github.com/AnnMulling/Cultivate-project",
            },
            {
                id: 2,
                icon: MdWebjs,
                url: "https://cultivate-project.onrender.com",
            }
        ],
        img: cultivate,
        description: " Full-Stack clone of Trello website with extended functionalities feature inspired by the Forest application.",
        techStack: [
            {
                id: 1,
                name: FaReactjs
            },
            {
                id: 2,
                name: SiReduxjs
            },
            {
                id: 3,
                name: SiExpressjs
            },
            {
                id: 4,
                name: FaNodejs
            },
            {
                id: 5,
                name: TbSqljs
            },
        ],
        development: true,

    },
    {
        id: 2,
        name: "AnnBnb",
        url: [
            {
                id: 1,
                icon: FaGithubjs,
                url: "https://github.com/AnnMulling/API-project",
            },
            {
                id: 2,
                icon: MdWebjs,
                url: "https://api-aribnb-project.onrender.com",
            }
        ],
        img: annbnb,
        description: "Full-Stack Clone of Airbnb.  The crafted interface provides a balance of redundancy for user-friendly navigation, ensuring an intuitive experience. The visual design is clean, avoiding a cluttered or chaotic appearance.",
        techStack: [
            {
             id: 1,
             name: FaReactjs
            },
            {
             id: 2,
             name: SiReduxjs
            },
            {
             id: 3,
             name: SiExpressjs
            },
            {
             id: 4,
             name: FaNodejs
            },
            {
             id: 5,
             name: TbSqljs
            },

        ],
        development: true,
    },
    {
        id: 3,
        name: "Sketchy",
        url: [
            {
                id: 1,
                icon: FaGithubjs,
                url: "https://github.com/Gazdalman/Sketchy-Etsy-clone",
            },
            {
                id: 2,
                icon: MdWebjs,
                url: "https://sketchy-v2.onrender.com",
            }
        ],
        img: sketchy,
        description: "Full-Stack clone/inspired by Etsy website. a lively worldwide marketplace designed for artists and other show people to display their 'unique' items as well as sell their 'unique' goods",
        techStack: [
            {
             id: 1,
             name: FaReactjs
            },
            {
             id: 2,
             name: SiReduxjs
            },
            {
             id: 3,
             name: SiFlaskjs
            },
            {
             id: 4,
             name: SiSqlalchemyjs
            },


        ],
        development: true,
    },
    {
        id: 4,
        name: "Pixel-Clone DoorDash",
        url: [
            {
                id: 1,
                icon: FaGithubjs,
                url: "https://github.com/AnnMulling/pixel-clone-doordash",
            },
            {
                id: 2,
                icon: MdWebjs,
                url: "https://annmulling.github.io/pixel-clone-doordash/",
            }
        ],
        img: doordash,
        description: "A recreation of the renowned DoorDash website, known for its user-friendly interface and seamless food delivery service. Just like the original, this clone offers visitors a sleek and intuitive design that makes ordering food delivery a breeze",
        techStack: [
            {
             id: 1,
             name: FaHtml5js
            },
            {
             id: 2,
             name: FaCss3Altjs
            },
        ],
        development: true,
    },
]
