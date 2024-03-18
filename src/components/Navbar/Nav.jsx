

import { FaLocationDot } from "react-icons/fa6";

import '../../style/Main.css';

export default function Navbar () {
    return(
        <>
            <div className="nav-container">
                <ul>
                    <li>
                        About
                    </li>
                    <li>
                        Work
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
