
import { useState } from "react";
import DropDown from "../Navbar/Dropdown";
import SocialTag from "../Navbar/SocialTag";

//icons
import { CgMenuGridR } from "react-icons/cg";
import { TfiLayoutMenuV } from "react-icons/tfi";
import { PiSlideshowFill } from "react-icons/pi";

//css & other
import '../../style/components/workPage.css';
import { projects } from "./dataProject";
import GridView from "./GridView";
import ListView from "./ListView";
import VolProjects from "./Volunteer/VolProjects";
import DevProjects from "./Development/DevProjects";

export default function Work() {
    const [gridView, setGridView] = useState(true);
    const [listView, setListView] = useState(false);
    const [design, setDesign] = useState(false);
    const [dev, setDev] = useState(false);
    const [all, setAll] = useState(true);


    const setGrid = () => {
        setGridView(true)
        setListView(false)
    };
    const setList = () => {
        setGridView(false)
        setListView(true)
    };

    const filterDesign = () => {
        setDesign(true)
        setDev(false)
        setAll(false)
    };
    const filterDev = () => {
        setDesign(false)
        setDev(true)
        setAll(false)
    };

    const showAll = () => {
        setDesign(false)
        setDev(false)
        setAll(true)
    };


    return (
        <>
            <DropDown />

            { design ?
                <VolProjects
                filterDesign={filterDesign}
                filterDev={filterDev}
                showAll={showAll}
                setGrid={setGrid}
                setList={setList}
                projects={projects}
                gridView={gridView}
                listView={listView}
                />
            : dev &&
                <DevProjects
                filterDesign={filterDesign}
                filterDev={filterDev}
                showAll={showAll}
                setGrid={setGrid}
                setList={setList}
                projects={projects}
                gridView={gridView}
                listView={listView}
                /> }

                {all &&
                    <>
                        <div className="work-main-container">
                            <div className="categories">
                                <ul>
                                    <li onClick={showAll} >All </li>
                                    <li onClick={filterDesign}>Volunteer </li>
                                    <li onClick={filterDev}> Development </li>
                                </ul>

                            </div>

                            <div className="views">
                                <div onClick={setGrid}><PiSlideshowFill /></div>
                                <div onClick={setList}><TfiLayoutMenuV/></div>
                            </div>
                        </div>
                        <div className="work-content">
                            {gridView && <GridView projects={projects}/> }

                            {listView && <ListView projects={projects}/> }
                        </div>
                    </>
                }
            {/* <SocialTag /> */}
        </>

    )
};
