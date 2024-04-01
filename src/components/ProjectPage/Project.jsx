
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
import GridView from "./GridView";
import ListView from "./ListView";

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

                {gridView && <GridView projects={projects}/> }

                {listView && <ListView projects={projects}/> }
            </div>
        </>

    )
};
