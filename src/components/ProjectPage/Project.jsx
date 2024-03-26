
import { useState } from "react";
import DropDown from "../Navbar/Dropdown";
import SocialTag from "../Navbar/SocialTag";

//icons
import { CgMenuGridR } from "react-icons/cg";
import { TfiLayoutMenuV } from "react-icons/tfi";

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
                            <ul id={project.id}>

                                <li>
                                    {project.name}
                                </li>

                            </ul>
                        ))}
                    </div>
                }

                {listView &&
                    <div className="list-view">
                        <div>
                            <span>Project Name</span>
                             <span>Tools</span>
                             <span>Code & Site</span>
                        </div>
                        {projects.map((project) => (

                            <ul id={project.id}>
                                <li>

                                </li>
                                <li>{project.name}</li>
                                <li>
                                    {project.techStack.map((tool) => {
                                         return <span>{<tool/>}</span>
                                    })}
                                </li>

                            </ul>
                        ))}

                    </div>
                }
            </div>
        </>

    )
};
