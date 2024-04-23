

//icons
import { GoListUnordered } from "react-icons/go";
import { PiSlideshowFill } from "react-icons/pi";

//css & other
import DropDown from "../../Navbar/Dropdown";
import VolGrid from "./VolGrid";
import VolList from "./VolList";



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
                        <div onClick={setGrid}><PiSlideshowFill /></div>
                        <div onClick={setList}><GoListUnordered /></div>
                    </div>
            </div>
            <div className="work-content">
                {gridView && <VolGrid projects={projects}/> }

                {listView && <VolList projects={projects}/> }
             </div>
        </>
    )
}
