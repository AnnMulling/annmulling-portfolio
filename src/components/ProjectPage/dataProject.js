import { FaReact as FaReactjs } from "react-icons/fa";
import { SiExpress as SiExpressjs } from "react-icons/si";
import { FaNode as FaNodejs } from "react-icons/fa";
import { SiRedux as SiReduxjs } from "react-icons/si";
import { SiSqlalchemy as SiSqlalchemyjs } from "react-icons/si";
import { SiFlask as SiFlaskjs } from "react-icons/si";
import { TbSql as TbSqljs } from "react-icons/tb";
import { FaGithub as FaGithubjs } from "react-icons/fa";
import { MdWeb as MdWebjs } from "react-icons/md";

//imgs
import annbnb from '../../assets/images/projects/AnnBnb.png';
import cultivate from '../../assets/images/projects/Cultivate.png';
import sketchy from '../../assets/images/projects/Sketchy.png';


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

    ]

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
        description: "Full-Stack Clone of Airbnb with core  CRUD features",
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

        ]
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
        description: "Full-Stack clone/inspired by Etsy website.",
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


        ]
    },
]
