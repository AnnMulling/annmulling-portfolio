

//icons
import { CgMenuGridR } from "react-icons/cg";
import { TfiLayoutMenuV } from "react-icons/tfi";

//css & other
import DropDown from "../../Navbar/Dropdown";
import DevGrid from "./DevGrid";
import DevList from "./DevList";
import Project1 from "../Project1";

export default function VolProjects({ filterDesign, filterDev, showAll, setGrid, setList, projects, gridView, listView }) {
    return (
        <>
            <DropDown />
            <div className="work-main-container">
                <div className="categories">
                    <ul>
                        <li onClick={showAll}>All</li>
                        <li onClick={filterDesign}> Volunteer </li>
                        <li onClick={filterDev}> Development</li>
                    </ul>
                </div>
                <div className="views">
                    <div onClick={setGrid}><CgMenuGridR /></div>
                    <div onClick={setList}><TfiLayoutMenuV /></div>
                </div>
            </div>
            <div className="work-content">
                {gridView && <DevGrid projects={projects}/>}
                {/* {gridView && <Project1 projects={projects}/>} */}
                {listView && <DevList projects={projects}/>}
            </div>

        </>
    )
}
