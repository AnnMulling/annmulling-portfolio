
import { useState } from "react";
import DropDown from "../Navbar/Dropdown";
import SocialTag from "../Navbar/SocialTag";

//icons
import { CgMenuGridR } from "react-icons/cg";
import { TfiLayoutMenuV } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { MdWeb } from "react-icons/md";

//css & other
import '../../style/components/workPage.css';
import { projects } from "./dataProject";

export default function Work() {
    const [gridView, setGridView] = useState(false);
    const [listView, setListView] = useState(true);


    const setGrid = () => {
        setGridView(true)
        setListView(false)
    };
    const setList = () => {
        setGridView(false)
        setListView(true)
    };


    return (
        <>
            <DropDown />
            <SocialTag />

            <div className="work-main-container">
                <div className="categories">
                    <ul>
                        <li>All</li>
                        <li>Design</li>
                        <li>Development</li>
                    </ul>
                </div>
                <div className="views">
                    <div onClick={setGrid}><CgMenuGridR /></div>
                    <div onClick={setList}><TfiLayoutMenuV/></div>
                </div>
            </div>
            <div className="work-content">

                {gridView &&
                    <div className="grid-view">
                        {projects.map((project) => (
                            <ul >
                                <li key={project.id} >
                                    <div style={{fontWeight:"bold"}}>{project.name}</div>
                                    <div className="project-item" >
                                        <a href={project.url[1].url} target="_blank">
                                            <div className="thumb">
                                                <img src={project.img} alt="project" />
                                            </div>
                                            <div className="thumb-inner" >

                                                <p>
                                                    {project.description}

                                                </p>
                                                <p>
                                                    {project.techStack.map((tool) => (
                                                        <span className="tools-block-grid" key={tool.id}><tool.name/></span>
                                                    ))}
                                                </p>
                                                <p >
                                                    {project.url.map((url) => (
                                                        <span  className="tools-block-grid" key={url.id}>
                                                            <a href={url.url} target="_blank"><span><url.icon/></span></a>
                                                        </span>
                                                    ))}
                                                </p>


                                            </div>
                                        </a>

                                    </div>

                                </li>

                            </ul>
                        ))}
                    </div>
                }

                {listView &&
                    <div className="list-view">
                        <div className="list-view-titles">
                            <span>Project Name</span>
                             <span>Tools</span>
                             <span>Code & Site</span>
                        </div>

                        {projects.map((project) => (
                            <ul key={project.id}>
                                <li>{project.name}
                                    <div className="project-content">
                                        {project.techStack.map((tool) => (
                                            <span className="tools-block" key={tool.id}><tool.name/></span>
                                            ))}
                                    </div>

                                    <div className="project-content">
                                        {project.url.map((url) => (
                                            <span className="url-block" key={url.id}>
                                                <a href={url.url} target="_blank"><span><url.icon/></span></a>
                                            </span>
                                        ))}

                                    </div>
                                </li>


                            </ul>
                        ))}

                    </div>
                }
            </div>
        </>

    )
};
