
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

import '../../style/Main.css';


export default function Navbar () {
    return(
        <>
            <div className="nav-container">
                <ul>
                    <li>
                        <Link to="/aboutme" className="link">About Me</Link>
                    </li>
                    <li>
                        <Link to="/work" className="link">Work</Link>
                    </li>
                    <li>
                        Contact
                    </li>
                    <li id="location-tag">
                         Chicago, IL
                         <span className="globe"><FaLocationDot /></span>
                    </li>
                </ul>
            </div>
        </>
    )
}
