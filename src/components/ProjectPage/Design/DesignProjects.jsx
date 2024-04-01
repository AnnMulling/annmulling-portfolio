

//icons
import { CgMenuGridR } from "react-icons/cg";
import { TfiLayoutMenuV } from "react-icons/tfi";

//css & other
import DropDown from "../../Navbar/Dropdown";
import DesGrid from "./DesGrid";
import DesList from "./DesList";


export default function DesignProjects({ filterDesign, filterDev, showAll, setGrid, setList, projects, gridView, listView }) {
    return (
        <>
             <DropDown />
             <div className="work-main-container">
                    <div className="categories">
                        <ul>
                            <li onClick={showAll}>All</li>
                            <li onClick={filterDesign}> Design </li>
                            <li onClick={filterDev}> Development</li>
                        </ul>
                    </div>
                    <div className="views">
                        <div onClick={setGrid}><CgMenuGridR /></div>
                        <div onClick={setList}><TfiLayoutMenuV/></div>
                    </div>
            </div>
            <div className="work-content">
                {gridView && <DesGrid projects={projects}/> }
                {listView && <DesList projects={projects}/> }
             </div>
        </>
    )
}
